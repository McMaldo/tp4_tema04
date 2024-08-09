/*let num = document.querySelectorAll(".article-unit .num");
let btnRestar = document.querySelectorAll(".article-unit .restar");
let btnSumar = document.querySelectorAll(".article-unit .sumar");
let addToCart = document.querySelector("#end");
let cant = 1;
num.forEach(e=>e.innerText = cant);
btnRestar.forEach(e=>{
  e.innerText = "block";
  e.style.cursor = "unset";
  e.style.color = "gray";
});

btnRestar.addEventListener("click",()=>{
  if(cant > 1){
    cant = cant - 1;
    num.innerText = cant;
  }else{
    alert('el minimo de unidades para llevar es 1');
  }
  if(cant == 1){
    btnRestar.innerText = "block"
    btnRestar.style.cursor = "unset"
    btnRestar.style.color = "gray"
  }else{
    btnSumar.innerText = "add"
    btnSumar.style.cursor = "pointer"
    btnSumar.style.color = "white"
    btnRestar.innerText = "remove"
    btnRestar.style.cursor = "pointer"
    btnRestar.style.color = "white"
  }
  uploadTotal();
});
btnSumar.addEventListener("click",()=>{
  if(cant < 12){
    cant = cant + 1;
    num.innerText = cant;
  }else{
    alert('el maximo de unidades para llevar es 12');
  }
  if(cant == 12){
    btnSumar.innerText = "block"
    btnRestar.style.cursor = "unset"
    btnSumar.style.color = "gray"
  }else{
    btnSumar.innerText = "add"
    btnSumar.style.cursor = "pointer"
    btnSumar.style.color = "white"
    btnRestar.innerText = "remove"
    btnRestar.style.cursor = "pointer"
    btnRestar.style.color = "white"
  }
  uploadTotal();
});
function uploadTotal(){
  if(document.querySelector(".puntoResto")){
    let span = document.querySelector(".puntoResto");
    span.innerText = `total: ${priceUnit * cant}`;
  }
}*/

let articleCount=(type,id)=>{
  let n=document.querySelector(`#${id} .num`);
  n.innerText=Number(n.innerText)+(type=="+" ? 1 : (n.innerText>1 ? -1 : 0));
  setTotal();
}
let setTotal=()=>{
  let total=document.querySelector("#total h3");
  total.innerText=0;
  document.querySelectorAll(".article-price h4").forEach(e=>{
    total.innerText=Number(total.innerText+e.innerText);
  })
  total.innerText="$"+total.innerText;
}
let checkOut=()=>{
  localStorage.removeItem("cart");
  setView("cart");
}
let setCartContent=()=>{
  let result="";
  if(localStorage.getItem("cart")!==null){
    let data=JSON.parse("["+localStorage.getItem("cart")+"]");
    data.forEach(e => {
      result+=/*html*/`
      <article id="a${e.id}">
        <div class="img-container" onClick='setView("article",${e.id})'>
          <img src="${e.img.src}" alt="">
        </div>
        <div class="article-info">
          <h4>${e.name}</h4>
          <div class="article-options"><h5>${e.color}</h5><h5 class="size">${e.size}</h5></div>
          <div class="article-price">
            <h4>${e.price.now}</h4>
            <div class="article-unit">
              <button class="icon restar" onclick='articleCount("-","a${e.id}")'>remove</button>
              <h5 class="num">1</h5>
              <button class="icon sumar" onclick='articleCount("+","a${e.id}")'>add</button>
            </div>
          </div>
        </div>
      </article>`
    });
  }
  return result;
}
function setCartView(){
  let total=0;
  if(localStorage.getItem("cart")!==null){
    JSON.parse("["+localStorage.getItem("cart")+"]").forEach(e=>total+=Number(e.price.now))
  }
  return /*html*/`
  <section id="heading">
    <span class="icon" onclick='setView("home")'>arrow_back</span>
    <h2>My Cart</h2>
  </section>
  <section id="cart" class="${localStorage.getItem("cart")===null ? "empty" : ""}">
    ${setCartContent()}
  </section>
  <section id="price">
    <div id="total"><h5>Total</h5><h3>$${total.toFixed(2)}</h3></div>
    <button id="end" onclick="checkOut()">Check out</button>
  </section>`
}