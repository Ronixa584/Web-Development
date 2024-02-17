import React from "react";

const Cards = ({ ImgSrc, leagueName, country, description }) => {
  return (
    <div className="relative border border-black h-[400px] w-auto sm:w-[400px] md:w-auto m-3 overflow-hidden rounded-md transition-all ease-in-out duration-300 transform hover:scale-90 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
      <img
        src={ImgSrc}
        alt="Card Image"
        className="object-cover w-auto sm:w-[400px] h-[400px] rounded-md transition-transform ease-in-out duration-300 transform hover:scale-95"
      />
      <div className="absolute inset-0 hover:bg-black hover:bg-opacity-50 p-4 text-white ">
        <div className="flex flex-col h-full justify-end hover:block">
          <h2 className="text-2xl font-bold mb-2">{leagueName}</h2>
          <p className="text-sm">{country}</p>
          <p className="text-sm mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
