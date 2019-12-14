const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const users = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type:String,
    required:true
  },
  password :{
  	type : String,
  	required : true
  },
  createdAt : {
  	type : Date,
  	default : Date.now
  },
  updatedAt : {
  	type : Date,
  }
});

module.exports = mongoose.model('users', users, 'users');