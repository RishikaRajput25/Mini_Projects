

//currently successfully working


import React, { useEffect, useState, useMemo } from 'react';
import WordCard from './WordCard';

const LeftSection = () => {
  const [savedWords1, setSavedWords1] = useState([]);
  const[count,setcount]=useState(0);
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedWords1')) || [];
    setSavedWords1(saved);
  }, []);

  const handleDelete = (wordToDelete) => {
    const updatedWords = savedWords1.filter(item => item.word !== wordToDelete);
    localStorage.setItem('savedWords1', JSON.stringify(updatedWords));
    setSavedWords1(updatedWords);
  };

  const sortedWords = useMemo(() => {
    return [...savedWords1].sort((a, b) => a.word.localeCompare(b.word));  // Sorted alphabetically
  }, [savedWords1]);

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-white p-6">
      <h2 className="text-4xl font-bold text-center text-[#3ABEF9] mb-8">Searched Words</h2>
      {sortedWords.length === 0 ? (
        <p className="text-gray-400">No saved words found.</p>
      ) : (
        sortedWords.map((item, index) => (
          <div key={index} className="relative    bg-[#2D2D2D] p-10 m-1 rounded-lg shadow-lg  ">
            <WordCard result={item}  />
            <button
              onClick={() => handleDelete(item.word)}
              className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};




export default LeftSection;