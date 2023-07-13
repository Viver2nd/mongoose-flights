const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights');

// Show all movies
router.get('/', flightsCtrl.index);

// Create a new movie
router.get('/new', flightsCtrl.new);

// GET /movies/:id (show functionality) MUST be below new route
router.get('/:id', flightsCtrl.show);

// Save the new movie
router.post('/', flightsCtrl.create);

module.exports = router;
