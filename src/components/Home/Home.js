import React, { useState } from 'react';

import './Home.css';

import Character from '../Character/Character';
import Selector from '../Selector/Selector';
import Slogan from '../Slogan/Slogan';

export default function Home() {
  const [head, setHead] = useState('question-mark');
  const [body, setBody] = useState('question-mark');
  const [legs, setLegs] = useState('question-mark');
  const [slogan, setSlogan] = useState();
  
  return (
    <div className='home'>
      Home
      <div className='character-side'>
        <Character {...{ head, body, legs }} />
      </div>
      <div className='select-side'>
        <Selector {...{ setHead, setBody, setLegs }} />
        <Slogan {...{ slogan, setSlogan }}/>
      </div>
    </div>
  );
}
