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

/*const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};
const routes = {
  404: "/pages/404.html",
  "/": "/pages/index.html",
  "/about": "/pages/about.html",
  "/lorem": "/pages/lorem.html",
};
const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.querySelector("main").innerHTML = html;
};
window.onpopstate = handleLocation;
window.route = route;
handleLocation();*/