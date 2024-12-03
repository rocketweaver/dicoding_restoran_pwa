import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (restaurant) => `
  <div id="restaurantHeading" class="restaurant__heading">
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <div id="favButtonContainer" class="fav-button-container"></div>
  </div>
  <img class="restaurant__poster" src="${
    CONFIG.BASE_IMAGE_URL + restaurant.pictureId
  }" alt="${restaurant.name}" crossorigin="anonymous"/>
  <div class="restaurant__info">
    <h3>Detail</h3>
    <h4>Kota</h4>
    <p>${restaurant.city}</p>
    <h4>Alamat</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Deskripsi</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="restaurant__menu">
    <h3>Menu Kita</h3>
    <table>
      <thead>
        <tr>
          <th>Makanan</th>
          <th>Minuman</th>
        </tr>
      </thead>
      <tbody>
        ${restaurant.menus.foods
          .map(
            (food, index) => `
            <tr>
              <td>${food.name}</td>
              <td>${restaurant.menus.drinks[index]?.name || ""}</td>
            </tr>
          `
          )
          .join("")}
        ${restaurant.menus.drinks
          .slice(restaurant.menus.foods.length)
          .map(
            (drink) => `
            <tr>
              <td></td>
              <td>${drink.name}</td>
            </tr>
          `
          )
          .join("")}
      </tbody>
    </table>
  </div>
  <div class="customer-reviews">
    <h3>Review</h3>
    ${restaurant.customerReviews
      .map(
        (review) => `
        <div class="customer-review__card">
          <h4>${review.name}</h4>
          <small>${review.date}</small>
          <p>${review.review}</p>
        </div>
      `
      )
      .join("")}
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}"
           src="${
             restaurant.pictureId
               ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId
               : "https://picsum.photos/id/666/800/450?grayscale"
           }" crossorigin="anonymous">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${
          restaurant.rating
        }</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a class="size-44" href="/#/detail/${restaurant.id}">${
  restaurant.name
}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createAddToFavButtonTemplate = () => `
  <button type="button" class="size-44 fav-btn" id="favButton" aria-label="Add this movie to fav">Tambahkan ke Favorit</button>
`;

const createRemoveFavButtonTemplate = () => `
  <button type="button" class="size-44 fav-btn" id="removeFavButton" aria-label="Remove this movie from fav">Hapus dari Favorit</button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createAddToFavButtonTemplate,
  createRemoveFavButtonTemplate,
};
