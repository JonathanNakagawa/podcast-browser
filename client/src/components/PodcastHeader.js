import React from 'react';

import Thumbnail from './structure/Thumbnail';
import './pages.css';

const TUMBNAIL_HEIGHT = "15rem";
const TUMBNAIL_WIDTH = "15rem";

function PodcastHeader(props) {
    return(
        <div className="podcast-header__container">
            <div className="podcast-header__content">
                <Thumbnail 
                    imageURL={props.thumbnailURL}
                    height={TUMBNAIL_HEIGHT}
                    width={TUMBNAIL_WIDTH}
                />
                <div className="podcast-header__meta">
                    <div className="podcast-header__title"> {props.title} </div>
                    <div className="podcast-header__author"> {props.author} </div>
                    <div className="podcast-header__subtitle"> {props.subtitle} </div>
                    {/* <div className="podcast-header__description"> {props.description} </div> */}
                </div>
            </div>
        </div>
    );
}

export default PodcastHeader;