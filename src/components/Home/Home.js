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
    <div className='home' style={{
      backgroundImage: `url('${process.env.PUBLIC_URL}/images/cyberpunk.png')`,
      backgroundSize: `cover`,
      backgroundPosition: `center`
    }}>
      <div className='character-side'>
        <Character {...{ head, body, legs }} />
      </div>
      <div className='select-side'>
        <Slogan {...{ slogan, setSlogan }}/>
        <Selector {...{ setHead, setBody, setLegs }} />
      </div>
    </div>
  );
}
