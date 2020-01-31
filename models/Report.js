var mongoose = require('mongoose');

// schema
var reportSchema = mongoose.Schema({
  title:{type:String, required:[true,'Title is required!']},
  date:{type:Date, required:[true,'Body is required!']},
  body1:{type:String, required:[true,'Body1 is required!']},
  body2:{type:String, required:[true,'Body2 is required!']},
  body3:{type:String, required:[true,'Body3 is required!']},
  author:{type:mongoose.Schema.Types.ObjectId, ref:'user', required:true},
  createdAt:{type:Date, default:Date.now},
  updatedAt:{type:Date},
});

// model & export
var Report = mongoose.model('report', reportSchema);
module.exports = Report;
