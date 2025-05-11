import { useState, FormEvent } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

export default function ChatInput({ onSendMessage, isLoading }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sticky bottom-0 z-10 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[#15171a] p-4 flex items-center gap-4"
      style={{ boxShadow: '0 -2px 8px 0 rgba(0,0,0,0.03)' }}
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#23272f] px-4 py-3 text-base text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
        disabled={isLoading}
        autoFocus
      />
      <button
        type="submit"
        disabled={isLoading || !message.trim()}
        className="rounded-xl bg-blue-500 px-4 py-3 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 transition-colors"
      >
        <PaperAirplaneIcon className="h-5 w-5" />
      </button>
    </form>
  );
} 