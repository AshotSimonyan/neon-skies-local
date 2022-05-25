import React, { useEffect, useState, useRef } from "react";
import "./Mintpage.scss";
import { Link as RouterLink } from 'react-router-dom';
import ConnectButton from "./ConnectButton";
const Mintpage = () => {

  return (
    <div className='mint-page'>
      <header className='header'>
        <div className="container">
          <RouterLink to="/" className="logo"><img src="images/logo.png" alt="skypunk legacy"/></RouterLink>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="content">
            <h1>MINT NOW</h1>
            <p className='pink-text'>SKYPUNK LEGACY NFT COLLECTION</p>
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis mauris vel iaculis convallis. Proin sed magna orci. </p>
            <ConnectButton/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Mintpage;





