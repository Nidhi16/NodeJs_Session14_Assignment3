var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var studentSchema = new Schema({
    name: String,
    roll_code: String,
    dob: Date,
    gender: String,
    school: String,
    email: String,
    phone: String,
    description: String,
    address: String
});

var Student = mongoose.model('Student', studentSchema);

module.exports = Student;
