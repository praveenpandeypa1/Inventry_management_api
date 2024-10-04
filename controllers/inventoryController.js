const Inventory = require('../models/Inventory');

// Get all items
exports.getAllItems = async (req, res) => {
    try {
        const items = await Inventory.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new item
exports.createItem = async (req, res) => {
    console.log(req.body); // Log the request body
    const { name, quantity, price, supplier } = req.body;

    const newItem = new Inventory({
        name,
        quantity,
        price,
        supplier,
    });

    try {
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update an item
exports.updateItem = async (req, res) => {
    try {
        const updatedItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an item
exports.deleteItem = async (req, res) => {
    try {
        await Inventory.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
