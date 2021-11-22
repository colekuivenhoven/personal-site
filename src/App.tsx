import './App.css';

// Libraries Import
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import downloadjs from 'downloadjs';

// Import Routes
import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";
import Moreinfo from "./routes/Moreinfo";

interface IPage {
  name: string;
}

interface IPosition {
  x: number;
  y: number;
}

function App() {
  const [currentPage, setCurrentPage] = useState<IPage>({name: window.location.pathname.substring(1) ? window.location.pathname.substring(1) : 'home'});
  const [navFollowerTarget, setNavFollowerTarget] = useState<HTMLElement>();
  const [screenSize, setScreenSize] = useState([window.innerWidth, window.innerHeight]);
  const [isMobile, setIsMobile] = useState(screenSize[0] < screenSize[1] ? true : false);

  let _v = {
    vw: screenSize[0] / 100,
    vh: screenSize[1] / 100,
    vmin: Math.min(screenSize[0] / 100, screenSize[1] / 100),
    vmax: Math.max(screenSize[0] / 100, screenSize[1] / 100)
  }

  useLayoutEffect(() => {
    function updateSize() {
      setScreenSize([window.innerWidth, window.innerHeight]);
      setIsMobile(window.innerWidth < window.innerHeight ? true : false);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  function handleClickNavLink(e: any, pageName: string):void {
    let target = e.currentTarget;
    setNavFollowerTarget(target);
    setCurrentPage({name: pageName});
  }

  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <div className="logo" 
            style={{
              width: isMobile ? "12vmin" : ""
            }}
          />
          <div className="nav-links">
            <Link 
              to="/"
              className={`nav-route-btn ${(currentPage.name == 'home') ? "active" : ""}`}
              style={{
                animationDelay: '0.0s',
                fontSize: isMobile ? "4vmin" : ""
              }}
              onClick={(e) => handleClickNavLink(e, 'home')}
              onAnimationEnd={(e) => currentPage.name == 'home' ? handleClickNavLink(e, 'home') : null}
            >
              Home
            </Link>
            <Link 
              to="/portfolio" 
              className={`nav-route-btn ${(currentPage.name == 'portfolio') ? "active" : ""}`}
              style={{
                animationDelay: '0.2s',
                fontSize: isMobile ? "4vmin" : ""
              }}
              onClick={(e) => handleClickNavLink(e, 'portfolio')}
              onAnimationEnd={(e) => currentPage.name == 'portfolio' ? handleClickNavLink(e, 'portfolio') : null}
            >
              Portfolio
            </Link>
            <div 
              className={`nav-route-btn ${(currentPage.name == 'contact') ? "active" : ""}`}
              style={{
                animationDelay: '0.4s',
                fontSize: isMobile ? "4vmin" : ""
              }}
              onClick={() => {
                let app = document.querySelector('.App') as HTMLElement;
                // Scroll to the bottom of the page
                window.scrollTo({
                  top: app.scrollHeight,
                  behavior: 'smooth'
                });
              }}
              // onClick={(e) => handleClickNavLink(e, 'contact')}
              // onAnimationEnd={(e) => currentPage.name == 'contact' ? handleClickNavLink(e, 'contact') : null}
            >
              Contact
            </div>
          </div>
        </div>
        <div className="nav-follower" 
          style={{
            left: navFollowerTarget ? navFollowerTarget.getBoundingClientRect().left - (0.5 * _v.vmin): "15px",
            top: navFollowerTarget ? navFollowerTarget.getBoundingClientRect().bottom - (1.5 * _v.vmin): "15px",
            width: navFollowerTarget ? navFollowerTarget.getBoundingClientRect().width + (1 * _v.vmin) : 0,
            display: navFollowerTarget ? "block" : "none",
          }}
        />
        
        <Switch>
          <Route path="/moreinfo/:id">
            <Moreinfo
              isMobile={isMobile} 
              screenSize={screenSize} 
              viewport_info={_v} 
            />
          </Route>
          <Route path="/portfolio">
            <Portfolio 
              isMobile={isMobile} 
              screenSize={screenSize} 
              viewport_info={_v} 
            />
          </Route>
          <Route path="/">
            <Home 
              isMobile={isMobile} 
              screenSize={screenSize} 
              viewport_info={_v} 
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
