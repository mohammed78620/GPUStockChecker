const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gpuSchema = new Schema({

    title: {type: String, required: true},
    img:   {type: String, required: true},
    stock: {type: Boolean, required: true},
}, {
    timestamps:true,
});

const Gpu = mongoose.model('Gpu', gpuSchema);

module.exports = Gpu;