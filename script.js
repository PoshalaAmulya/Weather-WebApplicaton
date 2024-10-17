console.log("Hello World");
// https://openweathermap.org/current
// cba59ef800277db5fd9d3c8d25636d02
// https://api.openweathermap.org/data/2.5/weather?q=warangal&appid=cba59ef800277db5fd9d3c8d25636d02


apiKey="cba59ef800277db5fd9d3c8d25636d02";
apiUrl=  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
loc= document.querySelector(".search input");
btn= document.querySelector(".search button");
console.log(loc);
console.log(btn);
async function weatherReport(city){
    const response= await fetch(apiUrl+city+`&appid=${apiKey}`);
    console.log(apiUrl+city+`&appid=${apiKey}`);
    const data= await response.json();
    
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    document.querySelector(".weather").style.display="block";
    console.log(data);
    console.log(data.weather[0].main);
    cloud= data.weather[0].main;
    console.log(cloud);
    if(cloud=='Clear'){
        document.querySelector(".weather-icon").src="Images/clear.png";
    }
    if(cloud=='Clouds'){
        document.querySelector(".weather-icon").src="Images/clouds.png";
    }
    if(cloud=='Rain'){
        document.querySelector(".weather-icon").src="images/rain.png";
    }
    if(cloud=='Drizzle'){
        document.querySelector(".weather-icon").src="Images/drizzle.png";
    }
    if(cloud=='Mist'){
        document.querySelector(".weather-icon").src="Images/mist.png";
    }
}
btn.addEventListener('click',()=>{
    console.log(loc.value);
    weatherReport(loc.value);
});
