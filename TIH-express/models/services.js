

const mongoose=require('mongoose')
const ServicesSchema= new mongoose.Schema({
    title:{
        type: 'string',
        required: true,
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


const ServicesModel=mongoose.model('services',ServicesSchema);


module.exports = ServicesModel;