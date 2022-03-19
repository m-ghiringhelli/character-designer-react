import React from 'react';

import './App.css';

import Header from './components/layout/Header/Header';
import Home from './views/Home/Home';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
