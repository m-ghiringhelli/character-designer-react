import React from 'react';
import './Character.css';

export default function Character({ head }) {
  return (
    <div className='character'>
      Character
      <img className='head' src={`./images/${head}-head.jpg`} />
      <img className='body' src="./images/jacket-body.jpg" />
      <img className='legs' src="./images/shorts-legs.jpg" />
    </div>
  );
}
