const mongoose=require('mongoose')
const ActivitySchema= new mongoose.Schema({
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
   
});


const ActivityModel=mongoose.model('activities',ActivitySchema);



module.exports = ActivityModel;