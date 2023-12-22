import { getModel, openAIApiEndpoint, openAIApiKey } from '@/utils';
import { createParser, ParsedEvent, ReconnectInterval } from 'eventsource-parser';
import { NextRequest, NextResponse } from 'next/server';

// Needs Edge for streaming response.
export const config = {
    runtime: 'edge',
};

const getApiEndpoint = (apiEndpoint: string) => {
    const url = new URL(apiEndpoint);
    url.pathname = '/v1/chat/completions';
    return url;
};

const handler = async (req: NextRequest, res: NextResponse) => {
    try {
        // const reqBody = await req.json();
        // console.log(reqBody.model);

        const reqBody = {
            messages: [
                {
                    role: 'user',
                    content: 'หวัดดีครับ เเนะนำอาหารไทย',
                },
            ],
            model: 'gpt-3.5-turbo-16k',
        };

        const apiKey = openAIApiKey;

        const apiEndpoint = getApiEndpoint(openAIApiEndpoint);
        const model = getModel(reqBody.model);
        const remoteRes = await fetch(apiEndpoint, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
            method: 'POST',
            body: JSON.stringify({
                model: model.name,
                messages: reqBody.messages,
                temperature: model.temperature,
                frequency_penalty: model.frequency_penalty,
                presence_penalty: model.presence_penalty,
                stream: true,
            }),
        });

        // Create a new Headers object to modify the response headers
        const headers = new Headers(remoteRes.headers);

        // Add CORS headers
        headers.set('Access-Control-Allow-Origin', '*'); // Allows all origins
        headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');

        if (!remoteRes.ok) {
            return new Response(remoteRes.body, {
                status: remoteRes.status,
                statusText: remoteRes.statusText,
                headers: headers,
            });
        }

        const encoder = new TextEncoder();
        const decoder = new TextDecoder();
        const stream = new ReadableStream({
            async start(controller) {
                const streamParser = (event: ParsedEvent | ReconnectInterval) => {
                    if (event.type === 'event') {
                        const data = event.data;
                        if (data === '[DONE]') {
                            controller.close();
                            return;
                        }
                        try {
                            const json = JSON.parse(data);
                            const text = json.choices[0].delta?.content;
                            const queue = encoder.encode(text);
                            controller.enqueue(queue);
                        } catch (e) {
                            controller.error(e);
                        }
                    }
                };
                const parser = createParser(streamParser);

                for await (const chunk of remoteRes.body as any) {
                    parser.feed(decoder.decode(chunk));
                }
            },
        });

        return new Response(stream, { headers: headers });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
};

export default handler;
