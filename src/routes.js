import FrontPage from "./views/FrontPage.vue";
import Portfolio from "./views/Portfolio.vue";
import RequestOffer from "./views/RequestOffer.vue";
import About from "./views/About.vue";

const routes = [
  { path: "", component: FrontPage, name: 'FrontPage' },
  { path: "/portfolio", component: Portfolio, name: 'Portfolio' },
  { path: "/request-offer", component: RequestOffer },
  { path: "/about", component: About },
];

export default routes;
