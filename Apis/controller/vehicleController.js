
const vehicleData = require('../model/vehiclemodel');

const postVehicle = async (req, res) => {
    const vehicles = req.body;
    try {
        const result = await vehicleData.insertMany(vehicles);
        return res.status(200).json({
            message: "Vehicles saved successfully",
            result: result,
            count: result.length
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
};

const getVehicle = async (req, res) => {
    try {
        const getconveyance = await vehicleData.find({})
        return res.status(200).json({
            message: "Vehicles fetched successfully",
            result: getconveyance,
            count: getconveyance.length
        });
    } catch (err) {
        console.log(err.message);
        return res.status(500).json({
            message: err.message
        });
    }
};

const dltVehicle = async (req, res) => {
    const id = req.params.id;
    try {
        const vehicle_find = await vehicleData.findOne({
            _id: id
        })
        if (!vehicle_find) {
            return res.status(404).json({
                message: "vechile not found"
            })
        }
        await vehicleData.findByIdAndDelete(id)
        return res.status(200).json({
            message: "Vehicle deleted successfully"

        })
    }
    catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}
const updVehicle = async (req, res) => {
    const updt_id = req.params.id
    const updatedVehicle = req.body;
    try {
        const vehicle_update = await vehicleData.findByIdAndUpdate({ _id: updt_id }, updatedVehicle, { new: true })
        await vehicle_update.save()
        return res.status(200).json({
            message: "Vehicle updated successfully",
            result: vehicle_update

        })
    }
    catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }

}

module.exports = {
    postVehicle,
    getVehicle,
    dltVehicle,
    updVehicle
}
