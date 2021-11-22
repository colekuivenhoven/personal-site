import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Typist from 'react-typist';

/* Componenets */
import Footer from "../components/Footer";

/* Styles */
import "../assets/styles/Home.css"

function Home(props:any) {
    const isMobile = props.isMobile;
    const screenSize = props.screenSize;
    const _v = props.viewport_info;
    const [isTyping, setIsTyping] = useState(true);

    const topics = [
        "Web Development...", 
        "Drone Photography...", 
        "Neural Networks...", 
        "Mobile Development...", 
        "Fontend Engineering...", 
        "Audio & Video Production...",
        "SLAM applications...",  
        "Graphic Design...", 
        "Backend Engineering...", 
        "Lidar applications...", 
    ];

    function doneTyping() {
        setIsTyping(false);
        startTyping();
    }

    function startTyping() {
        setIsTyping(true);
    }

    return (
        <div className="container-home">
            <div className="home-content">
                <div className="home-background" />
                <div className="home-intro">
                    <div className="intro-text-image" />
                    <div className="intro-text-container">
                        <div className="intro-title">Cole Kuivenhoven</div>
                        <div className="intro-text"
                            style={{
                                fontSize: isMobile ? '3.25vmin' : '',
                            }}
                        >Fullstack engineer based in San Antonio, Texas.</div>
                        <div style={{
                            display: "flex", flexDirection: "row"
                        }}>
                            <a href="/portfolio" className="intro-btn" 
                                style={{
                                    marginRight: "1vmin",
                                    fontSize: isMobile ? '2.5vmin' : '',
                                    marginTop: isMobile ? '2vmin' : '',
                                }}
                            >VIEW MY WORK</a>
                        </div>
                    </div>
                    
                    <div className="home-anchor-down" />
                    <div className="wave primary" />
                    <div className="wave secondary" />
                </div>
                <div className="home-motto"
                    style={{
                        height: isMobile ? "40vh" : ""
                    }}
                >
                    <div className="motto-container">
                        <div className="motto-title"
                            style={{
                                fontSize: isMobile ? "6vmin" : ""
                            }}
                        >A bit about me...</div>
                        <div className="motto-text"
                            style={{
                                marginTop: "2vmin",
                                fontSize: isMobile ? "3vmin" : ""
                            }}
                        >
                            I'm a self-motivated fullstack engineer with hands-on project experience designing and 
                            building web applications from scratch. <a href="/portfolio" className="motto-btn" style={{textDecoration: "none"}}>See my work</a>
                        </div>
                        <div className="motto-text"
                            style={{
                                marginTop: "4vmin",
                                fontSize: isMobile ? "3vmin" : "2.5vmin"
                            }}
                        >
                            Here are some of the <span className="topic">topics</span> and <span className="topic">ideas</span> that I'm interested in...
                        </div>
                        {isTyping ? <Typist 
                            className={`motto-text topics ${isMobile ? "mobile" : ""}`}
                            avgTypingDelay={100}
                            onTypingDone={() => {
                                doneTyping();
                            }}
                        >
                            {topics.map((topic:string, idx:number) => {
                                return (
                                    <span key={idx}>{topic}
                                        <Typist.Backspace delay={1000} count={topic.length}/>
                                        <Typist.Delay ms={500} />
                                    </span>
                                )
                            })}
                        </Typist> : ''}
                    </div>
                </div>
                <Footer 
                    isMobile={isMobile} 
                    screenSize={screenSize} 
                    viewport_info={_v} 
                />
            </div>
        </div>
    )
}

export default Home;