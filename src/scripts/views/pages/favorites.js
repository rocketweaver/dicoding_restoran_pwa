import FavoriteRestaurantIdb from "../../data/restaurant-fav-idb";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Favorites = {
  async render() {
    return `
        <div id="favoriteContent" class="content" tabindex="-1">
          <h2 class="content__heading">Restoran Favoritmu</h2>
          <div id="restaurants" class="restaurants">
          </div>
      </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector("#restaurants");
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorites;
