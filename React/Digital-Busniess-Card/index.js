import React from "react"
import ReactDOM from "react-dom"

function Image() {
    return (   
        <img className="profile" src="./images/choki.png"></img>      
    )
}

function Main(){
    return (
        <main>
            <div className="info">
                <h1>Rafaat Choki</h1>
                <h4>Frontend Developer</h4>
                <p className="email">rafaatchoki2003@gmail.com</p>
            </div>
            
            <div className="buttons">
                <a href="mailto:rafaatchoki2003@gmail.com" className="button">
                    <img src="./images/email.png"></img>
                    Email
                </a>
                <a href="https://www.linkedin.com/in/rafaat-choki-a74348269/" className="button2">
                    <img className="linked-in-logo" src="./images/linkedin.png"></img>              
                    LinkedIn
                </a>
            </div>
            
            <div>
                <h2 className="about">About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            
            <div>
                <h2 className="interest">Interest</h2>
                <p className="bruh">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </main>
    )
}

function Footer(){
    return(
        <footer>
            <a href="https://www.facebook.com/rafaat.choki.50/">
                <img src="./images/Facebook-Icon.png"></img>
            </a>
            
            <a href="https://twitter.com/ChokiRafaat">
                <img src="./images/Twitter-Icon.png"></img>
            </a>
            
            <a href="https://www.instagram.com/chokimaniac/">
                <img src="./images/Instagram-Icon.png"></img>
            </a>
            
            <a href="https://github.com/RealChoki">
                <img src="./images/GitHub-Icon.png"></img>
            </a>
        </footer>
    )
    
}

function Content(){
    return (
        <div className="container">
            <Image />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Content />, document.getElementById("root"))