const mongoose = require('mongoose');
let vehicleSchema = mongoose.Schema(
    {
        vehicle_name: {
            type: String,
            required: true,
            allowNull: true
        },
        vehicle_model: {
            type: String,
            required: true,
            allowNull: true
        },
        vehicle_age: {
            type: Number,
            required: true,
            allowNull: true
        },
        created_at: {
            type: Date,
            default: Date.now()
        }

    }
)
let vehicleData = mongoose.model("vehicleData", vehicleSchema)
module.exports = vehicleData;