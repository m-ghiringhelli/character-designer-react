import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header style={{
      backgroundImage: `url('${process.env.PUBLIC_URL}/images/lab.jpg')`,
      backgroundPosition: `center`
    }}>
      <h1>Character Designer</h1>
    </header>
  );
}
