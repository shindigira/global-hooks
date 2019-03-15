import React from "react";

import useWord from "../hooks/useWord";

const WordPage = () => {
  const [word, wordActions] = useWord();
  const { changeWord, clearWord } = wordActions;
  const handleChange = e => {
    changeWord(e.target.value);
  };
  return (
    <div>
      <p>Length of Word: {word.length}</p>
      <form>
        <label>Word:</label>
        <input type="text" value={word} onChange={handleChange} />
      </form>
      <button onClick={clearWord}>Clear Word</button>
    </div>
  );
};

export default WordPage;