import React from 'react';
import logo from '../logo.svg';
import './App.css';
import { MainNav } from '../nav/MainNav';

const appContainerStyle:React.CSSProperties = {
  "position": "fixed",
  "top": "0px",
  "left": "0px",
  "width": "100vw",
  "height": "100vh",
  "zIndex": -2
}

const contentContainerStyle:React.CSSProperties = {
  "margin": "0 auto",
  "width": "80%",
  "backgroundColor": "white",
  "borderBottomLeftRadius": "15px",
  "borderBottomRightRadius": "15px",
  "paddingBottom": "15px"
}

export const App = () => {

  return <React.Fragment>
    <img src="images/Clouds.jpg" style={appContainerStyle} />
    <div style={contentContainerStyle}>
      <MainNav />
    </div>
  </React.Fragment>
}

//<img style="position: fixed; top:0; width: 100%; height: 100%; overflow: hidden; min-width: 1200px; width: 100%; border: 0;" src="Images/Clouds.jpg" />