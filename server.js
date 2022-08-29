const express = require('express');
const app = express();

//html renders
app.set("view engine", "ejs");

//routes
app.use('/', require('./routes/home'));

app.listen(4111, () => console.log('Example app listening on port 4111!'));
