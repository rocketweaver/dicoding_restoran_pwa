import DicodingRestaurantApi from "../../data/dicoding-restaurant-api";
import UrlParser from "../../routes/url-parser";
import FavButtonInitiator from "../../utils/fav-initiator-btn";
import { createRestaurantDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
        <div id="restaurant" class="restaurant content" tabindex="-1"></div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurantApi.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector("#restaurant");
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    FavButtonInitiator.init({
      favButtonContainer: document.querySelector("#favButtonContainer"),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city,
      },
    });
  },
};

export default Detail;
