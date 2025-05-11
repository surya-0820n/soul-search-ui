import { Message } from '@/types/chat';
import { UserIcon } from '@heroicons/react/24/solid';
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUser && (
        <div className="flex-shrink-0 mr-2">
          <ChatBubbleLeftIcon className="h-8 w-8 text-blue-500 dark:text-blue-400" />
        </div>
      )}
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-3 text-base shadow-md
          ${isUser
            ? 'bg-blue-500 text-white dark:bg-blue-600 ml-auto'
            : 'bg-gray-100 text-gray-900 dark:bg-[#23272f] dark:text-gray-100 mr-auto'}
        `}
      >
        {message.content}
        <div className="mt-1 text-xs text-gray-400 dark:text-gray-500 text-right">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
      {isUser && (
        <div className="flex-shrink-0 ml-2">
          <UserIcon className="h-8 w-8 text-gray-400 dark:text-gray-300" />
        </div>
      )}
    </div>
  );
} 