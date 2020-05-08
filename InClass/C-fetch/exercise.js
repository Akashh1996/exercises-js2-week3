/*
================

Create an HTML file that uses this javascript file.
The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=160 with 
user latitude and longitude.
When you get the response from the server, print the current temperature in an <h3> marker.


================
*/
var h3 = document.createElement("h3")

document.querySelector("button").addEventListener("click",function (e){
    var lat = document.querySelector("#Latitude").value;
    var lon = document.querySelector("#Longitude").value
    var url = "https://fcc-weather-api.glitch.me/api/current";
    url += "?lat=" + lat;
    url += "&lon=" + lon;
    console.log(url);
    fetch(url)
     .then(function (response){
         console.log(response.status);
         return response.json()
         
     })
     .then(function (myJson){
         var form = document.querySelector("form")
        h3.innerHTML = myJson.main.temp
        form.appendChild(h3)
         
     })
    e.preventDefault()
    
})
