

const mongoose=require('mongoose')
const adminLoginSchema= new mongoose.Schema({
    username:{
        type: 'string',
        required: true,
        trim: true,
        unique: true
    },
     password:{
        type: 'string',
        required: true,
        trim: true,
    }
});

const adminLoginModel=mongoose.model('adminlogin',adminLoginSchema);



module.exports = adminLoginModel;