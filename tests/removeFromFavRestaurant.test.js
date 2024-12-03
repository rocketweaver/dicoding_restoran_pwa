/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import FavButtonInitiator from "../src/scripts/utils/fav-initiator-btn";
import FavoriteRestaurantIdb from "../src/scripts/data/restaurant-fav-idb";

describe("Remove Restaurant from Favorite", () => {
  const addFavBtnContainer = () => {
    document.body.innerHTML = '<div id="favButtonContainer"></div>';
  };

  beforeEach(async () => {
    addFavBtnContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: "rqdv5juczeskfw1e867" });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant("rqdv5juczeskfw1e867");
  });

  it("Hapus dari Favorit should be shown before it is removed from fav", async () => {
    await FavButtonInitiator.init({
      favButtonContainer: document.querySelector("#favButtonContainer"),
      restaurant: {
        id: "rqdv5juczeskfw1e867",
      },
    });

    expect(
      document.querySelector('[aria-label="Remove this movie from fav"]')
    ).toBeTruthy();
  });

  it("Tambahkan ke Favorit should not be shown before it is removed from fav", async () => {
    await FavButtonInitiator.init({
      favButtonContainer: document.querySelector("#favButtonContainer"),
      restaurant: {
        id: "rqdv5juczeskfw1e867",
      },
    });

    expect(
      document.querySelector('[aria-label="Add this movie to fav"]')
    ).toBeFalsy();
  });

  it("It should be able to be removed from fav", async () => {
    await FavButtonInitiator.init({
      favButtonContainer: document.querySelector("#favButtonContainer"),
      restaurant: {
        id: "rqdv5juczeskfw1e867",
      },
    });

    document
      .querySelector("#removeFavButton")
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it("It shouldn't be able to be removed from fav when it is already removed", async () => {
    await FavButtonInitiator.init({
      favButtonContainer: document.querySelector("#favButtonContainer"),
      restaurant: { id: "rqdv5juczeskfw1e867" },
    });

    await FavoriteRestaurantIdb.deleteRestaurant("rqdv5juczeskfw1e867");

    document.querySelector("#removeFavButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
