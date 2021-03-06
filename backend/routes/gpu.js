const router = require('express').Router();
let Gpu = require('../models/gpu.model');

router.route('/').get((req, res) => {
    Gpu.find()
    .then(item => res.json(item))
    .catch(err => res.status(400).json('Error: ' + err)) 
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const img = req.body.img;
    const stock = req.body.stock;

    const gpu = new Gpu({
        title,
        img,
        stock});
    
    gpu.save()
    .then(() => res.status(201).json(gpu))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;