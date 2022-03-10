import React from 'react';
import './Character.css';

export default function Character() {
  return (
    <div className='character'>
      Character
      <img className='head' src="./images/bird-head.jpg" />
      <img className='body' src="./images/jacket-body.jpg" />
      <img className='legs' src="./images/shorts-legs.jpg" />
    </div>
  );
}
