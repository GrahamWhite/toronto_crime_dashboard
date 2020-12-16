const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//
// module.exports = mongoose.model('Crime', CrimeSchema);
//
// 'use strict';
// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
//
//
var CrimeSchema = new Schema({
    title: {
        type: String,
        required: 'Kindly enter the title of the task'
    },
    location: {
        type: String
    },
    person: {
        type: String
    },
    age: {
        type: String
    },
    description: {
        type: String
    },
    pubDate: {
        type: Date
    },
    information: {
        details: []
    },
    logDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

module.exports = mongoose.model('Crimes', CrimeSchema);