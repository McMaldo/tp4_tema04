import * as article from "./module/article.js";
import * as cart from "./module/cart.js";
import * as home from "./module/home.js";

async function request() {
  const response = await fetch("js/json/articles.json");
  const data = await response.json();
  return data;
}
let setBody = (view, data, id) => {
  switch(view){
    case"article":
      return article.setMain(data, id);
    case"cart":
      return cart.setMain();
    default:
      return home.setMain(data);
  }
}
let setEvents = (view, data, id) => {
  switch(view){
    case"article":
      document.querySelector("#goHome").addEventListener("click", () => setView("home"))
      document.querySelector("#goCart").addEventListener("click", () => setView("cart"))
      let ubicList = ["nav a","#color-list span","#size-list span"]
      ubicList.forEach(ubic=>{
        document.querySelectorAll(ubic).forEach(e => {
          e.addEventListener("click", () => article.setSelectedOption(ubic,e.id))
        })
      })
      document.querySelector("#end").addEventListener("click", () => {
        article.addToCart(data,id);
        setView("cart");
      });
      break;
    case"cart":
      document.querySelector("#heading .icon").addEventListener("click", () =>  setView("home"));
      document.querySelectorAll("#cart article").forEach(e => {
        e.querySelector(".img-container").addEventListener("click", () => setView("article",(e.id).substr(1)));
        e.querySelector(".restar").addEventListener("click", () => cart.articleCount("-",e.id));
        e.querySelector(".sumar").addEventListener("click", () => cart.articleCount("+",e.id));
      })
      document.querySelector("#end").addEventListener("click", () => {
        cart.checkOut();
        setView("cart");
      });
      break;
    default:
      document.querySelectorAll("scroll-page").forEach(e => {
        e.addEventListener("click", () => setView("article",e.id))
      })
      document.querySelectorAll(".article-list article").forEach(e => {
        e.addEventListener("click", () => setView("article",e.id))
      })
      document.querySelectorAll(".showAll").forEach(e => {
        e.addEventListener("click", () => home.showAll())
      })
      break;
  }
}
let setView = async (view, id) => {
  window.scroll(0,50);
  let data = await request();
  let main = document.querySelector("main");
  main.className = (view ? view : "");
  main.innerHTML = setBody(view, data, id);
  setEvents(view, data, id);
}

setView();

/*document.addEventListener("click", e => {
  if(e.target.matches(".search")){
    if(e.key === "Escape")e.target.value =""
    document.querySelectorAll("article").forEach(a=>{
      a.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) ?
      a.classList.remove("filter") :
      a.classList.add("filter")
    })
  }
})*/