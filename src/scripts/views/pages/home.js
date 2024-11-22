import DicodingRestaurantApi from "../../data/dicoding-restaurant-api";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Home = {
  async render() {
    return `
        <div id="homeContent" class="content" tabindex="-1">
          <div id="hero" aria-labelledby="hero-desc">
            <img
              src="./hero-image_1.jpg"
              alt="Scenic view of a restaurant"
              id="hero-img"
            />
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
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
