const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    position: { 
        type: String, 
        required: true, 
        enum: ['Security', 'Call Center Officer', 'Cleaner', 'Manager', 'Organizer'] // Job Positions
    },
    wages: { type: Number, required: true },
    maritalStatus: {  // Added marital status field
        type: String,
        enum: ['Married', 'Unmarried'], // Marital Status Options
        required: true
    },
});

const Staff = mongoose.model('arenaStaff', staffSchema);
module.exports = Staff;
