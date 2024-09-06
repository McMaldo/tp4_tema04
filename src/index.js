import mainLayout from "./components/layout/main.js";
import incomeLayout from "./components/layout/income.js";

import * as article from "./components/view/article.js";
import * as cart from "./components/view/cart.js";
import * as home from "./components/view/home.js";
import * as profile from "./components/view/profile.js";
import * as signin from "./components/view/signin.js";
import * as signup from "./components/view/signup.js";

async function request() {
  const response = await fetch("public/data/articles.json");
  const data = await response.json();
  return data;
}
let setBody = (view, data, id) => {
  switch(view){
    case"article":
      return article.setMain(data, id);
    case"cart":
      return cart.setMain();
    case"signin":
      return signin.setMain();
    case"signup":
      return signup.setMain();
    case'landing':
      break;
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
    case'signin':
      document.querySelector("main .login__register a").addEventListener("click", () =>  setView("signup"));
      document.querySelector("main svg").addEventListener("click", () =>  setView("home"));
      break;
    case'signup':
      document.querySelector("main .login__register a").addEventListener("click", () =>  setView("signin"));
      document.querySelector("main svg").addEventListener("click", () =>  setView("home"));
      break;
    case'landing':
      break;
    default:
      document.querySelectorAll("scroll-page .img-container").forEach(e => {
        e.addEventListener("click", () => setView("article",e.id))
      })
      document.querySelectorAll("#heading nav a").forEach(e => {
        e.addEventListener("click", () => home.setSelectedImg(e.id))
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
let setLayout = (view) => {
  let root = document.querySelector("#root");
  switch(view){
    case'signin':
    case'signup':
    case'landing':
      if(!root.classList.contains("income")){
        root.innerHTML = incomeLayout();
        root.className = "income";
      }
      break;
    default:
      if(!root.classList.contains("main")){
        root.innerHTML = mainLayout();
        root.querySelector("header .fa-user").addEventListener("click", () => setView("signin"));
        root.querySelector("header svg").addEventListener("click", () => setView("home"));
        root.className = "main";
      }
      window.scroll(0,60);
      break;
  }
}
let setView = async (view, id) => {
  setLayout(view);
  let data = await request();
  let main = document.querySelector("main");
  main.className = (view ? view : "");
  main.innerHTML = setBody(view, data, id);
  setEvents(view, data, id);
}

setView("home");

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