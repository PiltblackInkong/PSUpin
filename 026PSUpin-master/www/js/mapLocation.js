$("#location").click(function(){     
    var latlng = position.coords.latitude ;
    document.getElementById("demo").innerHTML =latlng;
       
    // var onSuccess = function(position) {
    //     alert('Latitude: '          + position.coords.latitude          + '\n' +
    //           'Longitude: '         + position.coords.longitude         + '\n' +
    //           'Altitude: '          + position.coords.altitude          + '\n' +
    //           'Accuracy: '          + position.coords.accuracy          + '\n' +
    //           'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
    //           'Heading: '           + position.coords.heading           + '\n' +
    //           'Speed: '             + position.coords.speed             + '\n' +
    //           'Timestamp: '         + position.timestamp                + '\n');
    // };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);

    
});   

function onSuccess(position) {
    var element = document.getElementById('geolocation');
    element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                        'Longitude: ' + position.coords.longitude     + '<br />' +
                        '<hr />'      + element.innerHTML;
}

// onError Callback receives a PositionError object 
// 
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

// Options: throw an error if no update is received every 30 seconds. 
// 
var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });


function myFunction() {

    document.getElementById("myText").value = position.coords.latitude;
}