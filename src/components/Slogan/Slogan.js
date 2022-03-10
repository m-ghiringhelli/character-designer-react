import React from 'react';

import './Slogan.css';

export default function Slogan({ slogan, setSlogan }) {
  return (
    <div className="slogan">
      <label>what&apos;s your character&apos;s slogan?
        <input name="slogan" type="text" 
          onChange={(e) => setSlogan(e.target.value)}>
        </input>
      </label>
      <div className='slogan-display'>
        {slogan}
      </div>
    </div>
  );
}
