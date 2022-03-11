import React from 'react';

import './Slogan.css';

export default function Slogan({ slogan, setSlogan }) {
  return (
    <div className="slogan">
      <div className='slogan-display'>
        {slogan}
      </div>
      <label>
        <span>
          what&apos;s your character&apos;s slogan?
        </span>
        <input placeholder='slogan' className='input' name="slogan" type="text" 
          onChange={(e) => setSlogan(e.target.value)}>
        </input>
        <button>save slogan</button>
      </label>
    </div>
  );
}
