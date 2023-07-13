const Flight = require('../models/flight');
const Tickets = require('../models/ticket');

async function index(req, res) {
  try {
    const flights = await Flight.find({});
    
    res.render('flights/index', {  title: 'All Flights', flights });
  } catch (err) {
    console.log(err);

    res.redirect('/');
  }
}

async function show(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);

    const tickets = await Tickets.find({ flight: flight._id })

    res.render('flights/show', { title: 'Flight Details', flight, tickets});
  } catch (err) {
    console.log(err);

    res.redirect('/flights');
  }
}

async function addDestination(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);

    flight.destinations.push(req.body);

    await flight.save();

    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.log(err);

    res.redirect('/flights');
  }
}

function newFlight(req, res) {
  res.render('flights/new', { title: 'Add Flight', errorMsg: ''});
}

async function create(req, res) {
  
  req.body.nowShowing = !!req.body.nowShowing;

  
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }

  try {
    const flight = await Flight.create(req.body);

    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
}

async function addTicket(req, res) {
  
  // for (let key in req.body) {
  //   if (req.body[key] === '') delete req.body[key];
  // }

  req.body.flight = req.params.id;

  try {
    const ticket = await Tickets.create(req.body);

    res.redirect(`/flights/${flight._id}`);
  } catch (err) {
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
}

async function getTicket(req, res) {
  
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }

  try {
    const flight = await Flight.findById(req.params.id)
    console.log(flight, "******")
    res.render('flights/tickets', {flight});
  } catch (err) {
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
}

module.exports = {
  index,
  create,
  new: newFlight,
  show,
  addDestination,
  getTicket,
  addTicket,
};
