const mongoose=require('mongoose');
const student=new mongoose.Schema({
    id:{type:Number,require:true},
    name:{type:String,require:true},
    age:{type:Number,require:true}
})
const studentSchema=mongoose.model("student",student);
module.exports=studentSchema;