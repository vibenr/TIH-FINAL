const mongoose = require('mongoose');

mongoose
	.connect('mongodb+srv://yugkhokhar:S2k3c0s2@cluster0.uaegm.mongodb.net/TIH?retryWrites=true&w=majority', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('connected');
	})
	.catch((err) => {
		console.log(err);
	});

/* 
    const bcrypt=require('bcryptjs');

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



 
    let username="yug khokhar";
    let pass="S2k3c0s2@"; 

   
    const hashandsave=async(name,passwords)=>{
        
  
    const hashpassword=bcrypt.hash(passwords,10,(err,hash)=>{
        let data=new adminLoginModel({
        username:name,password:hash
    });
    data.save(); 
    
})
}

hashandsave(username,pass); 
 */
