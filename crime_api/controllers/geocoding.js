
const API_KEY = 'AIzaSyBGo3S5B0mf7YcAMKIDMVguxMoeCU0QdvE';
const fetch = require("node-fetch");
exports.getAddressGeo = function (addr) {

    const city = 'Toronto'

    let url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + encodeURI(addr + city) + ',+CA&key=' + API_KEY;


    let f = fetch(url)
        .then(res => {
            return res.json();
        }).catch(e => {
        console.log("No Address Found: " + e);
    });

    return f;




};

// exports.getReverseGeoodingData = function (lat, lng) {
//     var latlng = new google.maps.LatLng(lat, lng);
//     // This is making the Geocode request
//     var geocoder = new google.maps.Geocoder();
//     geocoder.geocode({ 'latLng': latlng }, function (results, status) {
//         if (status !== google.maps.GeocoderStatus.OK) {
//             alert(status);
//         }
//         // This is checking to see if the Geoeode Status is OK before proceeding
//         if (status == google.maps.GeocoderStatus.OK) {
//             console.log(results);
//             var address = (results[0].formatted_address);
//         }
//     });
// }