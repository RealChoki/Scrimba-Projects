import React from "react"

export default function Main({title, location, googleMapsUrl, startDate, endDate, description, imageUrl}){
    return (
        <div className="container">
            <img src={imageUrl} className="area"></img>
            <div>
                <img src="./images/map-logo.png"></img>
                <h3>{location}</h3>
                <a href={googleMapsUrl}></a>
            </div>
            <h1>{title}</h1>
            <div>
                <p><strong>{startDate} - {endDate}</strong></p>
                <p>{description}</p>
            </div>
        </div>
    )
}