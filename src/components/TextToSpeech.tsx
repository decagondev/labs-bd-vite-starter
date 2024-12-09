import { useState } from 'react';

const TextToSpeech = () => {
  const [text, setText] = useState('');

  const handleSpeak = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Sorry, your browser does not support text-to-speech.');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Text to Speech</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here"
        rows={4}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '10px',
        }}
      />
      <button
        onClick={handleSpeak}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Speak
      </button>
    </div>
  );
};

export default TextToSpeech;
