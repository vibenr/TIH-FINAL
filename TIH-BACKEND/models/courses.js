const mongoose=require('mongoose')
const CoursesSchema= new mongoose.Schema({
    title:{
        type: 'string',
        required: true,
        trim: true,
        unique: true
    },
     description:{
        type: 'string',
        required: true,
        trim: true,
    },
    image:{
        type:'string',
        required:true
    }
});


const CoursesModel=mongoose.model('courses',CoursesSchema);



module.exports = CoursesModel;