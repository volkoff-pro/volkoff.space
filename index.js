const express = require('express');
const server = require('./config/server');

const app = express();

require('./routes/routes')(app);

app.listen(server.PORT);
