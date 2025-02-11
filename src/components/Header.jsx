import { useState, useEffect } from 'react';
import countapi from 'countapi-js';

export const Header = () => {
  const [visitorCount, setVisitorCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    countapi
      .get('emaniaditya.github.io', 'front-page-maker')
      .then(result => {
        setVisitorCount(result.value); 
      })
      .catch(error => {
        console.error('Error fetching visitor count:', error);
        setVisitorCount('N.A'); 
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <header className='rounded-md fixed top-0 left-0 w-full bg-yellow-300 flex justify-between items-center p-4 z-50 shadow-md text-black text-lg font-bold hover:underline'>
        <a href='https://github.com/emaniaditya/front-page-maker' target='_blank'>
          <h1>Front Page Maker</h1>
          <p className='text-sm font-normal'>
            Total Visitors: {isLoading ? 'Loading...' : visitorCount}
          </p>
        </a>
        <div className='flex items-center gap-4'>
          <a href='https://github.com/emaniaditya' target='_blank'>
            <h1 className='font-normal'>Developed by Aditya</h1>
          </a>
        </div>
      </header>
    </div>
  );
};
