import { Link } from "react-router-dom";

export const Header = () => {

      function handleClick() {
      if (collapseMenu.style.display === 'block') {
        collapseMenu.style.display = 'none';
      } else {
        collapseMenu.style.display = 'block';
      }
    }


  return (

  <header className='shadow-md bg-amber-500 font-sans bg-opacity-50'>
    <section
      className='flex items-center md:justify-center max-sm:flex-col relative py-3 px-10 border-white border-b lg:min-h-[80px] min-h-[60px]'>
       <Link to="/" className="text-5xl text-gray-800 sm:pr-3 font-semibold max-md:w-full max-sm:mb-4"> {/* max-md:w-full max-sm:mb-4  */}
        The Riverton Library
      </Link>
    </section>

    <div className='flex flex-wrap py-3.5 px-10 overflow-x-auto'>
      <div className='flex ml-auto md:order-1 md:hidden '>
        <button id="toggle" className='ml-7' onClick={handleClick}>
          <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <ul id="collapseMenu"
        className='md:!flex justify-center md:space-x-4 max-md:space-y-3 max-md:hidden w-full max-md:mt-2'>
        <li className='border-b-2 border-gray-100 py-2 hover:border-black hover:border-b-2'>
          <Link to="/" 
            className=' text-gray-700 font-bold text-[15px] block'>Home</Link></li>
        <li className='border-b-2 border-gray-100  py-2 hover:border-black hover:border-b-2'><Link to="/" 
            className=' text-gray-700 font-bold text-[15px] block'>Services</Link></li>
        <li className='border-b-2 border-gray-100 py-2 hover:border-black hover:border-b-2'><Link to="/" 
            className=' text-gray-700 font-bold text-[15px] block'>Blog</Link></li>
        <li className='border-b-2 border-gray-100  py-2 hover:border-black hover:border-b-2'><Link to="/" 
            className=' text-gray-700 font-bold text-[15px] block'>Resources</Link></li>
        <li className='border-b-2 border-gray-100  py-2 hover:border-black hover:border-b-2'><Link to="/" 
            className=' text-gray-700 font-bold text-[15px] block'>Contact</Link></li>
        <li className='border-b-2 border-gray-100  py-2 hover:border-black hover:border-b-2'><Link to="/" 
            className=' text-gray-700 font-bold text-[15px] block'>Source</Link></li>
        <li className='border-b-2 border-gray-100  py-2 hover:border-black hover:border-b-2'><Link to="/" 
            className=' text-gray-700 font-bold text-[15px] block'>Contact</Link></li>
        <li className='border-b-2 border-gray-100  py-2 hover:border-black hover:border-b-2'><Link to="/" 
            className=' text-gray-700 font-bold text-[15px] block'>About</Link></li>
        <li className='border-b-2 border-gray-100  py-2 hover:border-black hover:border-b-2'><Link to="/" 
            className=' text-gray-700 font-bold text-[15px] block'>SIGN-IN</Link></li>
      </ul>
    </div>
  </header>
  )
}






