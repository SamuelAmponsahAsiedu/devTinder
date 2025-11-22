const mongoose = require("mongoose");

const connectDB = async() =>{
    await mongoose.connect(
        'mongodb+srv://amponsahsam932:iM3NbkEf761GyzVo@samuelnode.qaz1r5k.mongodb.net/devTinder'
    );
}

module.exports =connectDB;

