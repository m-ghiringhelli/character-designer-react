import React from 'react';
import './Character.css';

export default function Character({ head, body, legs }) {
  return (
    <div className='character'>
      Character
      <img className='head' src={`./images/${head}-head.jpg`} />
      <img className='body' src={`./images/${body}-body.jpg`} />
      <img className='legs' src={`./images/${legs}-legs.jpg`} />
    </div>
  );
}
