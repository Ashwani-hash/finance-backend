const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();


app.use(express.json());


app.use("/users", require("./src/routes/userRoutes"));
app.use("/records", require("./src/routes/recordRoutes"));
app.use("/dashboard", require("./src/routes/dashboardRoutes"));


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Database connected");

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.error("DB connection error:", err.message);
    });