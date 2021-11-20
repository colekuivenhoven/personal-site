import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import Footer from "../components/Footer";
import "../assets/styles/Portfolio.css"

/* HF Images */
import hf_1 from "../assets/images/HFTC_1.png";
import hf_2 from "../assets/images/HFTC_2.png";
import hf_3 from "../assets/images/HFTC_3.png";

/* AirSplitter Images */
import as_1 from "../assets/images/AirSplitter_1.png";
import as_2 from "../assets/images/AirSplitter_2.png";

/* Cyltex Images */
import cy_1 from "../assets/images/Cyltex_1.png";
import cy_2 from "../assets/images/Cyltex_2.png";

/* Weather Images */
import wa_1 from "../assets/images/WeatherApp_1.png";
import wa_2 from "../assets/images/WeatherApp_2.png";

/* Portfolio Images */
import pp_1 from "../assets/images/Portfolio_1.png";

type TLink = {
    name: string;
    link: string;
}

type TPortfolioInfo = {
    title: string, 
    overview: string, 
    development: TFeature[],
    image: string[],
    image_border: string,
}

type TFeature = {
    name: string;
    desc: string;
}

function Portfolio(props:any) {
    const isMobile = props.isMobile;
    const screenSize = props.screenSize;
    const _v = props.viewport_info;
    const [modalActive, setModalActive] = useState(false);
    const [portfolioInfo, setPortfolioInfo] = useState<TPortfolioInfo>({
        title: "",
        overview: "",
        development: [],
        image: [],
        image_border: ""
    })
    const [imageNum, setImageNum] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const moreInfoList:TPortfolioInfo[] = [
        {
            title: "Homer Ford Tennis Center",
            overview: `The Homer Forder Tennis Center(HFTC) web application is the active web presenece, reservation mangement,
                       and user management system for the Homer Ford Tennis Center. The application is built with React, and
                       features reservations systems for both the customers and employees. This application was made to replace
                       their existing paper-based systems.
                      `,
            development: [
                {
                    name: "Dual-sided Reservation System",
                    desc: `Separate reservation systems made to account for the simplicity a customer needs, and the complexity an employee needs.`,
                },
                {
                    name: "User Management System",
                    desc: `
                        Detailed user management allows employees to perform full CRUD operations on the user database without having to leave the
                        web application. 
                        `,
                },
                {
                    name: "Dynamic Database Reports",
                    desc: `
                        The employee facing side of the application features a dynamic database report system that allows employees to view SQL 
                        query-based reports on various tables in the database.
                    `,
                },
                {
                    name: "Notification System",
                    desc: `
                        The customer facing side of the application features a notification system that allows customers to enable and recieve
                        notifications from the system regarding their reservations.
                    `,
                },
            ],
            image: [hf_1, hf_2, hf_3],
            image_border: "0.0vmin solid rgba(250,250,250,1)"
        },
        {
            title: "Air Splitter",
            overview: `Air Splitter is a web application that allows users to upload songs to the application(which will be stored in the server),
                       then isolate the song into either 2 stems(vocal, instrumental) or 4 stems(vocal, instrumental, bass, drums).
                      `,
            development: [
                {
                    name: "Deep Learning Vocal Isolation",
                    desc: `Separate reservation systems made to account for the simplicity a customer needs, and the complexity an employee needs.`,
                },
                {
                    name: "ExpressJS Python Integration",
                    desc: `
                        Detailed user management allows employees to perform full CRUD operations on the user database without having to leave the
                        web application. 
                        `,
                },
                {
                    name: "Dynamic Isolation Options",
                    desc: `
                        The employee facing side of the application features a dynamic database report system that allows employees to view SQL 
                        query-based reports on various tables in the database.
                    `,
                },
            ],
            image: [as_1, as_2],
            image_border: "0.0vmin solid #282C34"
        },
        {
            title: "Cyltex LLC",
            overview: `The Homer Forder Tennis Center(HFTC) web application is the active web presenece, reservation mangement,
                       and user management system for the Homer Ford Tennis Center. The application is built with React, and
                       features reservations systems for both the customers and employees. This application was made to replace
                       their existing paper-based systems.
                      `,
            development: [
                {
                    name: "Dual-sided Project Management System",
                    desc: `Separate reservation systems made to account for the simplicity a customer needs, and the complexity an employee needs.`,
                },
                {
                    name: "User Management System",
                    desc: `
                        Detailed user management allows employees to perform full CRUD operations on the user database without having to leave the
                        web application. 
                        `,
                },
                {
                    name: "Timesheet Management System",
                    desc: `
                        The employee facing side of the application features a dynamic database report system that allows employees to view SQL 
                        query-based reports on various tables in the database.
                    `,
                },
                {
                    name: "Multi-device support",
                    desc: `
                        The customer facing side of the application features a notification system that allows customers to enable and recieve
                        notifications from the system regarding their reservations.
                    `,
                },
            ],
            image: [cy_1, cy_2],
            image_border: "0.0vmin solid rgba(250,250,250,1)"
        },
        {
            title: "Weather App",
            overview: `The Homer Forder Tennis Center(HFTC) web application is the active web presenece, reservation mangement,
                       and user management system for the Homer Ford Tennis Center. The application is built with React, and
                       features reservations systems for both the customers and employees. This application was made to replace
                       their existing paper-based systems.
                      `,
            development: [
                {
                    name: "OpenWeather API Integration",
                    desc: `Separate reservation systems made to account for the simplicity a customer needs, and the complexity an employee needs.`,
                },
                {
                    name: "Multi-device support",
                    desc: `
                        Detailed user management allows employees to perform full CRUD operations on the user database without having to leave the
                        web application. 
                        `,
                },
                {
                    name: "Darkmode Toggle",
                    desc: `
                        The employee facing side of the application features a dynamic database report system that allows employees to view SQL 
                        query-based reports on various tables in the database.
                    `,
                },
            ],
            image: [wa_1, wa_2],
            image_border: "0.0vmin solid #282C34"
        },
        {
            title: "Personal Portfolio",
            overview: `The Homer Forder Tennis Center(HFTC) web application is the active web presenece, reservation mangement,
                       and user management system for the Homer Ford Tennis Center. The application is built with React, and
                       features reservations systems for both the customers and employees. This application was made to replace
                       their existing paper-based systems.
                      `,
            development: [
                {
                    name: "Live with AWS Amplify & Route 53",
                    desc: `Separate reservation systems made to account for the simplicity a customer needs, and the complexity an employee needs.`,
                },
                {
                    name: "Custom Image Carousel",
                    desc: `
                        Detailed user management allows employees to perform full CRUD operations on the user database without having to leave the
                        web application. 
                        `,
                },
                {
                    name: "Real-time Typing Animation",
                    desc: `
                        The employee facing side of the application features a dynamic database report system that allows employees to view SQL 
                        query-based reports on various tables in the database.
                    `,
                },
                {
                    name: "Multi-device support",
                    desc: `
                        The customer facing side of the application features a notification system that allows customers to enable and recieve
                        notifications from the system regarding their reservations.
                    `,
                },
            ],
            image: [pp_1],
            image_border: "0.0vmin solid rgba(250,250,250,1)"
        },
    ]

    function renderInformationItem(title: string, tags: string[], description: string, links: TLink[], alt: boolean, id: string, num: number) {
        return (
            <div className="portfolio-info-item"
                style={{
                    backgroundColor: alt ? "rgba(0,0,0,0.025)" : "",
                    paddingRight: alt ? "2vmin" : "",
                }}
            >
                {!alt && <div className={`portfolio-info-img ${id}`} 
                    // onClick={() => window.open(links[0].link, "_blank")}
                    onClick={(e) => {
                        e.preventDefault();
                        setPortfolioInfo(moreInfoList[num]);
                        toggleModal();
                        resetCarousel();
                    }} 
                />}
                <div className="portfolio-info-content">
                    <span className="portfolio-info-title">{title}</span>
                    <div className="portfolio-info-tag-container">
                        {tags.map((tag, index) => {
                            return (
                                <span className="portfolio-info-tag" key={index}>{tag}</span>
                            )
                        })}
                    </div>
                    <div className="portfolio-info-description">
                        {description}
                    </div>
                    <div className="portfolio-info-link-container">
                        {links.map((link, index) => {
                            return (
                                <a 
                                    href={`${link.link}`} 
                                    className={`portfolio-info-link ${link.name == "More Info" ? "more" : ""}`}
                                    target="_blank" 
                                    key={index}
                                    onClick={(e) => {
                                        if(link.name == "More Info") {
                                            e.preventDefault();
                                            setPortfolioInfo(moreInfoList[num]);
                                            toggleModal();
                                            resetCarousel();
                                        }
                                    }} 
                                >
                                    {link.name}
                                </a>
                            )
                        })}
                    </div>
                </div>
                {alt && <div className={`portfolio-info-img ${id}`} 
                    // onClick={() => window.open(links[0].link, "_blank")}
                    onClick={(e) => {
                        e.preventDefault();
                        setPortfolioInfo(moreInfoList[num]);
                        toggleModal();
                        resetCarousel();
                    }} 
                />}
            </div>
        )
    }

    function toggleModal() {
        setModalActive(!modalActive);
    }

    function moveCarousel(target:EventTarget & HTMLDivElement, index:number) {
        let self = target as HTMLDivElement;
        let parent = self.parentNode as HTMLDivElement;

        parent.style.transform = `translateX(-${((self.getBoundingClientRect().width + _v.vmin * 2) * index)}px)`;
    }

    function resetCarousel() {
        let carousel = document.querySelector(".section-image-container") as HTMLDivElement;
        carousel.style.transform = `translateX(0px)`;
    }

    function renderModalContent(title: string, overview: string, development: TFeature[], image: string[], image_border: string) {
        return (
            <>
                <div className="modal-title">{title}</div>
                <div className="modal-body">
                    <div className="section-image-container"
                        style={{
                            border: `${image_border}`
                        }}
                        onTouchStart={(e) => handleTouchStart(e)}
                        onTouchMove={(e) => handleTouchMove(e)}
                        onTouchEnd={() => handleTouchEnd(image.length)}
                    >
                        {image.map((img, index) => {
                            return (
                                <div 
                                    className={`section-image ${imageNum == index ? "active" : ""}`} key={index}
                                    id={`mult-img-${index}`}
                                    style={{
                                        backgroundImage: `url(${img})`
                                    }}
                                    onClick={(e) => {
                                        if(imageNum != index) {
                                            setImageNum(index);
                                            moveCarousel(e.currentTarget, index);
                                        }
                                    }}
                                />
                            )
                        })}
                    </div>
                    <div className="modal-section">
                        <div className="section-head">Overview</div>
                        <div className="section-text">{overview}</div>
                    </div>
                    <div className="modal-section">
                        <div className="section-head">Development</div>
                        <div className="modal-section sub">
                            {development.map((feature, index) => {
                                return (
                                    <div className="subsection-item" key={index}>
                                        <div className="subsection-name">{feature.name}</div>
                                        <div className="subsection-text">{feature.desc}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </>
        );
    }

    /* Carousel Touch Handling */
    /* Credit: https://stackoverflow.com/a/64432393/17127255 */
    function handleTouchStart(e:React.TouchEvent<HTMLDivElement>) {
        setTouchStart(e.targetTouches[0].clientX);
    }
    
    function handleTouchMove(e:React.TouchEvent<HTMLDivElement>) {
        setTouchEnd(e.targetTouches[0].clientX);
    }
    
    function handleTouchEnd(length:number) {
        if (touchStart - touchEnd > 50) {
            if(imageNum < length - 1) {
                let etarget = document.querySelector(`#mult-img-${imageNum + 1}`) as HTMLDivElement;

                setImageNum(imageNum + 1);
                moveCarousel(etarget, imageNum + 1);
            }
        }
    
        if (touchStart - touchEnd < -50) {
            if(imageNum > 0) {
                let etarget = document.querySelector(`#mult-img-${imageNum - 1}`) as HTMLDivElement;

                setImageNum(imageNum - 1);
                moveCarousel(etarget, imageNum - 1);
            }
        }
    }

    return (
        <div className="container-portfolio">
            <div className="portfolio-content">

                {renderInformationItem(
                    "Homer Ford Tennis Center", 
                    ["React", "SocketIO", "Express", "MySQL", "AWS", "NodeMailer", "Javascript", "CSS3", "HTML5"],
                    "A dynamic web app for users to isolate uploaded music into individual vocal and instrumental channels.",
                    [
                        {
                            name: "Live Site", 
                            link: "#"
                        },
                        {
                            name: "GitHub", 
                            link: "https://github.com/colekuivenhoven/HFTennisCenter"
                        },
                        {
                            name: "More Info", 
                            link: "#"
                        }
                    ],
                    false,
                    "hf",
                    0
                )}

                {renderInformationItem(
                    "Air Splitter", 
                    ["React", "Tensorflow", "Express", "Typescript", "Python", "FFMPEG", "CSS3", "HTML5"],
                    "A dynamic web app for users to isolate uploaded music into 2-4 individual channels.",
                    [
                        {
                            name: "Live Site", 
                            link: "#"
                        },
                        {
                            name: "GitHub", 
                            link: "https://github.com/colekuivenhoven/AirSplitter-Client"
                        },
                        {
                            name: "More Info", 
                            link: "#"
                        }
                    ],
                    true,
                    "as",
                    1
                )}

                {renderInformationItem(
                    "Cyltex LLC - Project & User Management", 
                    ["Django", "MSSQL", "Python", "Javascript", "AJAX", "HTML5", "Bootstrap"],
                    "A dynamic web app for users to isolate uploaded music into 2-4 individual channels.",
                    [
                        {
                            name: "GitHub", 
                            link: "https://github.com/colekuivenhoven/django-project-management"
                        },
                        {
                            name: "More Info", 
                            link: "#"
                        }
                    ],
                    false,
                    "cy",
                    2
                )}

                {renderInformationItem(
                    "Weather App", 
                    ["React", "Typescript", "Express", "CSS3", "HTML5"],
                    "A dynamic web app for users to isolate uploaded music into 2-4 individual channels.",
                    [
                        {
                            name: "Live Site", 
                            link: "#"
                        },
                        {
                            name: "GitHub", 
                            link: "https://github.com/colekuivenhoven/Weather-Frontend"
                        },
                        {
                            name: "More Info", 
                            link: "#"
                        }
                    ],
                    true,
                    "wa",
                    3
                )}

                {renderInformationItem(
                    "Personal Portfolio", 
                    ["React", "Typescript", "AWS Amplify", "AWS Route 53", "CSS3", "HTML5"],
                    "A dynamic web app for users to isolate uploaded music into 2-4 individual channels.",
                    [
                        {
                            name: "Live Site", 
                            link: "#"
                        },
                        {
                            name: "GitHub", 
                            link: "https://github.com/colekuivenhoven/personal-site"
                        },
                        {
                            name: "More Info", 
                            link: "#"
                        }
                    ],
                    false,
                    "pp",
                    4
                )}
                
            </div>
            <Footer 
                isMobile={isMobile} 
                screenSize={screenSize} 
                viewport_info={_v} 
            />
            <div className={`portfolio-modal ${modalActive ? "active" : ""}`}>
                <div className={`portfolio-modal-content ${modalActive ? "active" : ""}`}>
                    {renderModalContent(
                        portfolioInfo.title,
                        portfolioInfo.overview,
                        portfolioInfo.development,
                        portfolioInfo.image,
                        portfolioInfo.image_border
                    )}
                </div>
                <div className={`portfolio-modal-close ${modalActive ? "active" : ""}`} 
                    onClick={() => {
                        toggleModal();
                        setImageNum(0);
                    }} 
                />
            </div>
        </div>
    )
}

export default Portfolio;