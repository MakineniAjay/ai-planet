const mongoose = require("mongoose");
const mongooseURI = "mongodb://localhost:27017/ai_planet"

const connectTodb = ()=>{
    mongoose.connect(mongooseURI)
}

module.exports = connectTodb