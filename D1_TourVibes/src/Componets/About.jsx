export const Modal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 ${
        isOpen ? "flex" : "hidden"
      } items-center justify-center z-10 bg-black bg-opacity-50`}
    >
      <div className="absolute bg-white p-8 rounded-md shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-500">TourVibes</h1>
        <div className="border-t-2 border-gray-200 mb-4"></div>
        <div className="text-lg mb-4">
          <h2 className="font-semibold">Aniket Subhash Patil</h2>
          <p className="text-gray-600">Kolhapur, India</p>
          <p className="text-gray-600">Email: asp15299@gmail.com</p>
          <p className="text-gray-600">For inquiries or assistance, feel free to contact us at asp15299@gmail.com</p>
          
        </div>

        


        <div className="flex justify-center">
          <button
            className="text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
