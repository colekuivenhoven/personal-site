import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "../assets/styles/Home.css";

function Footer(props:any) {
    const isMobile = props.isMobile;
    const screenSize = props.screenSize;
    const _v = props.viewport_info;

    return (
        <>
            <div className="home-contact"
                style={{
                    height: isMobile ? "25vh" : ""
                }}
            >
                <div className="contact-container">
                    <div className="contact-title"
                        style={{
                            fontSize: isMobile ? "5vmin" : ""
                        }}
                    >Let's talk!</div>

                    <div className="contact-text"
                        style={{
                            fontSize: isMobile ? "3vmin" : ""
                        }}
                    >
                        I'm excited to start working with you, and am ready for new opportunities and challenges!
                        Call or email if you want to get in touch with me.
                    </div>
                    <div className="contact-btn-row">
                        <a className="contact-btn" href="mailto: kuivenhovenc@gmail.com">kuivenhovenc@gmail.com</a>
                        <a className="contact-btn" href="tel: 210-296-7259">(210) 296-7259</a>
                    </div>
                </div>
                <div className="home-anchor-up" />
            </div>
            <div className="home-footer"
                style={{
                    height: isMobile ? "16vmin" : ""
                }}
            >
                <div className="footer-btn-row">
                    <span className="footer-btn git" 
                        onClick={() => window.open("https://github.com/colekuivenhoven", "_blank")}
                        style={{
                            width: isMobile ? "6vmin" : ""
                        }}
                    />
                    <span className="footer-btn linkedin" 
                        onClick={() => window.open("https://www.linkedin.com/in/cole-kuivenhoven-4ba996129/", "_blank")}
                        style={{
                            width: isMobile ? "6vmin" : ""
                        }}
                    />
                    <span className="footer-btn email" 
                        onClick={() => window.open("mailto: kuivenhovenc@gmail.com", "_blank")}
                        style={{
                            width: isMobile ? "6vmin" : ""
                        }}
                    />
                </div>
                <div className="footer-text"
                    style={{
                        fontSize: isMobile ? "2vmin" : ""
                    }}
                >
                    {new Date().getFullYear()} &copy; Cole Kuivenhoven
                </div>
                
            </div>
            
        </>
    )
}

export default Footer;