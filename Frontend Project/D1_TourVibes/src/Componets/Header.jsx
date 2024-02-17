import { useState } from 'react';
import { Link } from "react-router-dom";
import { Modal } from './About';

export const Header = () => {
  const [ModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // const backgroundImageUrl = './bg1.png';

  return (
    
    <header
      className="font-mono p-4 md:h-28 md:flex justify-between items-center bg-cover bg-center w-full h-auto bg-gradient-to-r from-green-400 to-amber-300"
      // style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="flex items-center justify-center m-5">
        <img src="./logo (3).png" alt="Note Craft" className="h-24 lg:ml-8" />
      </div>
      <div className="flex items-center justify-center m-5">
        <ul className="block  space-x-4 md:flex justify-between items-center">
          <Link to="/">
            <li className="">
              <span className="text-xl font-bold">
                Home
              </span>
            </li>
          </Link>
          <Link to="/Explore">
            <li className="">
              <span className="text-xl font-bold">
                Explore
              </span>
            </li>
          </Link>
          <Link to="/Services">
            <li className="">
              <span className="text-xl font-bold">
                Services
              </span>
            </li>
          </Link>
          {/* <Link to="/About"> */}
            <button onClick={openModal}>
            <li className="">
              <span className="text-xl font-bold">
                About Us
              </span>
            </li>
            </button>
          {/* </Link> */}
        </ul>
      </div>

      
        <>
          {ModalOpen ? (
            <>
              <Modal
                isOpen={ModalOpen}
                onClose={closeModal}
              />
            </>
          ) : (
            <></>
          )}
        </>

      <div className="flex items-center">
          <Link to="/LogIn">
            <button
              className="text-xl font-bold"
            >
              Login
            </button>
          </Link>
      </div>
    </header>
  )
}



