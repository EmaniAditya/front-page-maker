
export const Header = () => {
  return (
    <div>
      <header className='rounded-md fixed top-0 left-0 w-full bg-yellow-300 flex justify-between items-center p-4 z-50 shadow-md text-black text-lg font-bold hover:underline'>
        <a href='https://github.com/emaniaditya/front-page-maker' target='_blank'>
          <h1>Front Page Maker</h1>
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
