const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json({ extended: true, limit: '5mb' }))
app.use(bodyParser.urlencoded({ extends: true }))
app.use(cors());
const userroutes = require('./route/vehicleRoutes');
app.use('/api', userroutes)
const Port = 4200
const DB_URL = "mongodb+srv://yamanmahawar10:mongoyam123@cluster0.bhzaptc.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then((
) => {
    app.listen(Port, (req, res) => {
        console.log(`Server running at http://localhost:${Port}`);
    })
}).catch((err) => {
    console.log(err)
})
app.use("/", (req, res) => {
    res.status(200).json({
        message: "hello world",
    });
});



