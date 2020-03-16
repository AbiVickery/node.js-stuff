const daoClass = require('./carDao',);
const dao = new daoClass();

const express = require('express');
const router = express.Router();

// ALL CARS ROUTE
router.get('/', (req, res) => {
    dao.findAll(req, res);
});

// FIND BY ID ROUTE
router.get('/:id', (req, res) => {
    dao.findById(req, res, req.params.id);
});

// FIND BY MAKE ROUTE
router.get('/make/:make', (req, res) => {
    dao.findByMake(req, res, req.params.make);
});
// /api/cars/post
router.post('/post', (req, res) => {
    console.log(req.body);
    // res.json(req.body);
    dao.updateById(req, res);
});

module.exports = router;