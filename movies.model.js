const bcrypt = require("bcryptjs");
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({  


    name:{type:String, required:true},
    actors:{type:String, required:true, unique:true},
    languages:{type:String, required:true},
    directotrs : {type : String, requored : true},
    poster_url :{type:String ,required:true},
  

},{
   versionKey:false,
   timestamps:true,
})


userSchema.pre("save", function (next) { 


    if (!this.isModified("actor")) return next();
    bcrypt.hash(this.actor, 20, (err, hash) => {
      this.actor= hash;
      return next();
    });
  });
  
 




module.exports = mongoose.model('movies',userSchema);