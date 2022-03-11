import React from 'react';

import './Selector.css';

export default function Selector({ setHead, setBody, setLegs }) {
  return (
    <div className='selector'>
      <div className='custom-select'>
        <select name="head"
          onChange={(e) => {
            setHead(e.target.value);
          }}
        >
          <option selected disabled>- pick a head -</option>
          <option value="bird">Bird</option>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="person">Person</option>
        </select>
      </div>
      <div className='custom-select'>
        <select name="body"
          onChange={(e) => {
            setBody(e.target.value);
          }}
        >
          <option selected disabled>- pick a top -</option>
          <option value="jacket">Jacket</option>
          <option value="suit">Suit</option>
          <option value="shirt">Shirt</option>
          <option value="vest">Vest</option>
        </select>
      </div>
      <div className='custom-select'>
        <select name="legs"
          onChange={(e) => {
            setLegs(e.target.value);
          }}
        >
          <option selected disabled>- pick some pants -</option>
          <option value="pants">Pants</option>
          <option value="shorts">Shorts</option>
          <option value="trunks">Trunks</option>
          <option value="jeans">Jeans</option>
        </select>
      </div>
    </div>
  );
}
