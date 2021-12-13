const bcrypt = require("bcryptjs");
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({  


    name:{type:String, required:true},
    location:{type:String, required:true, unique:true},
    

},{
   versionKey:false,
   timestamps:true,
})


userSchema.pre("save", function (next) { 


    if (!this.isModified("location")) return next();
    bcrypt.hash(this.location, 20, (err, hash) => {
      this.location = hash;
      return next();
    });
  });
  
 
  



module.exports = mongoose.model('theatres',userSchema);