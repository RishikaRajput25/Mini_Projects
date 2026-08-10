




//currently successfully working


import { AiOutlineClose } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import Demo from '../demo';
import React, { useState } from 'react';
import WordCard from '../components/WordCard';
import axios from 'axios';

const Home = () => {
  const [searchWord, setSearchWord] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [showCard, setShowCard] = useState(false);

  const handleSearch = async () => {
    if (!searchWord.trim()) {
      setError('Please enter a word to search.');
      setShowCard(false);
      return;
    }

    try {
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );
      setResult(data[0]);
      setError('');
      setShowCard(true);
    } catch {
      setResult(null);
      setError('Word not found. Try another one.');
      setShowCard(false);
    }
  };

  const handleSave = () => {
    if (!result) return;

    const savedWords1 = JSON.parse(localStorage.getItem('savedWords1')) || [];
    const alreadyExists = savedWords1.some(wordObj => wordObj.word === result.word);

    if (alreadyExists) {
      alert('Word already saved!');
    } else {
      localStorage.setItem('savedWords1', JSON.stringify([...savedWords1, result]));
      alert('Word saved successfully!');
    }
  };

  const handleRemoveCard = () => {
    setShowCard(false);
    setResult(null);
    setSearchWord('');
  };

  return (
    <div className="p-4 max-w-7xl mx-auto md:flex gap-6">
      {/* Left Section */}
      <div className="md:w-[70%] space-y-6">

       <h2 className=' font-bold'>Search Word</h2>

        <div className="mt-2 relative">
          <input
            type="text"
            placeholder="Search a word..."
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            className="w-full p-3 pr-10 rounded-lg bg-[#1E1E1E] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3ABEF9]"
          />
          {searchWord && (
            <button
              className="absolute right-3 top-5.5 transform -translate-y-1/2 text-gray-400 hover:text-white"
              onClick={() => setSearchWord('')}
              title="Clear"
            >
              <AiOutlineClose size={20} />
            </button>
          )}
          <button
            onClick={handleSearch}
            className="flex items-center gap-2 bg-[#3ABEF9] hover:bg-[#64CCC5] text-black mt-3 font-semibold px-4 py-2 rounded-lg transition duration-300"
          >
            <FiSearch size={18} />
            Search
          </button>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-[#3ABEF9]">Search Result:</h2>
          {showCard && result ? (
            <div>
              <WordCard result={result} />
              <div className="flex gap-3 mt-2">
                <button
                  onClick={handleSave}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
                <button
                  onClick={handleRemoveCard}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-[#1E1E1E] p-4 rounded-lg mt-2">
              <p className="text-gray-400">{error || 'No search yet.'}</p>
            </div>
          )}
        </div>

        <Demo />
      </div>

      {/* Right Section */}
      <div className="md:w-[30%] mt-6 md:mt-0 text-center space-y-4">
        <img
          src="vocab2.webp"
          alt="English Learning"
          className="rounded-xl w-full h-96 object-cover shadow-md"
        />
        <h2 className="text-white text-lg font-semibold">Boost Your English!</h2>
        <p className="text-gray-400 text-sm">
          Explore, learn, and master new words every day. Your journey to fluency starts here!
        </p>

        <div className="bg-[#1E1E1E] rounded-xl p-4 text-left space-y-2">
          <h3 className="text-white font-semibold text-base">💡 English Learning Tips:</h3>
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
            <li>Learn 5 new words daily and use them in sentences.</li>
            <li>Watch English shows or YouTube videos with subtitles.</li>
            <li>Read English blogs, books, or articles regularly.</li>
            <li>Practice speaking in front of a mirror.</li>
            <li>Write a short paragraph or diary entry daily.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;

