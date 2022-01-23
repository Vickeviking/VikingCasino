const mongoose = require('mongoose');



const UserSchema = new mongoose.Schema({

  name: {
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

});

const User = mongoose.model('User', UserSchema);



User.findOneAndUpdate({email: 'viktorlilienberg@gmail.com' }, {coins: 200 }, (error, data) => {
  if(error){
    console.log(error);
  }else{
    console.log(data);
  }
}) // i User.js


module.exports = User; 

