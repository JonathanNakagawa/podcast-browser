import React from 'react';

import './structure.css';

import Thumbnail from './Thumbnail';

function TitleCard(props) {
    return(
        <div className="title-card">
            <Thumbnail imageURL = {props.imageURL}/>
            <div className="title-card__description">
                <div className="title-card__description__title">{props.title}</div>
                <div className="title-card__description__author">{props.author}</div>
            </div>
        </div>
    );
}

export default TitleCard

