var app = require('../app');

var port = process.env.PORT || 8000;

app.listen(port, function (request, response) {
   console.log("Listening on port " + port);
});