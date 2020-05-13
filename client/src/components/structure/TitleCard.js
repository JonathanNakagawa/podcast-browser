import React from 'react';

import './structure.css';

function TitleCard(props) {
    return(
        <div className="title-card">
            <div className="title-card__image" style={{backgroundImage: "url(" + props.imageURL + ")"}}/>
            <div className="title-card__description">
                <div className="title-card__description__title">{props.title}</div>
                <div className="title-card__description__author">{props.author}</div>
            </div>
        </div>
    );
}

export default TitleCard

