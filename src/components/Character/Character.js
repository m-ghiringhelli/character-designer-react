import React from 'react';
import './Character.css';

export default function Character({ head, body, legs }) {
  return (
    <div className='character'>
      Character
      <img id='head' src={`./images/${head}-head.jpg`} />
      <img id='body' src={`./images/${body}-body.jpg`} />
      <img id='legs' src={`./images/${legs}-legs.jpg`} />
    </div>
  );
}
