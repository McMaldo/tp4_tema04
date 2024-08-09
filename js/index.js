/*const route = (event) => {
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
handleLocation();*/

async function request() {
  const response = await fetch("js/json/articles.json");
  const data = await response.json();
  return data;
}
let setBody=(view,data,id)=>{
  switch(view){
    case"article":
      return setArticleView(data,id);
    case"cart":
      return setCartView();
    default:
      return setHomeView(data);
  }
}
let setView=async (view,id)=>{
  window.scroll(0,40);
  let data=await request();
  let main=document.querySelector("main");
  main.className=view;
  main.innerHTML=setBody(view,data,id)
}
setView();