import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import DATA from '../DATA.json';
console.log(DATA);

document.querySelector('.menu').addEventListener('click', function () {
  document.querySelector('.nav-list').classList.toggle('nav-list-block');
});

function getRestaurants(data) {
  let restoHTML = '';

  data.restaurants.forEach((resto, i) => {
    restoHTML += `
      <div tabindex="0" class="card">
        <div class="img-container">
          <img tabindex="0" class="card-image" alt="${resto.name}" src="${resto.pictureId}"/>
          <span class="city-card">
            <span>${resto.city}</span>
          </span>
        </div>

        <div tabindex="0" class="card-content">
          <p class="card-content-rating">Rating: ${resto.rating}</p>
          <p class="card-content-title">${resto.name}</p>
          <p class="card-content-description">${resto.description}</p>
        </div>
      </div>
      `;
  });

  document.getElementById('explore-restaurant').innerHTML = restoHTML;
}

getRestaurants(DATA);