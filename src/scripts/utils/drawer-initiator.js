const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener("click", (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle("open");
    drawer.setAttribute("aria-expanded", "false");
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle("close");
    drawer.setAttribute("aria-expanded", "open");
  },
};

export default DrawerInitiator;
