const express = require('express');
const router = express.Router();
const { postVehicle, getVehicle, dltVehicle,updVehicle } = require('../controller/vehicleController');

router.post("/postvehicledata", postVehicle)
router.get("/getvehicleData", getVehicle)
router.delete("/deleteVehicleData/:id", dltVehicle)
router.patch("/patchVehicleData/:id", updVehicle)
module.exports = router;
