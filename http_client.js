const http = require('http');
const options = {
    host: 'localhost', port: "8081", path:'/test.html'
};
const callback = function (response) {
    const body = '';
    response.on('data', function (data) {
        body += data;
    });
    response.on('end', function () {
        console.log(body);
    });
    response.on("error", (error) => {
        console.error(error);
    });
};
const req = http.request(options, callback);
req.end();