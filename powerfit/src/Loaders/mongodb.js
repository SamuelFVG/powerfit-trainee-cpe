const mongoose = require("mongoose");

async function startDB(){
    await mongoose.connect('mongodb+srv://jpcresende74:ZSm8u92TMSXPSWPG@cursonode.60wwaeb.mongodb.net/?retryWrites=true&w=majority')
}

module.exports = startDB;