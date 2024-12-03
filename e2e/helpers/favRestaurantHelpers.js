async function addRestaurantToFav({ I }) {
  I.amOnPage("/#/");
  I.seeElement(".restaurant-item__title a");

  const firstRestaurant = locate(".restaurant-item__title a").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement("#favButton");
  I.click("#favButton");

  return firstRestaurantTitle;
}

async function removeRestaurantFromFav({ I }) {
  I.amOnPage("/#/favorite");
  I.seeElement(".restaurant-item__title a");

  const firstRestaurant = locate(".restaurant-item__title a").first();
  I.click(firstRestaurant);

  I.seeElement("#removeFavButton");
  I.click("#removeFavButton");
}

module.exports = { addRestaurantToFav, removeRestaurantFromFav };
