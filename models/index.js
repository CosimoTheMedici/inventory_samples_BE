const mongoose = require("mongoose");
const uri1 = "mongodb+srv://adminhamza:adminhamza123&@cluster0.pzcviot.mongodb.net/InventoryManagementApp?retryWrites=true&w=majority";
const uri8 = "mongodb://localhost:27017/InventoryManagementApp?retryWrites=true&w=majority";
const uri = process.env.MONGODB_URI


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };