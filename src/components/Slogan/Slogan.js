import React from 'react';

import './Slogan.css';

export default function Slogan({ slogan, slogans, setSlogan, setSlogans }) {
  const saveSlogan = () => {
    setSlogans((prevState) => [...prevState, slogan]);
    setSlogan('');
  };
  return (
    <div className="slogan">
      <div>
        {slogans.map((words) => (
          <div className='slogan-display' key={words}>
            {words}
          </div>
        ))}
      </div>
      <label>
        <span>
          what&apos;s your character&apos;s slogan?
        </span>
        <input placeholder='slogan' className='input' type="text" value={slogan} onChange={(e) => setSlogan(e.target.value)} />
        <button onClick={saveSlogan}>save slogan</button>
      </label>
    </div>
  );
}
