'use client';
import Messages from '@/components/Assistanst/Messages';
import Navbar from '@/components/Layouts/Navbar';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
    const [prompt, setPrompt] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [messages, setMessages] = useState<any>();
    const [threadID, setThreadID] = useState<string>('');
    const lastMessageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    async function onSubmit() {
        if (!prompt) return null;

        setIsLoading(true);

        const body = {
            thread_id: threadID,
            message: prompt,
        };

        try {
            const response = await fetch(`/api/assistants/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const botResponse = await response.json(); // Parse response as JSON
            setThreadID(botResponse[0]?.thread_id);
            setMessages(botResponse);
        } catch (error) {
            console.error('An error occurred:', error);
            alert('Error...');
        } finally {
            setIsLoading(false);
            setPrompt('');
        }
    }

    const handleEnterPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            onSubmit();
        }
    };

    return (
        <div className="relative w-full h-full max-h-full flex flex-col justify-start items-start">
            {/* Header - Fixed at Top */}
            <div className="fixed flex top-0 z-10 w-full items-centerpx-4 h-[50px]">
                <Navbar navName={'Generate Unit Test By GPT Assistant'} />
            </div>

            {/* Messages - Scrollable Content */}
            <div className="pt-[80px]  p-2 w-full grow overflow-auto h-[86vh]">
                <Messages data={messages ?? []} lastMessageRef={lastMessageRef} />
            </div>

            {/* Textarea and Button - Fixed at Bottom */}
            <div className="fixed bottom-3 flex flex-row justify-center items-center w-full pb-3 px-4 sm:px-8 max-h-[100px] blackdrop-blur">
                <div className="flex w-full max-w-4xl justify-center">
                    <textarea
                        disabled={isLoading}
                        value={prompt}
                        className="textarea textarea-bordered w-full max-h-[64px]"
                        placeholder="Type something..."
                        onChange={(e) => setPrompt(e.target.value)}
                        // onKeyDown={(event) => handleEnterPress(event)}
                    />
                    {isLoading ? (
                        <button className="ml-2 px-4 btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                            <span className="loading loading-spinner" />
                            Send
                        </button>
                    ) : (
                        <button
                            className="ml-2 px-4 btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                            onClick={() => onSubmit()}
                        >
                            Send
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
