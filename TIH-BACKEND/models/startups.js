

const mongoose=require('mongoose')
const StartupsSchema= new mongoose.Schema({
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


const StartupsModel=mongoose.model('startups',StartupsSchema);




module.exports = StartupsModel;