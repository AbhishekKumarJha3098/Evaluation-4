const bcrypt = require("bcryptjs");
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({  


    name:{type:String, required:true},
    theatre:{type:String, required:true, unique:true},
   
},{
   versionKey:false,
   timestamps:true,
})


userSchema.pre("save", function (next) { 


    if (!this.isModified("actor")) return next();
    bcrypt.hash(this.theatre, 20, (err, hash) => {
      this.theatre= hash;
      return next();
    });
  });
  
 




module.exports = mongoose.model('screens',userSchema);