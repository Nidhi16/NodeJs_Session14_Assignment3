var express = require('express');

var router = express.Router();

router.route('/student')
    .get(function (request, response) {
        response.send("This is default get");
    })
    .post(function (request, response) {
        response.send("This is post request");
    });

router.route('/student/:id')
    .get(function (request, response) {
        response.send("This is second get request");
    })
    .put(function (request, response) {
        response.send("This is put request");
    })
    .delete(function () {
        response.send("This is delete request");
    });

module.exports = router;