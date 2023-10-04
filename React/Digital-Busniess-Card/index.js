import React from "react"
import ReactDOM from "react-dom"

function Image() {
    return (   
        <img src="./images/choki.png"></img>      
    )
}

function Main(){
    return (
        <main>
            <div>
                <h1>Rafaat Choki</h1>
                <h4>Frontend Developer</h4>
                <p>rafaatchoki2003@gmail.com</p>
            </div>
            
            <div>
                <a>
                    <img src="./images/email.png"></img>
                    Email
                </a>
                <a>
                    <img className="linked-in-logo" src="./images/linkedin.png"></img>                  
                    LinkedIn
                </a>
            </div>
            
            <div>
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            </div>
            
            <div>
                <h2>Interest</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </main>
    )
}

function Footer(){
    return(
        <footer>
            <img src="./images/Facebook-Icon.png"></img>
            <img src="./images/Twitter-Icon.png"></img>
            <img src="./images/Instagram-Icon.png"></img>
            <img src="./images/GitHub-Icon.png"></img>
        </footer>
    )
}

function Content(){
    return (
        <>
            <Image />
            <Main />
            <Footer />
        </>
    )
}

ReactDOM.render(<Content />, document.getElementById("root"))