import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br">
      <div className="w-16 h-16 border-4 border-t-orange-500 border-yellow-300 rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner;
