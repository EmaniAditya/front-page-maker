export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-blue-300 flex justify-between items-center p-4 z-50 shadow-md">
      <a 
        href="https://github.com/emaniaditya/front-page-maker"
        target="_blank"
      >
        <h1 className="text-white text-lg font-bold">Front Page Maker</h1>
      </a>
      <a 
        href="https://github.com/emaniaditya" 
        target="_blank"
      >
        <h1 className="hover:text-white">Developed by Aditya</h1>
      </a>
    </header>
  )
}