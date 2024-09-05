const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};
const routes = {
  404: "./html/404.html",
  "/": "./html/home.html",
  "/cart": "./html/cart.html",
  "/article": "./html/article.html",
};
const handleLocation = async () => {
  window.scroll(0,40);
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  let main=document.querySelector("main");
  main.innerHTML = html;
  main.className = path.slice(1);
  const data=await request();
  setBody(path,data)
};
window.onpopstate = handleLocation;
window.route = route;
handleLocation();