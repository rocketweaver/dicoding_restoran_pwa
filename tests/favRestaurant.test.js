import FavoriteRestaurantIdb from "../src/scripts/data/restaurant-fav-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Add Restaurant to Favorite", () => {
  const addFavBtnContainer = () => {
    document.body.innerHTML = '<div id="favButtonContainer"></div>';
  };

  beforeEach(() => {
    addFavBtnContainer();
  });

  it("Tambahkan ke Favorit should be shown before it is added to fav", async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({
      id: "rqdv5juczeskfw1e867",
    });

    expect(
      document.querySelector('[aria-label="Add this movie to fav"]')
    ).toBeTruthy();
  });

  it("Hapus dari Favorit should not be shown before it is added to fav", async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({
      id: "rqdv5juczeskfw1e867",
    });

    expect(
      document.querySelector('[aria-label="Remove this movie from fav"]')
    ).toBeFalsy();
  });

  it("It should be able to be added to fav", async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({
      id: "rqdv5juczeskfw1e867",
    });

    document.querySelector("#favButton").dispatchEvent(new Event("click"));

    const restaurant = await FavoriteRestaurantIdb.getRestaurant(
      "rqdv5juczeskfw1e867"
    );
    expect(restaurant).toEqual({ id: "rqdv5juczeskfw1e867" });

    await FavoriteRestaurantIdb.deleteRestaurant("rqdv5juczeskfw1e867");
  });

  it("It shouldn't be able to be added to fav when it is already added", async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({
      id: "rqdv5juczeskfw1e867",
    });

    await FavoriteRestaurantIdb.putRestaurant({ id: "rqdv5juczeskfw1e867" });

    document.querySelector("#favButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([
      { id: "rqdv5juczeskfw1e867" },
    ]);

    await FavoriteRestaurantIdb.deleteRestaurant("rqdv5juczeskfw1e867");
  });

  it("It shouldn't be able to be added to fav when it has no id", async () => {
    await TestFactories.createFavButtonPresenterWithRestaurant({});

    document.querySelector("#favButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
