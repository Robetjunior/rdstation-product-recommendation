import React from 'react';

function SubmitButton({ text, isLoading }) {
  return (
    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center w-full"
      disabled={isLoading}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 border-t-2 border-white rounded-full"
          viewBox="0 0 24 24"
        ></svg>
      ) : (
        text
      )}
    </button>
  );
}

export default SubmitButton;
