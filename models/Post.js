const mongoose = require('mongoose');

// tworzymy schemat w bazie danych

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// linijka odpowiedzialna za eksport modelu nadajemy mu nazwę  Posts
// oraz nazwę schematu na podstawie jakiego jest tworzony

module.exports = mongoose.model('Posts', PostSchema);