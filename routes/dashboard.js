// src/routes/dashboard.js
/*
const express = require("express");
const router = express.Router();
const Booking = require("../models/ArenaBooking"); // Assuming you have a Booking model
const Arena = require("../models/Arena"); // Assuming you have an Arena model
const Customer = require("../models/Customer"); // Assuming you have a Customer model

// Get booking stats
router.get("/bookings", async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch bookings" });
    }
});

// Get arena stats
router.get("/arenas", async (req, res) => {
    try {
        const arenas = await Arena.find();
        res.json(arenas);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch arenas" });
    }
});

// Get customer stats
router.get("/customers", async (req, res) => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch customers" });
    }
});

module.exports = router;
*/