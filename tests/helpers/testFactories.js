import FavButtonInitiator from "../../src/scripts/utils/fav-initiator-btn";

const createFavButtonPresenterWithRestaurant = async (restaurant) => {
  await FavButtonInitiator.init({
    favButtonContainer: document.querySelector("#favButtonContainer"),
    restaurant,
  });
};

export { createFavButtonPresenterWithRestaurant };
