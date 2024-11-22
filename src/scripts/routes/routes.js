import Home from '../views/pages/home';
import Detail from '../views/pages/detail';
import Favorites from '../views/pages/favorites';

const routes = {
  '/': Home, // default page
  '/detail/:id': Detail,
  '/favorite': Favorites,
};

export default routes;