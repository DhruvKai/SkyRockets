'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
const renderCountry = function (data) {
  const html = `<article class="country">
      <img class="country__img" src="${data.flag}" />
      <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${+data.population / 1000000}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
      </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
///////////////////////////////////////
//calling API with old method
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     //this here is request
//     console.log(data);
//     const html = `<article class="country">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${+data.population / 1000000}</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//       </div>
//       </article>`;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('India');
// getCountryData('UK');
// getCountryData('russia');
// getCountryData('german');
// getCountryData('aus');

//Nested callbacks one call back using other callback to function

// const getCountryAndData = function (country) {
//   //AJAX country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     //this here is request
//     //render country 1
//     console.log(data);
//     renderCountry(data);
//     //get neibour
//     const [neibour] = data.borders;

//     if (!neibour) return;
//     //ajax neighbour call
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neibour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2);
//     });
//   });
// };

// getCountryAndData('usa');
//this is callback hell. It is fixed in ES6 by promises

//////////////////////////////////////////////////////
//promises - container or placeholder for an asycnrous or fututre value. A response comming from AJAX value is a future value.
// const request = fetch('https://restcountries.com/v2/alpha/INR');
// console.log(request);

//consuming promise

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => response.json()) //fetches the data and gives JSON file
    .then(data => {
      renderCountry(data[0]); // JSON is itself a promise here to we render the country like this
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      //country2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json()) //handle the data
    .then(data => renderCountry(data, 'neighbour')) //render the data
    .catch(err => {
      //error handling
      console.log(`${err}`);
      renderError(`Something went wrong ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});

//THis is flat chain of promises
