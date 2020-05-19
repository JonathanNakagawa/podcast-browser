import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PodcastHeader from './PodcastHeader';


const axios = require('axios');

function PodcastHome() {

    let {feedURL} = useParams();
    let [rssFeed, setRssFeed] = useState();

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/feed/' + feedURL)
            .then((res) => {
                setRssFeed(res.data);
            });

    }, []);

    return(
        <div>
            <PodcastHeader
                title={rssFeed ? rssFeed['channel'][0]['title'][0] : ''}
                author={rssFeed ? rssFeed['channel'][0]['itunes:author'][0] : ''}
                subtitle={rssFeed ? rssFeed['channel'][0]['itunes:subtitle'][0] : ''}
                thumbnailURL={rssFeed ? rssFeed['channel'][0]['itunes:image'][0]['$']['href'] : ''}
            />
            
        </div>
    );
}

export default PodcastHome;