var bodyParser = require('body-parser');
var express = require('express');
var Student = require('../models/studentModel');

var router = express.Router();

router.route('/students')
    .get(function(request, response){
        Student.find(function(err, results) {
            if (err) {
                response.send(err);
            } else {
                // response.json(results);
                response.render('student_list', {'students': results});
            }
        });
    })
    .post(function(request, response){
        // response.send("This is post request");
        var data = request.body;
        var newStudent = new Student();
        newStudent.name = data.name;
        newStudent.roll_code = data.roll;
        newStudent.dob = data.dob;
        newStudent.gender = data.gender;
        newStudent.school = data.school;
        newStudent.email = data.email;
        newStudent.phone = data.phone;
        newStudent.description = data.description;
        newStudent.address = data.address;

        newStudent.save(function (err, student) {
            if (err) {
                response.send(err);
            } else {
                response.redirect('/api/student/'+student._id+'/');
            }
        })
    });

router.route('/student/:id')
    .put(function(request, response){
        // response.send("This is the put request");
        var id = request.params.id;
        Student.findOne({_id:id}, function(err, student){
            for(prop in request.body){
                student[prop]=request.body[prop];
            }

            // save the movie
            student.save(function(err, student) {
                if (err)
                    response.send(err);

                response.json(student);
            });
        })
    })
    .get(function(request, response){
        // response.send("This is the second get request");
        Student.findOne({_id:request.params.id},function(err, student) {
            if(err)
                response.send(err);

            response.render('student_detail', {'student': student});
        });
    })
    .delete(function(request, response){
        // response.send("This is the delete request");
        Student.remove({
            _id: request.params.id
        }, function(err, student) {
            if (err)
                response.send(err);

            response.sendStatus(204);
        });
    });

module.exports = router;