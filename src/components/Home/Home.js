import React, { useState } from 'react';

import './Home.css';

import Character from '../Character/Character';
import Selector from '../Selector/Selector';
import Slogan from '../Slogan/Slogan';

export default function Home() {
  const [head, setHead] = useState();
  
  return (
    <div className='home'>
      Home
      <div className='character-side'>
        <Character {...{ head }} />
      </div>
      <div className='select-side'>
        <Selector {...{ setHead }} />
        <Slogan />
      </div>
    </div>
  );
}
