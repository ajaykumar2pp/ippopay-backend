const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const valueSchema = new Schema(
    {
        values: [
            {type:String}
        ],
        answers:{
            type:Number,
        }  
    },
    { timestamps: true });
module.exports = mongoose.model('Value', valueSchema);