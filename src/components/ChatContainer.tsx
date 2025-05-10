import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { Message, ChatState } from '@/types/chat';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export default function ChatContainer() {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isLoading: false,
    error: null,
  });

  const sendMessage = async (content: string) => {
    const userMessage: Message = {
      id: uuidv4(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
      error: null,
    }));

    try {
      const response = await axios.post(`${API_URL}/ask`, {
        text: content,
        model: "auto",
        provide_relevant_context: true,
        top_k: 3,
        data_source_priority: "both"
      });

      const assistantMessage: Message = {
        id: uuidv4(),
        content: response.data.answer,
        role: 'assistant',
        timestamp: new Date(),
      };

      setState(prev => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isLoading: false,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: 'Failed to get response. Please try again.',
      }));
    }
  };

  return (
    <div className="flex h-screen flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        {state.messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {state.isLoading && (
          <div className="flex items-center justify-center p-4">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          </div>
        )}
        {state.error && (
          <div className="rounded-lg bg-red-50 p-4 text-red-700">
            {state.error}
          </div>
        )}
      </div>
      <ChatInput onSendMessage={sendMessage} isLoading={state.isLoading} />
    </div>
  );
} 