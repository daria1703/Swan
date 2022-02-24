const mongoose = require('mongoose');

// tworzymy schemat w bazie danych

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        default: "Przedmiot"
    },
    description: {
        type: String,
        required: true,
        default: "Opis"
    },
    price:{
        type: Number,
        required: true,
        default: 0
    },
    matter:{
        type: String,
        required: true,
        default: "Materiał"
    },
    assay:{
        type: Number,
        require: true,
        default: 0
    },
    size:{
        type: Number,
        require: true,
        default: 0
    },
    brand:{
        type: String,
        require: true,
        default: 0
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