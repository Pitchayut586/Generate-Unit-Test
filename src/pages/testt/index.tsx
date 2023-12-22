// import ConversationView from '../../app/components/ConversationView';

// const Test = () => {
//     return <ConversationView />;
// };

// export default Test;

import { germiniPrompt } from '@/utils';
import React, { useState } from 'react';

const MessageSender: React.FC = () => {
    const [message, setMessage] = useState<string>('');
    const [response, setResponse] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const responseStream: any = await fetch('http://localhost:8000/api/germini/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    history: germiniPrompt.history,
                    msg: message,
                }),
            });

            if (!responseStream.ok) {
                throw new Error(`HTTP error! status: ${responseStream.status}`);
            }

            const reader = responseStream.body.getReader();
            const decoder = new TextDecoder('utf-8');

            reader.read().then(function processText({ done, value }: { done: boolean; value: Uint8Array }) {
                if (done) {
                    return;
                }

                const chunk = decoder.decode(value, { stream: true });
                setResponse((prev) => prev + chunk);

                return reader.read().then(processText);
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit">Send</button>
            </form>
            <div>
                <p>Response:</p>
                <pre>{response}</pre>
            </div>
        </div>
    );
};

export default MessageSender;
