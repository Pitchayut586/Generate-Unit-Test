import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const payload = req.body;

  try {
    const openai = new OpenAI({
      apiKey: "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",
    });

    //Check thread id
    let thread: any;
    if (payload.thread_id) {
      thread = { id: payload.thread_id };
    } else {
      thread = await openai.beta.threads.create();
    }

    // Add message in a threads
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: payload.message,
    });

    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: "asst_EPCjgESfL85NPQf1ug58h3Di",
    });

    // Check run status
    // wait for the thread to finish
    let retrieval = await openai.beta.threads.runs.retrieve(
      run.thread_id,
      run.id
    );
    // do polling until message status is completed
    let pollCount = 0;
    while (retrieval.status !== "completed") {
      retrieval = await openai.beta.threads.runs.retrieve(
        run.thread_id,
        run.id
      );
      console.log(`polling ${pollCount++}`);
      await sleep(3000);
    }
    console.log(`polling Compelte`);

    // GET message in thread
    const messages: any = await openai.beta.threads.messages.list(thread.id);

    return res.status(200).json(messages.data);
  } catch (error) {
    console.log(error);
    return res.status(422).json(null);
  }
}
