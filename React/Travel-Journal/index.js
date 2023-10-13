import React from "react"
import ReactDOM from "react-dom"
import Data from "./data.js" // Importing data from a separate file
import Main from "./Main.js" // Importing a component

// Mapping over the data to create an array of Main components
const info = Data.map(data =>{
    return (
        <Main
            key={data.id} // Adding a unique key prop to each Main component
            {...data} // Spreading the data object as props to the Main component
        />
    )
})

// A Nav component that renders a navigation bar
function Nav(){
    return (
        <nav>
            <img src="./images/logo.png"></img> 
            <p>my travel journal.</p>
        </nav>
    )
}

// A Feed component that renders the Nav component and the array of Main components
function Feed(){
    return (
        <>
            <Nav />
            {info}
        </>
    )
}

// Rendering the Feed component to the root element in the HTML file
ReactDOM.render(<Feed />, document.getElementById("root"))