import React from 'react';

import './Home.css';

import Character from '../Character/Character';
import Selector from '../Selector/Selector';
import Slogan from '../Slogan/Slogan';

export default function Home() {
  return (
    <div className='home'>
      Home
      <div className='character-side'>
        <Character />
      </div>
      <div className='select-side'>
        <Selector />
        <Slogan />
      </div>
    </div>
  );
}
