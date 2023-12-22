import { NextApiRequest, NextApiResponse } from 'next';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Assuming this is the correct way to initialize GoogleGenerativeAI
const genAI = new GoogleGenerativeAI('AIzaSyAQmy9kolEloEfsOYW5MvczAmlwS8el9N8');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const reqBody = req.body;

            const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

            const chat = model.startChat({
                history: reqBody.history,
                generationConfig: {
                    maxOutputTokens: 2048,
                },
            });

            const msg = reqBody.msg;

            const result = await chat.sendMessageStream(msg);

            for await (const chunk of result.stream) {
                const chunkText = chunk.text();
                if (chunkText) {
                    res.write(chunkText);
                }
            }
            res.end();
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        // Handle non-POST requests
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
