import React from "react"
import ReactDOM from "react-dom"
import Data from "./data.js"
import Main from "./Main.js"

const info = Data.map(data =>{
    return (
        <Main
            key={data.id}
            {...data}
        />
    )
})

function Nav(){
    return (
        <nav>
            <img src="./images/logo.png"></img>
            <p>my travel journal.</p>
        </nav>
    )
}

function Feed(){
    return (
        <>
            <Nav />
            {info}
        </>
    )
}

ReactDOM.render(<Feed />, document.getElementById("root"))