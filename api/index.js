const express = require('express');
const routes = require('./routes/app');

app = express();
const port = 3000;

routes(app);

app.listen(port, () => {
    console.log(`SEVER ON PORT: ${port}`)
});

module.exports = app;