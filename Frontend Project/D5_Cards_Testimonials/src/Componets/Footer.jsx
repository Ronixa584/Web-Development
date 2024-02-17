import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-gradient-to-br from-blue-700 via-blue-300 to-blue-700 text-center text-white">
      <div className="container px-6 pt-6">
        {/* Social Media Icons */}

        <div className="mb-6">
          <p className="text-3xl font-bold ">Follow us on.</p>
        </div>

        <div className="mb-6 flex justify-center">
          <Link
            src="/"
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-blue-700 uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </Link>

          <Link
            src="/"
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-sky-500 uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </Link>

          <Link
            src="/"
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-red-400 uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </svg>
          </Link>

          <Link
            src="/"
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-orange-500 uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </Link>

          <Link
            src="/"
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-blue-600 uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-full w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </Link>

          <Link
            src="/"
            href="#!"
            type="button"
            className="m-1 h-9 w-9 rounded-full border-2 border-red-500 uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="mx-auto h-full w-4"
              fill="currentColor"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path d="M234.33057,69.79736a23.96369,23.96369,0,0,0-14.50489-16.34619C185.55615,40.28223,130.97949,40.39209,128,40.40771c-2.978-.02392-57.55518-.126-91.8252,13.04346A23.96415,23.96415,0,0,0,21.66992,69.79639C19.083,79.72705,16,97.88574,16,128c0,30.11377,3.083,48.27246,5.66943,58.20264a23.96369,23.96369,0,0,0,14.50489,16.34619c32.80615,12.60693,84.22168,13.04541,91.167,13.04541.6206.00049.69678.00049,1.31738,0,6.95069-.00049,58.36231-.43945,91.16651-13.04541a23.96415,23.96415,0,0,0,14.50488-16.34522C236.917,176.273,240,158.11426,240,128,240,97.88623,236.917,79.72754,234.33057,69.79736Zm-72.11182,61.53076-48,32A3.99967,3.99967,0,0,1,108,160V96a3.99968,3.99968,0,0,1,6.21875-3.32813l48,32a3.99979,3.99979,0,0,1,0,6.65625Z"></path>
            </svg>
          </Link>
        </div>

        <div className="mb-6">
          <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-400">
            Come on india let’s football.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Southern Clubs</h5>
            <ul className="mb-0 list-none">
              <li>
                <Link src="/" href="#!" className="text-black">
                  Kerala Blasters FC
                </Link>
              </li>
              <li>
                <Link src="/" href="#!" className="text-black">
                  Bengaluru FC
                </Link>
              </li>
              <li>
                <Link src="/" href="#!" className="text-black">
                  Chennaiyin FC
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Northern Clubs</h5>

            <ul className="mb-0 list-none">
              <li>
                <Link src="/" href="#!" className="text-black">
                  Jamshedpur FC
                </Link>
              </li>
              <li>
                <Link src="/" href="#!" className="text-black">
                  NorthEast United FC
                </Link>
              </li>
              <li>
                <Link src="/" href="#!" className="text-black">
                  Odisha FC
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Eastern Clubs</h5>

            <ul className="mb-0 list-none">
              <li>
                <Link src="/" href="#!" className="text-black">
                  SC East Bengal
                </Link>
              </li>
              <li>
                <Link src="/" href="#!" className="text-black">
                  Hyderabad FC
                </Link>
              </li>
              <li>
                <Link src="/" href="#!" className="text-black">
                  Hyderabad FC
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Western Clubs</h5>

            <ul className="mb-0 list-none">
              <li>
                <Link src="/" href="#!" className="text-black">
                  FC Goa
                </Link>
              </li>
              <li>
                <Link src="/" href="#!" className="text-black">
                  Mumbai City FC
                </Link>
              </li>
              <li>
                <Link src="/" href="#!" className="text-black">
                  ATK Mohun Bagan FC
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full p-4 text-center font-medium text-black">
        © 2024 Copyright
      </div>
    </footer>
  );
};
