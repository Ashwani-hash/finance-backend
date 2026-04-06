const Record = require("../models/Record");


const createRecord = async (req, res) => {
    try {
        const record = await Record.create({
            ...req.body,
            user: req.user.id
        });

        res.status(201).json(record);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getRecords = async (req, res) => {
    try {
        const records = await Record.find().sort({ createdAt: -1 });
        res.json(records);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateRecord = async (req, res) => {
    try {
        const updated = await Record.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Record not found" });
        }

        res.json(updated);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteRecord = async (req, res) => {
    try {
        const record = await Record.findByIdAndDelete(req.params.id);

        if (!record) {
            return res.status(404).json({ message: "Record not found" });
        }

        res.json({ message: "Record deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createRecord,
    getRecords,
    updateRecord,
    deleteRecord
};