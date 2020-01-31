require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConfig = require('./database/db');

const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/v1', routes);

mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    if (!err.statusCode) 
        err.statusCode = 500;

    res.status(err.statusCode).send(err.message);
});
    
const port = process.env.PORT || 4000;
app.listen(port, () => console.log('Connected to port ' + port));