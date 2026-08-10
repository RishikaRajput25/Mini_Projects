



//currently successfully working
import React, { useState, useEffect } from "react";

const RightSection = () => {
  const [savedWords, setSavedWords] = useState([]);

  // Load saved words from localStorage when the component mounts
  useEffect(() => {
    const storedWords = JSON.parse(localStorage.getItem("savedWords")) || [];
    setSavedWords(storedWords);
  }, []);

  // Handle word deletion
  const handleDelete = (wordToDelete) => {
    const updatedWords = savedWords.filter((item) => item.word !== wordToDelete);
    localStorage.setItem("savedWords", JSON.stringify(updatedWords));  // Update localStorage
    setSavedWords(updatedWords);  // Update state
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white p-6">
      <h1 className="text-3xl font-bold text-center text-[#3ABEF9] mb-8">Random Words</h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {savedWords.length === 0 ? (
          <p className="text-center text-gray-400">No saved words yet.</p>
        ) : (
          savedWords.map((item, index) => (
            <div key={index} className="bg-[#2D2D2D] p-6 rounded-lg shadow-lg relative">
              <h2 className="text-2xl text-[#3ABEF9] font-bold mb-4">{item.word}</h2>
              {item.definitions && item.definitions.length > 0 ? (
                item.definitions.map((def, i) => (
                  <div key={i} className="mb-4">
                    <p className="italic text-gray-300">Definition {i + 1}: {def.definition}</p>
                    <p className="text-gray-400">Example: {def.example}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-400">No definitions available.</p>
              )}
              <button
                onClick={() => handleDelete(item.word)} // Delete word
                className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RightSection;
