import React, { useState, useEffect } from 'react';
import { DecaChat } from 'deca-chat';
import Markdown from 'react-markdown';

interface GameMessage {
  role: 'user' | 'system' | 'game';
  content: string;
}

const DungeonCrawler: React.FC = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [playerInfo, setPlayerInfo] = useState({
    name: '',
    race: '',
    age: '',
    job: ''
  });
  const [messages, setMessages] = useState<GameMessage[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [llm, setLlm] = useState<DecaChat | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY

  useEffect(() => {
    const initDecaChat = async () => {
      try {
        const decaChatInstance = new DecaChat({
            apiKey,
            baseUrl: 'https://api.groq.com/openai/v1',
            model: 'llama-3.1-70b-versatile',
            temperature: 0.7
        });
        setLlm(decaChatInstance);
      } catch (error) {
        console.error('Failed to initialize Deca-chat:', error);
        addMessage({
          role: 'system', 
          content: 'Failed to initialize AI storyteller. Please try again later.'
        });
      }
    };

    initDecaChat();
  }, []);

  const addMessage = (message: GameMessage) => {
    setMessages(prev => [...prev, message]);
  };

  const generateCharacterPersona = async () => {
    if (!llm) return;

    try {
      const personaPrompt = `Create a unique character persona based on these details:
      - Name: ${playerInfo.name}
      - Race: ${playerInfo.race}
      - Age: ${playerInfo.age}
      - Job: ${playerInfo.job}

      Generate a backstory that includes:
      1. A unique personality trait
      2. A secret ability or hidden talent
      3. A mysterious past connection
      4. Potential for breaking the fourth wall
      5. A hint at their ultimate destiny`;

      setIsLoading(true);
      const generatedPersona = await llm.chat(personaPrompt);

      addMessage({ 
        role: 'game', 
        content: `**Character Persona:**\n\n${generatedPersona}` 
      });
      setIsLoading(false);
    } catch (error) {
      console.error('Persona generation error:', error);
      addMessage({ 
        role: 'system', 
        content: 'Failed to generate character persona' 
      });
      setIsLoading(false);
    }
  };

  const generateStorySegment = async (command: string) => {
    if (!llm) return '';

    try {
      const storyPrompt = `Current Game Context:
      - Player Command: ${command}

      Generate a narrative segment that:
      1. Responds dynamically to the player's command
      2. Provides subtle hints about future challenges
      3. Maintains an engaging storytelling style
      4. Suggests potential interactions`;

      setIsLoading(true);
      const storySegment = await llm.chat(storyPrompt);

      setIsLoading(false);
      return storySegment;
    } catch (error) {
      console.error('Story generation error:', error);
      setIsLoading(false);
      return 'The narrative threads momentarily escape your grasp...';
    }
  };

  const handleCharacterCreation = async () => {
    if (Object.values(playerInfo).every(val => val.trim() !== '')) {
      setGameStarted(true);
      addMessage({ 
        role: 'game', 
        content: `**Welcome, ${playerInfo.name}!**\n\nYou stand at the beginning of an epic adventure. What is your first move?` 
      });
      await generateCharacterPersona();
    }
  };

  const handleCommand = async () => {
    if (!currentCommand.trim() || !llm || isLoading) return;

    addMessage({ 
      role: 'user', 
      content: currentCommand 
    });

    const storySegment = await generateStorySegment(currentCommand.toLowerCase());

    addMessage({ 
      role: 'game', 
      content: storySegment 
    });

    setCurrentCommand('');
  };

  if (!gameStarted) {
    return (
      <div className="max-w-md mx-auto p-4 bg-gray-100 min-h-screen flex flex-col justify-center">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">Create Your Character</h2>
          <div className="space-y-4">
            <input 
              type="text"
              placeholder="Name"
              value={playerInfo.name}
              onChange={(e) => setPlayerInfo(prev => ({...prev, name: e.target.value}))}
              className="w-full p-2 border rounded"
            />
            <input 
              type="text"
              placeholder="Race"
              value={playerInfo.race}
              onChange={(e) => setPlayerInfo(prev => ({...prev, race: e.target.value}))}
              className="w-full p-2 border rounded"
            />
            <input 
              type="number"
              placeholder="Age"
              value={playerInfo.age}
              onChange={(e) => setPlayerInfo(prev => ({...prev, age: e.target.value}))}
              className="w-full p-2 border rounded"
            />
            <input 
              type="text"
              placeholder="Job/Profession"
              value={playerInfo.job}
              onChange={(e) => setPlayerInfo(prev => ({...prev, job: e.target.value}))}
              className="w-full p-2 border rounded"
            />
            <button 
              onClick={handleCharacterCreation}
              disabled={Object.values(playerInfo).some(val => val.trim() === '')}
              className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:bg-gray-400"
            >
              Start Adventure
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-8xl mx-auto p-4 w-full bg-gray-100">
      <div className="border rounded-lg p-4 h-[600px] overflow-y-auto bg-white shadow-lg">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`mb-2 p-2 rounded ${
              msg.role === 'user' 
                ? 'bg-green-100 text-right' 
                : msg.role === 'system'
                  ? 'bg-red-100'
                  : 'bg-gray-100 text-left'
            }`}
          >
            <Markdown>{msg.content}</Markdown>
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
          value={currentCommand}
          onChange={(e) => setCurrentCommand(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleCommand()}
          className="flex-grow border rounded-l p-2"
          placeholder="Enter your command..."
          disabled={isLoading}
        />
        <button 
          onClick={handleCommand}
          className={`text-white p-2 rounded-r ${
            isLoading 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-green-600 hover:bg-green-500'
          }`}
          disabled={isLoading || !currentCommand.trim()}
        >
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default DungeonCrawler;