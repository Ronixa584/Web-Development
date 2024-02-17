import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNested, setIsOpenNested] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleNested = () => {
    setIsOpenNested(!isOpenNested);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const closeDropdownNested = () => {
    setIsOpenNested(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if ((isOpen || isOpenNested) && !e.target.closest(".dropdown")) {
        closeDropdown();
        closeDropdownNested();
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, isOpenNested]);

  return (
    <header className="border border-black flex flex-col smCustom:flex-row items-center justify-center z-10 bg-transparent bg-gradient-to-br from-blue-700 via-blue-300 to-blue-700">
      <div className=" smCustom:w-1/4">
        <img
          src="./ISL.png"
          alt="ISL Logo"
          className="h-44 smCustom:h-40 smCustom:max-smCustom:w-52 lg:ml-8"
        />
      </div>
      <div className=" p-4 m-3 smCustom:w-3/4 flex items-center justify-center smCustom:justify-end">
        <ul className="px-4 flex flex-wrap flex-col smCustom:flex-row gap-2 font-mono text-lg text-center ">
          <div className="dropdown ">
            <button
              className=" px-4 main border-b-2 border-black smCustom:border-collapse"
              onClick={toggle}
            >
              Teams<i className="fa fa-caret-down ml-2"></i>
            </button>
            <div
              className={`list ${
                isOpen ? "block" : "hidden"
              } z-10 absolute bg-transparent w-20 grid justify-center py-1 ml-3 smCustom:ml-0`}
            >
              <li className=" p-2 border-b-2 border-black bg-gradient-to-br from-blue-700 via-blue-300 to-blue-700">
                South Teams
              </li>
              <li className=" p-2 border-b-2 border-black  bg-gradient-to-br from-blue-700 via-blue-300 to-blue-700">
                North Teams
              </li>
              <li
                className="p-2 border-b-2 border-black  bg-gradient-to-br from-blue-700 via-blue-300 to-blue-700"
                onClick={toggleNested}
              >
                West Teams
                <i className="fa fa-caret-down ml-2 transform -rotate-90"></i>
              </li>
              {isOpenNested && (
                <div
                  className={`list ${
                    isOpenNested ? "block" : "hidden"
                  } z-10 absolute bg-transparent w-20 grid justify-center py-[148px] smCustom:py-[151px] ml-20`}
                >
                  <li className="ml-1 p-2 border-b-2 border-black bg-gradient-to-br from-blue-700 via-blue-300 to-blue-700">
                    FC Goa
                  </li>
                  <li className="ml-1 p-2 border-b-2 border-black  bg-gradient-to-br from-blue-700 via-blue-300 to-blue-700">
                    Mumbai City FC
                  </li>
                  {/* <li className="ml-1 p-2 border-b-2 border-black  bg-gradient-to-br from-blue-700 via-blue-300 to-blue-700">
                    Mohan Bagan FC
                  </li> */}
                </div>
              )}
              <li className="p-2 border-b-2 border-black  bg-gradient-to-br from-blue-700 via-blue-300 to-blue-700">
                East Teams
              </li>
            </div>
          </div>
          {/* </div> */}
          <li className="px-4 border-b-2 border-black">News</li>
          <li className="px-4 border-b-2 border-black">Table</li>
          <li className="px-4 border-b-2 border-black">Stats</li>
          <li className="px-4 border-b-2 border-black">Players</li>
        </ul>
      </div>
    </header>
  );
};

