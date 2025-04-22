import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-[80vh] flex-col">
      <h1 className="text-5xl font-bold text-gray-800">Not Found 404</h1>
      <button
        onClick={() => navigate("/")}
        className=" font-bold mt-5 bg-gray-200 rounded-xl p-2 hover:bg-gray-400 transition duration-200 ease-in cursor-pointer"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFoundPage;
