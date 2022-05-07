const router = require("express").Router();
const Pin = require("../models/Pin");

// Create pin
router.post("/", async (req, res)=>{
    const pin = new Pin(req.body)
    try{
        const savePin = await pin.save();
        res.status(200).json(savePin)

    }catch (err){
        res.status(500).json(err)

    }

})
// get all pins
router.get("/all", async (req, res)=>{
    const pin = new Pin(req.body)
    try{
        const pins = await Pin.find();
        res.status(200).json(pins)

    }catch (err){
        res.status(500).json(err)

    }

})


module.exports = router