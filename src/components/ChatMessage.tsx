import { Message } from '@/types/chat';
import { UserIcon } from '@heroicons/react/24/solid';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={`flex items-start gap-4 p-4 ${message.role === 'assistant' ? 'bg-gray-50' : ''}`}>
      <div className="flex-shrink-0">
        {message.role === 'user' ? (
          <UserIcon className="h-8 w-8 text-gray-400" />
        ) : (
          <ChatBubbleLeftIcon className="h-8 w-8 text-blue-500" />
        )}
      </div>
      <div className="flex-1 space-y-2">
        <div className="text-sm font-medium text-gray-900">
          {message.role === 'user' ? 'You' : 'Assistant'}
        </div>
        <div className="text-sm text-gray-700 whitespace-pre-wrap">
          {message.content}
        </div>
        <div className="text-xs text-gray-500">
          {message.timestamp.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
} 