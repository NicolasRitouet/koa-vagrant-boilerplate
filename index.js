var koa = require('koa'),
    app = koa(),
    request = require('request');


app.use(function *() {
    var response = yield doHttpRequest('http://api.openweathermap.org/data/2.5/weather?q=Berlin,de');
    var kelvinTemp = JSON.parse(response.body).main.temp;
    this.body = "Current temperature in Berlin: " + (kelvinTemp - 273.15) + "°C";
});


function *doHttpRequest(url) {
    var resultParams = yield doRequest(url);
    return resultParams[0];
}

function doRequest(url) {
    return function(callback) {
        request(url, callback);
    }
}


app.listen(3000);