// //go to the OpenWeatherAPp website and copy your AP>I key and paste here.
// const key = 'd5f01fe1294d559676751383f6bce208';
// //then go to API and select the >APidoc then the APIcall for the current weather and chane the city name to Lagos and the 'your api key' options to the API key above 
// const baseURL = 'api.openweathermap.org/data/2.5/weather?q=Lagos&appid=d5f01fe1294d559676751383f6bce208';

//const inputValue = document.querySelector ("weatherImput");

// //fetch is a promise while .then is a callback function
// fetch "api.openweathermap.org/data/2.5/weather?q="
//     +
//     inputValue.value +
//      "&appid=d5f01fe1294d559676751383f6bce208"
//      .then(response => response.json())
//      .then(respomse => {
//          3
//      })

var btn = document.querySelector('.btn');
var weatherInput = document.querySelector('.weatherInput');
var name = document.querySelector('.name');
var country = document.querySelector('.country');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var desc = document.querySelector('.desc');


btn.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+weatherInput.value+'&units=metric&appid=d5f01fe1294d559676751383f6bce208')
    .then(response => response.json())
    .then(data => {
     console.log(data)
                var nameValue = data['name'];
                var countryValue = data['sys']['country'];
                var tempValue = data['main']['temp'];
                var humidityValue = data['main']['humidity'];
                var descValue = data['weather'][0]['description'];
            
            //     var tempValue = () => {
            //         updatedTemp = parseFloat(tempValue.value - 273.15);
            //     };

            //   console.log(updatedTempValue);

                name.innerHTML = nameValue;
               country.innerHTML = nameValue +"," +" "+ countryValue;
                temp.innerHTML = "Temperature:" + " " + tempValue + "&deg;C";
                humidity.innerHTML ="Humidity:" + " " + humidityValue + "%";
                desc.innerHTML = descValue;
                
    })
        


    .catch(err => alert("City Don't Exist!"))
})



// const link = "https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=d5f01fe1294d559676751383f6bce208";
// const request = new XMLHttpRequest();
// request.open('GET', link, true);
// request.onload =function(){
//     var obj = JSON.parse(this.response);
//     console.log(obj);

//     function search(){
//         document.getElementById("main").innerHTML = obj.main.temp;
//     }
// }
// request.send();
