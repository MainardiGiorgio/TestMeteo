var input = document.querySelector('.input_text_forecast');
var button= document.querySelector('.submit');
var main = document.querySelector('#name');

var date1 = document.querySelector('.date1');
var temp1 = document.querySelector('.temp1');
var desc1 = document.querySelector('.desc1');

var date2 = document.querySelector('.date2');
var temp2 = document.querySelector('.temp2');
var desc2 = document.querySelector('.desc2');

var date3 = document.querySelector('.date3');
var temp3 = document.querySelector('.temp3');
var desc3 = document.querySelector('.desc3');

button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&lang=it&appid=6abda56703d30455542d7e49f3f3b385&units=metric')
.then(response => response.json())
.then(data => {
  var nameValue = data['city']['name'];
  
  main.innerHTML = nameValue;

  var weatherData = data['list'];

  var DataD1 = weatherData[1];
  
  var dateD1 = DataD1['dt_txt'];
  var tempD1 = DataD1['main']['temp'];
  var descriptionD1 = DataD1['weather'][0]['description'];

  date1.innerHTML = "Date - " + dateD1;
  desc1.innerHTML = "Desc - " + descriptionD1;
  temp1.innerHTML = "Temp - " + tempD1;

  var DataD2 = weatherData[2];
    
  var dateD2 = DataD2['dt_txt'];
  var tempD2 = DataD2['main']['temp'];
  var descriptionD2 = DataD2['weather'][0]['description'];

  date2.innerHTML = "Date - " + dateD2;
  desc2.innerHTML = "Desc - " + descriptionD2;
  temp2.innerHTML = "Temp - " + tempD2;
  input.value ="";

  var DataD3 = weatherData[3];
    
  var dateD3 = DataD3['dt_txt'];
  var tempD3 = DataD3['main']['temp'];
  var descriptionD3 = DataD3['weather'][0]['description'];

  date3.innerHTML = "Date - " + dateD3;
  desc3.innerHTML = "Desc - " + descriptionD3;
  temp3.innerHTML = "Temp - " + tempD3;

  })
})