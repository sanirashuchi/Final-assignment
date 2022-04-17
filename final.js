var text = '';
function findinformation() {
    text = document.getElementById('country-search').value;
    connectinformation (text)
}

function connectinformation(text) {
    fetch(`https://api.covid19api.com/dayone/country/${text}`)
    .then(res=> res.json() )
    .then(data=> searchCountry(data) );
}

connectinformation();

function searchCountry(data){
    console.table(data[0]);
    var container = document.getElementById("main-container1");

    container.innerHTML=`<p>Country name: ${data[0].Country}</p>
                           <p> Date: ${data[0].Date}</p>
                           <p>Total Confirmed: ${data[0].Confirmed}</p>
                           <p>Active Cases: ${data[0].Active}</p>
                           <p>Recovered Cases: ${data[0].Recovered}</p>
                           <p>Deaths: ${data[0].Deaths}</p><br>
                           <button onclick="moreDetails()">More Details about the country</button>`;
                          
}

function moreDetails() {
    fetch(`https://restcountries.com/v3.1/name/${text}`)
    .then(res=>res.json() )
    .then(data=>loadDetails(data) );
}

function loadDetails(data){
    var newContainer = document.getElementById("main-container2");
    console.table(data[0]);
    newContainer.innerHTML = `<br><h2>Something about the country</h2><br>
                              <p>Name:${data[0].name.common} </p>              
                              <p>Capital: ${data[0].capital[0]}</p>
                              <p>Population:<b>${data[0].population}</b></p>
                              <p>Region:${data[0].region} </p>
                              <p>The flag<br><br><img src=${data[0].flags.png}></P>
                              <p>Maps:${data[0].maps.googleMaps} </p>`;
}