const Record = require("../models/Record");


const getSummary = async (req, res) => {
    try {
        const records = await Record.find();

        let totalIncome = 0;
        let totalExpense = 0;

        records.forEach(record => {
            if (record.type === "income") {
                totalIncome += record.amount;
            } else {
                totalExpense += record.amount;
            }
        });

        res.json({
            totalIncome,
            totalExpense,
            balance: totalIncome - totalExpense
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getSummary };