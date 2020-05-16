const router = require('express').Router();
const feedFetcher = require('./feed-fetcher');

router.route('/:url').get((req, res) => {
    function respond(feed) {
        res.json(feed);
    }

    feedFetcher(req.params.url, respond);
});

module.exports = router;