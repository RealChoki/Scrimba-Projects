import React from "react"

// Defining a functional component called Main that takes in props as an object
export default function Main({title, location, googleMapsUrl, startDate, endDate, description, imageUrl}){
    return (
        <div className="container">
            <img src={imageUrl} className="area"></img>
            <div>
                <div className="location">
                    <img src="./images/map-logo.png"></img>
                    <h3>{location}</h3>
                    <a href={googleMapsUrl}> View on Google Maps</a>
                </div>
                <h1 className="title">{title}</h1>
                <p className="date">{startDate} - {endDate}</p>
                <p className="desc">{description}</p>
            </div>
        </div>
    )
}