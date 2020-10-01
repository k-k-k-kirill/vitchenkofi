import FrontPage from "./views/frontPage.vue";
import Portfolio from "./views/Portfolio.vue";
import RequestOffer from "./views/RequestOffer.vue";
import About from "./views/About.vue";

const routes = [
  { path: "", component: FrontPage, meta: { title: "Kirill Vitchenko" } },
  { path: "/portfolio", component: Portfolio, meta: { title: "Portfolio" } },
  { path: "/request-offer", component: RequestOffer, meta: { title: "Request Offer" } },
  { path: "/about", component: About, meta: { title: "About" } },
];

export default routes;
