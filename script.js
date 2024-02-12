var rest = fetch("https://restcountries.com/v2/all");
rest.then((data)=>data.json()).then((maindata)=>{
    // for(let i=0; i<=maindata.length;i++){
    //     console.log(maindata[i]);
        maindata.forEach(createcard);

});

var headdiv = document.createElement("div");
// headdiv.setAttribute("class","container");
headdiv.innerHTML = "<h2 style = 'text-align: center'>Rest Countries & Weather Using Fetch API</h2>";


function createcard(country){

 
  

var maindiv = document.createElement("div");
maindiv.setAttribute("class","maincontent");

var carddiv = document.createElement("div");
carddiv.setAttribute("class","card");


carddiv.innerHTML = `
<div class="row">
  <div class="column">
<div class="card">
<h6 class="card-title">${country.name}</h6>
<img src="${country.flag}" class="card-img-top" alt="..." id = "img-align">

<div class="card-body">
 
  <p class="card-text">Capital: ${country.capital}</p>
  <p class="card-text">Region: ${country.region}</p>
  <p class="card-text">Country Code: ${country.callingCodes}</p>
  <p class="card-text">LatLng: ${country.latlng}</p>


  <a href="#" class="btn btn-primary" onclick = "weatherTest('${country.name}', '${country.capital}')">Click For Weather</a>
  
</div></div>
</div></div>`;



// maindiv.append(col);
// maindiv.append(row);

maindiv.append(carddiv);

headdiv.append(maindiv)

document.body.append(headdiv);
}

function weatherTest(countryName){
  console.log(JSON.stringify(countryName));
  var weather = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryName}&appid=9c74b3de00340a6c7db725ba6a833843`);
  
  weather.then((data)=>data.json()).then((weatherData)=> {
    console.log(weatherData);
      alert(`weather in ${countryName}: ${weatherData.weather[0].description}`);
    
  })
}
