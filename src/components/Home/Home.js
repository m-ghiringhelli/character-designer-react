import React from 'react';

import './Home.css';

import Character from '../Character/Character';
import Selector from '../Selector/Selector';

export default function Home() {
  return (
    <div className='home'>
      Home
      <Character />
      <Selector />
    </div>
  );
}
