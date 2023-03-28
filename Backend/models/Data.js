const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const submSchema = new Schema({
    title: String,
    summary: String,
    description: String,
    img:
    {
        data: Buffer,
        contentType: String
    },
    hack_name: String,
    hack_start_date: Date,
    hack_end_date: Date,
    gh_rep: String,
    o_link: String,
    current_date: String,
    fav:{
        type: String,
        default:'NO'
    }
})

module.exports = mongoose.model("Subm",submSchema)