const mongoose = require('mongoose');

// tworzymy schemat w bazie danych

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    matter:{
        type: String,
        required: true,
    },
    assay:{
        type: Number,
        require: true,
    },
    size:{
        type: Number,
        require: true,
    },
    // img:{
    //     type: Image,
    //     required: true,
    // },
    date: {
        type: Date,
        default: Date.now
    }
})

// linijka odpowiedzialna za eksport modelu nadajemy mu nazwę  Posts
// oraz nazwę schematu na podstawie jakiego jest tworzony

module.exports = mongoose.model('Products', ProductSchema);