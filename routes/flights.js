const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights');

// Show all flights
router.get('/', flightsCtrl.index);

// Create a new flight
router.get('/new', flightsCtrl.new);

// GET /flights/:id (show functionality) MUST be below new route
router.get('/:id', flightsCtrl.show);

// Save the new flight
router.post('/', flightsCtrl.create);

// Update the flight
router.post('/:id', flightsCtrl.addDestination);

// Update the flight
router.post('/:id/tickets/new', flightsCtrl.addTicket);

// Update the flight
router.get('/:id/tickets/new', flightsCtrl.getTicket);

module.exports = router;
