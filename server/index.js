const express = require('express');

const app = express();

app.listen(5000, () => {
    console.log('Service running on port 5000');
});