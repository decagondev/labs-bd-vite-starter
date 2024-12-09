interface Quote {
  author: string;
  quote: string;
}

const quotes: Quote[] = [
  { author: 'Albert Einstein', quote: 'Imagination is more important than knowledge.' },
  { author: 'Nelson Mandela', quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.' },
  { author: 'Steve Jobs', quote: 'Your time is limited, so don’t waste it living someone else’s life.' },
  { author: 'Mahatma Gandhi', quote: 'Live as if you were to die tomorrow.' },
  { author: 'Elon Musk', quote: 'Failure is an option here. If things are not failing, you are not innovating enough.' },
];

const RandomQuote = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-green-600">Quote Of The Day</h2>
      <blockquote className="mt-4 border-l-4 border-green-600 pl-4">
        <p className="text-lg font-medium">{randomQuote.quote}</p>
        <footer className="mt-2 text-sm text-gray-600">
          <cite className="text-green-600">{randomQuote.author}</cite>
        </footer>
      </blockquote>
    </div>
  );
};

export default RandomQuote;