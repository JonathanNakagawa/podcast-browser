import React from 'react';

import './structure.css'

function Thumbnail(props) {
    return(
        <div className="title-card__image" 
            style={{
                backgroundImage: "url(" + props.imageURL + ")",
                height: props.height ? props.height : '',
                width: props.width ? props.width : '',
            }}
        />
    );
}

export default Thumbnail