const axios = require('axios');

const parseString = require('xml2js').parseString;


async function fetchFeed(feedUrl, callback) {
    axios.get(feedUrl)
        .then((res) => {
            parseString(res.data, (err, result) => {
                if(err) {
                    console.log('Error retrieving RSS feed.');
                }
                else {
                    callback(result.rss);
                }
            });
        })
}

module.exports = fetchFeed;

