'use client';

import { useChat } from '@ai-sdk/react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, status } = useChat({
    api: '/api/chat',
    onFinish: (message) => {
      console.log('✅ Respuesta final:', message);
    },
    onError: (error) => {
      console.error('❌ Error desde useChat:', error);
    },
  });
  

  return (
    <>
    <Card>
      <CardContent>

      {messages.map(message => (
        <div key={message.id}>
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.content}
        </div>
      ))}

      <form className='space-y-1.5' onSubmit={handleSubmit}>
        <Input name="prompt" value={input} placeholder='Send a message...' disabled={status !== 'ready'} onChange={handleInputChange} />
        <Button >Submit</Button>
      </form>
      </CardContent>
    </Card>
    </>
  );
}