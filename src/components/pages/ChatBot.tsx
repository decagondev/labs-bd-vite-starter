import { useState, useEffect, ReactElement } from 'react';
import { DecaChat } from 'deca-chat';
import Markdown from 'react-markdown'

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatbotProps {
  apiKey?: string;
  initialSystemMessage?: string;
}

const ChatBot = ({ 
  apiKey = import.meta.env.VITE_API_KEY,
  initialSystemMessage = 'You are a DecaChat the friendly helpful chat bot.'
} : ChatbotProps): ReactElement => {
  const [chat, setChat] = useState<DecaChat | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!apiKey) {
      console.error('OpenAI API key is required');
      return;
    }

    try {
      const chatInstance = new DecaChat({
        apiKey,
        baseUrl: 'https://api.groq.com/openai/v1',
        model: 'llama-3.1-70b-versatile',
        temperature: 0.7
      });

      chatInstance.setSystemMessage(initialSystemMessage);

      setChat(chatInstance);
    } catch (error) {
      console.error('Failed to initialize DecaChat:', error);
    }
  }, [apiKey, initialSystemMessage]);

  const handleSendMessage = async () => {
    if (!chat || !inputMessage.trim()) return;

    const trimmedMessage = inputMessage.trim();
    setIsLoading(true);

    try {
      setMessages(prev => [...prev, { 
        role: 'user', 
        content: trimmedMessage 
      }]);

      setInputMessage('');

      const response = await chat.chat(trimmedMessage);

      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: response 
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Sorry, there was an error processing your message.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-8xl mx-auto p-4 w-full bg-gray-100">
      <div className="border rounded-lg p-4 h-[600px] overflow-y-auto bg-white shadow-lg">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`mb-2 p-2 rounded ${
              msg.role === 'user' 
                ? 'bg-green-100 text-right' 
                : 'bg-gray-100 text-left'
            }`}
          >
            <Markdown>
              {msg.content}
            </Markdown>
          </div>
        ))}
        {isLoading && (
          <div className="text-center text-gray-500 italic">
            Generating response...
          </div>
        )}
      </div>
      <div className="mt-4 flex">
        <input 
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          className="flex-grow border rounded-l p-2"
          placeholder="Type a message..."
          disabled={isLoading}
        />
        <button 
          onClick={handleSendMessage}
          className={`text-white p-2 rounded-r ${
            isLoading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-500'
          }`}
          disabled={isLoading || !inputMessage.trim()}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default ChatBot;