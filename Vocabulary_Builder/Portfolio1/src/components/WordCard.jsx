


//currently successfully working 
import React from 'react';
import { FaVolumeUp } from 'react-icons/fa';

const WordCard = ({ result }) => {
  if (!result) return null;

  return (
    <div className=" p-4 rounded-lg mt-2 bg-[#2D2D2D] text-white space-y-2">
      <h2 className="text-2xl font-bold text-[#3ABEF9] capitalize">{result.word}</h2>

      {result.phonetics?.map((phonetic, idx) => (
        <div key={idx} className="flex items-center gap-2 text-sm">
          {phonetic.text && <span className="text-[#64CCC5]">{phonetic.text}</span>}
          {phonetic.audio && (
            <button
              onClick={() => new Audio(phonetic.audio).play()}
              className="hover:text-[#3ABEF9] transition"
              title="Play Pronunciation"
            >
              <FaVolumeUp size={18} />
            </button>
          )}
        </div>
      ))}

      {result.meanings?.map((meaning, idx) => (
        <div key={idx} className="mt-2">
          <p className="text-[#3ABEF9] font-semibold">{meaning.partOfSpeech}</p>
          <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
            {meaning.definitions?.slice(0, 2).map((def, i) => (
              <li key={i}>{def.definition}</li>
            ))}
          </ul>
        </div>
      ))}

      {result.sourceUrls && (
        <a
          href={result.sourceUrls[0]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#3ABEF9] underline"
        >
          Source
        </a>
      )}
    </div>
  );
};

export default WordCard;


