import React, { useState } from 'react';

function App() {
  const buttonTextItems = [
    'Bears, beets, battlestar galactica',
    `What's Forrest Gump's password? 1Forrest1`,
    'Where do programmers like to hang out? The Foo Bar'
  ];
  const initialGameState = {
    victory: false,
    startTime: null,
    endTime: null,
  }

  const [snippet, setSnippet] = useState('');
  const [userText, setUserText] = useState('');
  const [gameState, setGameState] = useState(initialGameState);

  function updateUserText(event) {
    const newUserText = event.target.value;
    setUserText(newUserText);
    if (newUserText === snippet) {
      setGameState({
        ...gameState,
        victory: true,
        endTime: new Date().getTime() - gameState.startTime,
      })
    }
  }

  function chooseSnippet(index) {
    setSnippet(buttonTextItems[index]);
    setGameState({
      ...initialGameState,
      startTime: new Date().getTime(),
    })
  }

  return (
    <div>
      <h2>TypeRace</h2>
      <hr />
      <h3>Snippet</h3>
      <div>{snippet}</div>
      <h4>{gameState.victory ? `Done! Woot! Time: ${gameState.endTime}ms` : null}</h4>
      <input value={userText} onChange={updateUserText} />
      <hr />
      {buttonTextItems.map((snippetText, index) =>
        <button key={index} onClick={() => chooseSnippet(index)}>{snippetText}</button>)}
    </div>
  );
}

export default App;
