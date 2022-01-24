const mongoose = require('mongoose');



const UserSchema = new mongoose.Schema({

  avatar: {
type: String,
required: true
},
  email: {
type: String,
required: true
},
  password: {
    type: String,
    required: true
},
date: {
    type: Date,
    default: Date.now
},
 coins: {
    type: Number,
    default: 100
 },

 firstName: String, 
 lastName: String,
});

const User = mongoose.model('User', UserSchema);

  User.findOneAndUpdate({email: 'text' }, {coins: 500 }, (error, data) => {
    if(error){
      console.log(error);
    }else{
      console.log(data);
    }
  })  



function buy2000(){

  User.findOneAndUpdate({email: 'viktorlilienberg@gmail.com' }, {coins: coins + 2000 }, (error, data) => {
    if(error){
      console.log(error);
    }else{
      console.log(data);
    }
  })  
}



function buy5000(){

  User.findOneAndUpdate({email: 'viktorlilienberg@gmail.com' }, {coins: coins + 5000 }, (error, data) => {
    if(error){
      console.log(error);
    }else{
      console.log(data);
    }
  })  
}





module.exports = User; 

//hej