const mongoose = require('mongoose');

const StarWarsSchema = new mongoose.Schema({
    padawanName: { 
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be longer than 3 letters"]
    },
    height: { 
        type: Number,
        required: [true, "Height required"]
    },
    hairColor: { 
        type: String,
        required: [true, "Hair Color required"]
    },
    eyeColor: { 
        type: String,
    },
    picture:{
        type: String,
        required: [true, "Photo required"]
    }
}, { timestamps: true });

module.exports.StarWars = mongoose.model('StarWars', StarWarsSchema);
                                        //in Pirates-Controller
