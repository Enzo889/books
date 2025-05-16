import { streamText } from 'ai';
import type { APIRoute } from 'astro';
import { openai } from '@ai-sdk/openai';

export const POST: APIRoute = async ({ request }) => {
  try {
    const { messages } = await request.json();

    // 💡 Agregá el `await` acá
    const result = await streamText({
      model: openai('gpt-4-turbo'),
      system: 'You are a helpful assistant.',
      messages,
    });

    return result.toDataStreamResponse();
  } catch (err: any) {
    console.error('🔥 Error en /api/chat:', err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
