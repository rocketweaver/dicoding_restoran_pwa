import FavoriteRestaurantIdb from '../data/restaurant-fav-idb';
import { createAddToFavButtonTemplate, createRemoveFavButtonTemplate } from '../views/templates/template-creator';

const FavButtonInitiator = {
  async init({ favButtonContainer, restaurant }) {
    this._favButtonContainer = favButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderRemoveFav();
    } else {
      this._renderAddToFav();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderAddToFav() {
    this._favButtonContainer.innerHTML = createAddToFavButtonTemplate();

    const favButton = document.querySelector('#favButton');
    favButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderRemoveFav() {
    this._favButtonContainer.innerHTML = createRemoveFavButtonTemplate();

    const favButton = document.querySelector('#removeFavButton');
    favButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavButtonInitiator;