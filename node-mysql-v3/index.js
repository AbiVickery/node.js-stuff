const express = require('express');
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
const router = require('./app/routes/router');

const port = 3000;
app.listen(port, function () {
    console.log(`Server on port: ${port}`);
});

app.use(cors());
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

// ALL ROUTES
app.get('/', (req, res) => {
    res.json({
        'All cars': 'http://localhost:3000/api/cars'
    });
});

app.post('/post', (req, res) => {
    console.log(req.body);

    res.json(req.body);
});

app.use('/api', router);