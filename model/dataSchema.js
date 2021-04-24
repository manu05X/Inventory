const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    image:{
        type: String,
        require: true
    },
    heading:{
        type: String,
        require: true
    },
    subheading:{
        type: String,
        require: true
    },
    detail:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    },
    disprice:{
        type: Number,
        require: true
     },
    rating:{
        type: Number,
        require: true
    },
    countReview:{
        type: Number,
        require: true
    },
    hours:{
        type: Number,
        require:true
    },
    lectures:{
        type:Number,
        require:true
    },
    levels:{
        type:String,
        require:true
    }
       
})


// now creating collection or model
const Course = mongoose.model('Course', dataSchema);



module.exports = Course;