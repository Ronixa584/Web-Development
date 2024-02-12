
import { Link } from "react-router-dom";

export const Header = () => {

  return (
    <header className="font-serif p-4 bg-slate-300 border border-black flex flex-col 2xl:flex-row justify-between items-center">
  <div className="flex flex-col items-center justify-center m-5 text-5xl font-semibold md:flex-row">
    <div className="md:mr-2">NexusPulse</div>
    <div className="md:ml-2">University</div>
  </div>
      <div className="flex items-center justify-center m-5">
        <ul className="p-2 pl-8 space-x-4 md:flex justify-between items-center">
          <Link to="/">
            <li className="p-2 group transition-all duration-300 ease-in-out flex items-center justify-center text-xl mx-3 cursor-pointer">
              <span className="text-xl font-bold bg-left-bottom bg-gradient-to-r  from-teal-400 to-purple-600 bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
                Home
              </span>
            </li>
          </Link>
          <Link to="/">
            <li className="p-1 group transition-all duration-300 ease-in-out flex items-center justify-center text-xl mx-3 cursor-pointer">
              <span className="text-xl font-bold bg-left-bottom bg-gradient-to-r  from-teal-400 to-purple-600 bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
                Pages
              </span>
            </li>
          </Link>
          <Link to="/">
            <li className="p-1 group transition-all duration-300 ease-in-out flex items-center justify-center text-xl mx-3 cursor-pointer">
              <span className="text-xl font-bold bg-left-bottom bg-gradient-to-r  from-teal-400 to-purple-600 bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
                Academics
              </span>
            </li>
          </Link>
                    <Link to="/">
            <li className="p-1 group transition-all duration-300 ease-in-out flex items-center justify-center text-xl mx-3 cursor-pointer">
              <span className="text-xl font-bold bg-left-bottom bg-gradient-to-r  from-teal-400 to-purple-600 bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
                Courses
              </span>
            </li>
          </Link>
            <Link to="/">
            <li className="p-1 group transition-all duration-300 ease-in-out flex items-center justify-center text-xl mx-3 cursor-pointer">
              <span className="text-xl font-bold bg-left-bottom bg-gradient-to-r  from-teal-400 to-purple-600 bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
                Athletics
              </span>
            </li>
          </Link>
                    <Link to="/">
            <li className="p-2 pr-0 group transition-all duration-300 ease-in-out flex items-center justify-center text-xl mx-3 cursor-pointer">
              <span className="text-xl font-bold bg-left-bottom bg-gradient-to-r  from-teal-400 to-purple-600 bg-[length:0%_3px] bg-no-repeat group-hover:bg-[length:100%_3px] transition-all duration-500 ease-out">
                University Life
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </header>
  )
}



