const express = require('express');
const router = express.Router();
const Booking = require('../models/bookings');
const Listing = require('../models/listings');

router.post('/', async (req, res) => {
  try {
    const { property_id, user_id, check_in, check_out } = req.body;

    if (!property_id || !user_id || !check_in || !check_out) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    //Create new booking
    const booking = new Booking({
      booking_id: Date.now(),
      property_id,
      user_id,
      check_in,
      check_out,
    });

    await booking.save();

    //Update the property status
    await Listing.findByIdAndUpdate(property_id, {
      booked_status: true,
      check_in,
      check_out
    });

    res.status(201).json({ message: 'Booking successful', booking });
  } catch (error) {
    console.error('Booking error:', error.message);
    res.status(500).json({ message: 'Booking failed', error: error.message });
  }
});

//Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('user_id')
      .populate('property_id');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching bookings' });
  }
});

//Get booking by ID
router.get('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching booking' });
  }
});

//Update booking
router.put('/:id', async (req, res) => {
  try {
    const updated = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Booking not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Update failed' });
  }
});

//Delete booking
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Booking.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Booking not found' });
    res.json({ message: 'Booking deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

module.exports = router;
