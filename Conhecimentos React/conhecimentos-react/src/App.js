import React from 'react';
import './App.css';
import { useState } from 'react';

const Topic = ({ title, count }) => {
  const [votes, setVotes] = useState(count);

  const increaseCount = () => {
    setVotes(votes + 1);
    console.log(`increase count: ${votes}`);
  };

  return (
    <div>
      {title} ({votes}) <button onClick={increaseCount}>+1</button>
    </div>
  );
};

function App() {
  return (
    <>
      <h1>Vota Linguagem</h1>
      <Topic title="PHP" count={1} />
      <Topic title="C#" count={2} />
      <Topic title="JavaScript" count={10} />
    </>
  );
}

export default App;
