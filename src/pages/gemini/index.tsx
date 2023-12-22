'use client';

import MessagesGemini from '@/components/Gemini/Messages';
import Navbar from '@/components/Layouts/Navbar';
import { GeminiMessageType } from '@/types/gemini.type';
import { generateUUID, germiniPrompt } from '@/utils';
import { useEffect, useRef, useState } from 'react';

export default function GeminiPage() {
    const [conversation, setConversation] = useState<GeminiMessageType[]>([]);
    const [prompt, setPrompt] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const lastMessageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [conversation]);

    async function onSubmit() {
        if (!prompt) return null;

        const messageUser: GeminiMessageType = {
            id: generateUUID(),
            role: 'user',
            content: prompt,
        };
        setConversation((prev) => [...prev, messageUser]);

        setIsLoading(true);
        const messageModelId = generateUUID(); // Unique ID for the model's messages

        try {
            // const responseStream: any = await fetch('http://localhost:8000/api/germini/chat', {
            const responseStream: any = await fetch('/api/gemini/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    history: germiniPrompt.history,
                    msg: prompt,
                }),
            });

            if (!responseStream.ok) {
                throw new Error(`HTTP error! status: ${responseStream.status}`);
            }

            const reader = responseStream.body.getReader();
            const decoder = new TextDecoder('utf-8');

            while (true) {
                const { done, value } = await reader.read();
                if (done) {
                    console.log('Stream complete');
                    break;
                }

                const chunk = decoder.decode(value, { stream: true });

                setConversation((prev) => {
                    const updated = [...prev];
                    const modelMessageIndex = updated.findIndex((m) => m.id === messageModelId);
                    if (modelMessageIndex !== -1) {
                        updated[modelMessageIndex].content += chunk;
                    } else {
                        updated.push({
                            id: messageModelId,
                            role: 'model',
                            content: chunk,
                        });
                    }
                    return updated;
                });
            }
        } catch (error) {
            console.error('An error occurred:', error);
            alert('Error...');
        } finally {
            setPrompt('');
            setIsLoading(false);
        }
    }

    const handleEnterPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter') {
            onSubmit();
        }
    };

    return (
        <div className="relative w-full h-full flex flex-col justify-start items-start">
            {/* Header - Fixed at Top */}
            <div className="fixed flex top-0 z-10 w-full items-centerpx-4 h-[50px]">
                <Navbar navName={'Generate Unit Test By Google Gemini'} />
            </div>

            {/* Messages - Scrollable Content */}
            <div className="pt-[80px]  p-2 w-full grow overflow-auto h-[86vh]">
                <MessagesGemini data={conversation ?? []} lastMessageRef={lastMessageRef} />
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
