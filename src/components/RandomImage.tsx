import { useState, useEffect, ReactElement } from 'react';
import axios from 'axios';

interface ImageResponse {
  id: number;
  url: string;
}

const RandomImage = () : ReactElement => {
  const [imageSource, setImageSource] = useState<string | null>(null);

  const getRandomImage = async () => {
    const randomId = Math.floor(Math.random() * 4) + 1;
    const endpoint = `https://my-json-server.typicode.com/decagondev/fakeapi/images/${randomId}`;

    try {
      const response = await axios.get<ImageResponse>(endpoint);
      setImageSource(response.data.url);
    } catch (error) {
      console.error('Error fetching the image:', error);
      setImageSource(null);
    } finally {
        console.log(imageSource);
    }
  };

  useEffect(() => {
    getRandomImage();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {imageSource ? (
        <img
          src={imageSource}
          alt="Random"
          className="w-600 h-600 object-cover rounded-lg shadow-md"
        />
      ) : (
        <p>Loading image...</p>
      )}
    </div>
  );
};

export default RandomImage;
