const express = require('express');
const router = express.Router();
const Listing = require('../models/listings');

// GET all listings
router.get('/', async (req, res) => {
  try {
    const listings = await Listing.find();
    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Cheapest properties
router.get('/cheapest', async (req, res) => {
  try {
    const listings = await Listing.find().sort({ price: 1 }).limit(4);
    res.json(listings);
  } catch (err) {
    console.error('Cheapest route error:', err);
    res.status(500).json({ error: 'Failed to fetch cheapest properties' });
  }
});

// Recently Added
router.get('/recent', async (req, res) => {
  try {
    const listings = await Listing.find().sort({ createdAt: -1 }).limit(4);
    res.json(listings);
  } catch (err) {
    console.error('Recent route error:', err);    
    res.status(500).json({ error: 'Failed to fetch recent properties' });
  }
});

// GET via searching name or location
router.get('/search', async (req, res) => {
  let searchTerm = req.query.query;
 if (typeof searchTerm !== 'string') {
    searchTerm = '';
  } else {
    searchTerm = searchTerm.trim();
  }

  try {
    const results = await Listing.find({
      $or: [
        { property_name: { $regex: searchTerm, $options: 'i' } },
        { property_location: { $regex: searchTerm, $options: 'i' } }
      ]
    });
    res.json(results);
  } catch (err) {
    console.error('Search error:', err);
    res.status(500).json({ error: 'Search failed' });
  }
});


// GET listing by ID
router.get('/:id', async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);
    if (!listing) return res.status(404).json({ error: 'Listing not found' });
    res.json(listing);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});


// POST create listing
router.post('/', async (req, res) => {
  try {
    const newListing = new Listing(req.body);
    await newListing.save();
    res.status(201).json(newListing);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' , details: err.message});
  }
});

// PUT update listing
router.put('/:id', async (req, res) => {
  try {
    const updated = await Listing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Listing not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Update failed' });
  }
});

// DELETE listing
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Listing.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Listing not found' });
    res.json({ message: 'Listing deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

module.exports = router;
