const express = require('express');

const app = express();

feedRouter = require('./routes/feed');

app.use('/feed', feedRouter);

app.listen(5000, () => {
    console.log('Service running on port 5000');
});