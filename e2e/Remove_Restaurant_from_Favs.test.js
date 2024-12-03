const {
  addRestaurantToFav,
  removeRestaurantFromFav,
} = require("./helpers/favRestaurantHelpers");

Feature("Remove Restaurant from Favs");

Scenario("Remove restaurant from fav", async ({ I }) => {
  await addRestaurantToFav({ I });

  await removeRestaurantFromFav({ I });

  I.amOnPage("/#/favorite");
  I.dontSeeElement(".restaurant-item");
});
