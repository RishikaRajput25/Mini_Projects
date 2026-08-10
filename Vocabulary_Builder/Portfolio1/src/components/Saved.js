// const saveWord=(result)=>{
//   const WordString=JSON.stringify(result);
//   localStorage.setItem('saveWord',WordString);  
//   alert("word Successfully saved");
// }
// saved.js

export const saveWord = (word) => {
    if (!word) {
      alert("No word to save.");
      return;
    }
    const existingWords = JSON.parse(localStorage.getItem('savedWords')) || [];
    existingWords.push(word);
    localStorage.setItem('savedWords', JSON.stringify(existingWords));
    alert("Word successfully saved.");
  };
  
  