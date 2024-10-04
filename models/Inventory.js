const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    supplier: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Inventory', InventorySchema);
