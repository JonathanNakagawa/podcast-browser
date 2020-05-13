import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';
import podcastFeedParser from 'podcast-feed-parser';

function PodcastHome() {

    let {title} = useParams();

    useEffect(() => {


    });

    return(
        <div>
            {title}
        </div>
    );
}

export default PodcastHome;