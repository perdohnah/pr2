import {useState} from 'react';

export const Counter = () => {
  const [state, setState] = useState(0);

  return (
      <div>
        <div>{state}</div>
        <button onClick={() => setState(prevState => prevState + 1)}>Increase</button>
      </div>
  );
};