import DicodingRestaurantApi from "../../data/dicoding-restaurant-api";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
        <div id="homeContent" class="content" tabindex="-1">
          <div id="hero" aria-labelledby="hero-desc">
            <picture>
              <source media="(max-width: 600px)" srcset="./heros/hero-small.jpg">
              <img src="./heros/hero-large.jpg"
                alt="Scenic view of a restaurant" id="hero-img">
            </picture>
            <div id="hero-layer">
              <p id="hero-desc" role="heading" aria-level="1">
                Welcome to <span class="brand-name">CariResto</span> Website
              </p>
            </div>
          </div>
          <h2 class="content__heading">Cari Restoran</h2>
          <div id="restaurants" class="restaurants">
          </div>
      </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await DicodingRestaurantApi.restaurantList();
    const restaurantsContainer = document.querySelector("#restaurants");
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
