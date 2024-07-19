const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherapi.com/v1/current.json?key=9a8e6187c76b48cc81f182224241907&q="+latitude+","+longitude
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather API service", undefined);
        } else if (response.body.error) {
            callback(response.body.error.message, undefined);
        } else {
            callback(undefined, response.body.location.name + " it is: " + response.body.current.condition.text +
                " and temp is: " + response.body.current.temp_c);
        }
    });
}

// forecast(-63.104385, 46.282344, (error, data) => {
//     console.log("ERROR:", error);
//     console.log("DATA:", data);
// });
module.exports=forecast