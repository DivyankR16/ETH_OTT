import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white max-w-md p-8 rounded-md shadow-md">
        <h1 className="text-3xl font-bold text-red-500 mb-6">Wallet not found!</h1>
        <p className="text-lg text-gray-700 mb-6">Install the metamask or any other wallet .</p>
        <button
          onClick={handleGoBack}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
