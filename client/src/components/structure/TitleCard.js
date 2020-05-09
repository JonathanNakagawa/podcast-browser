import React from 'react';

import './structure.css';

function TitleCard(props) {
    console.log("url(" + props.imageURL + ")")
    return(
        <div className="title-card" style={{backgroundImage: "url(" + props.imageURL + ")"}}>

        </div>
    );
}

export default TitleCard

