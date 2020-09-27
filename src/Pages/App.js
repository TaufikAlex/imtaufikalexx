import React from 'react';
import './App.css';
import bg from '../assets/bg.jpg'
import barcode from '../assets/state-web.svg'
import { ReactComponent as IG } from '../assets/ilustration/instagram.svg';
import { ReactComponent as Github } from '../assets/ilustration/github.svg';
import { ReactComponent as Linkedin } from '../assets/ilustration/linkedin.svg';
import { ReactComponent as Heroku } from '../assets/ilustration/heroku.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" src={bg} className="bg" />
        <div className="content">
          <div className="navbar">
            Icon
          </div>
          <div className="content-text" >
            <h2 className="h2">TAUFIK ALEX N.BATUBARA</h2>
            <h1 className="h1">FULLSTACK DEVELOPERS</h1>
            <h3 className="h3">
              I created a beautiful design for your application.</h3>
          </div>
          <div>
            <img className="image" alt="images" src={barcode} />
          </div>
          <footer className="footer">
            <div className="footer-content">
              <a title="instagram" href="https://www.instagram.com/taufik_alex/" target="_blank" rel="noopener noreferrer">
                <IG className="svg-icon" />
              </a>
              <a title="github" href="https://github.com/TaufikAlex/" target="_blank" rel="noopener noreferrer">
                <Github className="svg-icon" />
              </a>
              <a title="Linkedin" href="https://www.linkedin.com/in/taufikalex/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="svg-icon" />
              </a>
              <a title="Heroku" href="http://pms-taufikalex.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                <Heroku className="svg-icon" />
              </a>
            </div>
          </footer>
        </div>
      </header>
    </div >
  );
}

export default App;
