import ChatContainer from '@/components/ChatContainer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-4xl">
        <header className="border-b border-gray-200 bg-white p-4">
          <h1 className="text-2xl font-bold text-gray-900">Soul Search Chat</h1>
        </header>
        <ChatContainer />
      </div>
    </main>
  );
}
