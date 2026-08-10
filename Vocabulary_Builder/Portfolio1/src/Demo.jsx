



//new updated for saving  staurday night 26/04/25 //currently successfully working

// import React, { useState, useCallback } from "react";
// import axios from "axios";

// const Demo = ({ onSaveWords }) => {
//   const [loading, setLoading] = useState(false);
//   const [wordsWithDefinitions, setWordsWithDefinitions] = useState([]);
//   const [error, setError] = useState('');
  
//   const generateWords = async () => {
//     setLoading(true);
//     setError('');
//     let validWords = [];

//     while (validWords.length < 5) {
//       try {
//         const response = await axios.get("https://random-word-api.herokuapp.com/word?number=5");
//         const fetchedWords = response.data;

//         for (const word of fetchedWords) {
//           if (validWords.length >= 5) break;

//           try {
//             const definitionResponse = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
//             const wordData = definitionResponse.data[0];
//             const definitions = wordData.meanings.flatMap((meaning) =>
//               meaning.definitions.map((def) => ({
//                 definition: def.definition,
//                 example: def.example || "No example available.",
//               }))
//             );

//             if (definitions.length > 0) {
//               validWords.push({ word, definitions: definitions.slice(0, 3) });
//             }
//           } catch (error) {
//             console.warn(`No definitions found for "${word}". Fetching another word.`);
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching words:", error);
//         setError('Failed to fetch words. Please try again.');
//       }
//     }

//     if (validWords.length === 0) {
//       setError('No words with definitions found.');
//     }

//     setWordsWithDefinitions(validWords);
//     setLoading(false);
//   };

//   // const handleSaveWord = (WOrditem) => {
//   //   if (onSaveWords) {
//   //     onSaveWords(WOrditem);
//   //   }
//   // };

  
//   const handleSave = (item) => {
//     if (!item) return;

//     const savedWords = JSON.parse(localStorage.getItem('savedWords')) || [];
//     const alreadyExists = savedWords.some(wordObj => wordObj.word === item.word);

//     if (alreadyExists) {
//       alert('Word already saved!');
//     } else {
//       localStorage.setItem('savedWords', JSON.stringify([...savedWords, item]));
      
//       alert('Word saved successfully!');
//     }
// //extra streak working 
// // After saving word
// const today = new Date().toISOString().split('T')[0];
// let savedDates = JSON.parse(localStorage.getItem('savedDates')) || [];
// if (!savedDates.includes(today)) {
//   savedDates.push(today);
//   localStorage.setItem('savedDates', JSON.stringify(savedDates));
// }






//   };

//   return (
//     <>
//       <div className="p-4">
//         <button
//           onClick={generateWords}
//           className="bg-[#3ABEF9] hover:bg-[#64CCC5] text-black px-4 py-2 rounded"
//           disabled={loading}
//         >
//           {loading ? "Generating..." : "Generate 5 Words"}
//         </button>
//       </div>

//       {loading ? (
//         <div className="p-4">Loading definitions...</div>
//       ) : (
//         <div className="h-auto w-auto bg-[#1E1E1E] p-4 rounded-lg mt-2 text-white space-y-4">
//           {error && <p className="text-red-500">{error}</p>}
//           {wordsWithDefinitions.length === 0 ? (
//             <p className="text-gray-400">No words with definitions found.</p>
//           ) : (
//             wordsWithDefinitions.map((item, index) => (
//               <div key={index} className="mb-4 border-b border-gray-700 pb-2">
//                 <h1 className="text-xl text-[#3ABEF9] font-bold">{item.word}</h1>
//                 {item.definitions.map((def, i) => (
//                   <div key={i} className="mb-2">
//                     <p className="italic">Definition {i + 1}: {def.definition}</p>
//                     <p>Example: {def.example}</p>
//                   </div>
//                 ))}


// <button
//       onClick={() => handleSave(item)}
//       className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 mt-2 rounded"
//     >
//       Save this Word
//     </button>



//               </div>
//             ))
//           )}
          
//         </div>
//       )}
//     </>
//   );
// };

// export default Demo;









import React, { useState, useCallback } from "react";
import axios from "axios";

const Demo = ({ onSaveWords }) => {
  const [loading, setLoading] = useState(false);
  const [wordsWithDefinitions, setWordsWithDefinitions] = useState([]);
  const [error, setError] = useState('');
  
  const generateWords = async () => {
    setLoading(true);
    setError('');
    let validWords = [];

    while (validWords.length < 5) {
      try {
        const response = await axios.get("https://random-word-api.herokuapp.com/word?number=5");
        const fetchedWords = response.data;

        for (const word of fetchedWords) {
          if (validWords.length >= 5) break;

          try {
            const definitionResponse = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const wordData = definitionResponse.data[0];
            const definitions = wordData.meanings.flatMap((meaning) =>
              meaning.definitions.map((def) => ({
                definition: def.definition,
                example: def.example || "No example available.",
              }))
            );

            if (definitions.length > 0) {
              validWords.push({ word, definitions: definitions.slice(0, 3) });
            }
          } catch (error) {
            console.warn(`No definitions found for "${word}". Fetching another word.`);
          }
        }
      } catch (error) {
        console.error("Error fetching words:", error);
        setError('Failed to fetch words. Please try again.');
      }
    }

    if (validWords.length === 0) {
      setError('No words with definitions found.');
    }

    setWordsWithDefinitions(validWords);
    setLoading(false);
  };

  // const handleSaveWord = (WOrditem) => {
  //   if (onSaveWords) {
  //     onSaveWords(WOrditem);
  //   }
  // };

  
  const handleSave = (item) => {
    if (!item) return;

    const savedWords = JSON.parse(localStorage.getItem('savedWords')) || [];
    const alreadyExists = savedWords.some(wordObj => wordObj.word === item.word);

    if (alreadyExists) {
      alert('Word already saved!');
    } else {
      localStorage.setItem('savedWords', JSON.stringify([...savedWords, item]));
      
      alert('Word saved successfully!');
    }
//extra streak working 
// After saving word
const today = new Date().toISOString().split('T')[0];
let savedDates = JSON.parse(localStorage.getItem('savedDates')) || [];
if (!savedDates.includes(today)) {
  savedDates.push(today);
  localStorage.setItem('savedDates', JSON.stringify(savedDates));
}






  };

  return (
    <>
      <div className="p-4">
        <button
          onClick={generateWords}
          className="bg-[#3ABEF9] hover:bg-[#64CCC5] text-black px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate 5 Words"}
        </button>
      </div>

      {loading ? (
        <div className="p-4">Loading definitions...</div>
      ) : (
        <div className="h-auto w-auto bg-[#1E1E1E] p-4 rounded-lg mt-2 text-white space-y-4">
          {error && <p className="text-red-500">{error}</p>}
          {wordsWithDefinitions.length === 0 ? (
            <p className="text-gray-400">No words with definitions found.</p>
          ) : (
            wordsWithDefinitions.map((item, index) => (
              <div key={index} className="mb-4 border-b border-gray-700 pb-2">
                <h1 className="text-xl text-[#3ABEF9] font-bold">{item.word}</h1>
                {item.definitions.map((def, i) => (
                  <div key={i} className="mb-2">
                    <p className="italic">Definition {i + 1}: {def.definition}</p>
                    <p>Example: {def.example}</p>
                  </div>
                ))}


<button
      onClick={() => handleSave(item)}
      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 mt-2 rounded"
    >
      Save this Word
    </button>



              </div>
            ))
          )}
          
        </div>
      )}
    </>
  );
};

export default Demo;



