const assert = require("assert");
const { addRestaurantToFav } = require("./helpers/favRestaurantHelpers");

Feature("Add Restaurant to Favs");

Scenario("Add restaurant to fav", async ({ I }) => {
  const firstRestaurantTitle = await addRestaurantToFav({ I });

  I.amOnPage("/#/favorite");
  I.seeElement(".restaurant-item");

  const addedToFavRestaurantTitle = await I.grabTextFrom(
    ".restaurant-item__title"
  );

  assert.strictEqual(firstRestaurantTitle, addedToFavRestaurantTitle);
});
