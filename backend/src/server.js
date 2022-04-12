const express = require('express');

const app = express();

app.get('/hello', (req, res) => res.send('Hello world'));

app.listen(process.env.PORT || 3000, () => console.log('starting server'));
