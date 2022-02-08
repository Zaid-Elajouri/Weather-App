let button = document.getElementById("btn");
let input = document.getElementById("userinput");
let city = document.getElementById("city");

//getting the current weather using openweathermap api in json format
button.addEventListener('click',()=>{
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+input.value+"&APPID=36dad6024bb5ca5f6517b2af25087d74",
function(data){
  city.innerHTML = input.value;
  //get && display temperature 
  let temp = data.main.temp;
  document.getElementById("temp").innerText = parseInt(temp - 273.15)+"°C";
  //get && display weather
  let weather = data.weather[0].description;
  document.getElementById("weather").innerText = weather;
  //get && display weather-icon
  let icon = data.weather[0].icon;
  document.getElementById('icon').src = "http://openweathermap.org/img/w/"+icon+".png";
  //styling weather icon
  document.getElementById('icon').style.width="95px";
  document.getElementById('icon').style.height="95px";
  //styling temperature result
  document.getElementById("temp").style.fontFamily="font-family: 'Be Vietnam Pro', sans-serif";
  document.getElementById("temp").style.fontWeight="800";


})
});
  //clear input
input.addEventListener('click',()=>{
   input.value='';
})
