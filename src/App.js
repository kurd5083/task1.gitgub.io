import './App.css';
import ShopItemFunc from './components/ShopItemFunc';
import React from 'react';
function App(props) {
  return (
    <div className="container">
    <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
      <ShopItemFunc item={props.item} />
    </div>
  </div>
  );
}

export default App;
 