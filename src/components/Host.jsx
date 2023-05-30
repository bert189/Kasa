import React from "react"


function Host({firstName, lastName, picture}) {
    return (
        <div className="host">
            <div className="name">
                <p>{firstName}</p>
                <p>{lastName}</p>                
            </div>
            <img src={picture} alt="" />
        </div>
    )
}

export default Host