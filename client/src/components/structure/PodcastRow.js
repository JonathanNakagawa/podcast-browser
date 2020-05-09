import React from 'react';

import TitleCard from './TitleCard';

import './structure.css';

function PodcastRow() {
    return(
        <div className="podcast-row">
            <div className="podcast-row__title">Temporary</div>
            <ul className="podcast-row__items">
                <TitleCard imageURL="https://images.squarespace-cdn.com/content/52d66949e4b0a8cec3bcdd46/1391195775824-JVU9K0BX50LWOKG99BL5/Hello+Internet.003.png?content-type=image%2Fpng"/>
                <TitleCard imageURL="https://images.squarespace-cdn.com/content/52d66949e4b0a8cec3bcdd46/1391195775824-JVU9K0BX50LWOKG99BL5/Hello+Internet.003.png?content-type=image%2Fpng"/>
                <TitleCard imageURL="https://images.squarespace-cdn.com/content/52d66949e4b0a8cec3bcdd46/1391195775824-JVU9K0BX50LWOKG99BL5/Hello+Internet.003.png?content-type=image%2Fpng"/>
                <TitleCard imageURL="https://images.squarespace-cdn.com/content/52d66949e4b0a8cec3bcdd46/1391195775824-JVU9K0BX50LWOKG99BL5/Hello+Internet.003.png?content-type=image%2Fpng"/>
                <TitleCard imageURL="https://images.squarespace-cdn.com/content/52d66949e4b0a8cec3bcdd46/1391195775824-JVU9K0BX50LWOKG99BL5/Hello+Internet.003.png?content-type=image%2Fpng"/>
                <TitleCard imageURL="https://images.squarespace-cdn.com/content/52d66949e4b0a8cec3bcdd46/1391195775824-JVU9K0BX50LWOKG99BL5/Hello+Internet.003.png?content-type=image%2Fpng"/>
                <TitleCard imageURL="https://images.squarespace-cdn.com/content/52d66949e4b0a8cec3bcdd46/1391195775824-JVU9K0BX50LWOKG99BL5/Hello+Internet.003.png?content-type=image%2Fpng"/>
            </ul>
        </div>
    );
}

export default PodcastRow;