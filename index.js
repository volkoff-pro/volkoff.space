const express = require('express');
const path = require('path');
const server = require('./config/server');

const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

// require('./routes/routes')(app);

app.listen(server.PORT);
