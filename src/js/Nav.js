import React from "react";
// import nicramLogoPrimary from "../img/nicramLogoPrimary.png";

const Nav = () => {

// Menu panel
    return (
        <div className="overlay"
        style={{
            width:"100%",
            padding: "2rem 0",
            position:"fixed",
            right:"0",
            backgroundColor: "rgb(var(--color-white))",
            zIndex: "1",
        }}>
            <nav>
                <ul 
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: "1.5rem",
                    padding: "0 4rem",
                    
                }}>
                    <li className="nav nav_1" id="nav_1">
                        <a className="btn btnMenu0" href="#home">Home</a>
                    </li>
                    <li className="nav nav_2" id="nav_2">
                        <a className="btn btnMenu0" href="#about">About</a>
                    </li>
                    <li className="nav nav_3" id="nav_3">
                        <a className="btn btnMenu0" href="#projects">Projects</a>
                    </li>
                    <li className="nav nav_4" id="nav_4">
                        <a className="btn btnMenu" href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


export default Nav