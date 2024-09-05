export let articleCount=(type,id)=>{
  let n = document.querySelector(`#${id} .num`);
  let total = Number(n.textContent);
  total += (type=="-" & total>1 ? -1 : 0);
  total += (type=="+" & total<12 ? 1 : 0);
  n.innerText = total;
  setTotal();
}
export let setTotal=()=>{
  let total = 0;
  document.querySelectorAll("article").forEach(e => {
    let a = Number(e.querySelector(".article-price .price").innerText.substr(1))
    let b = Number(e.querySelector(".article-unit .num").innerText)
    total += a * b;
  })
  document.querySelector("#total h3").innerText="$"+total.toFixed(2);
}
export let checkOut=()=>{
  localStorage.removeItem("cart");
}
let setCartContent=()=>{
  let result = "";
  if(localStorage.getItem("cart")!==null){
    let data = JSON.parse("["+localStorage.getItem("cart")+"]");
    data.forEach(e => {
      result += /*html*/`
      <article id="a${e.id}">
        <div class="img-container">
          <img src="public/${e.img.src}" alt="">
        </div>
        <div class="article-info">
          <h4>${e.name}</h4>
          <div class="article-options"><h5>${e.color}</h5><h5 class="size">${e.size}</h5></div>
          <div class="article-price">
            <h4 class="price">$${e.price.now}</h4>
            <div class="article-unit">
              <button class="icon restar">remove</button>
              <h5 class="num">1</h5>
              <button class="icon sumar">add</button>
            </div>
          </div>
        </div>
      </article>`
    });
  }
  return result;
}
export function setMain(){
  let total=0;
  if(localStorage.getItem("cart")!==null){
    JSON.parse("["+localStorage.getItem("cart")+"]").forEach(e=>total+=Number(e.price.now))
  }
  return /*html*/`
  <section id="heading">
    <span class="icon">arrow_back</span>
    <h2>My Cart</h2>
  </section>
  <section id="cart" class="${localStorage.getItem("cart")===null ? "empty" : ""}">
    ${setCartContent()}
  </section>
  <section id="price">
    <div id="total"><h5>Total</h5><h3>$${total.toFixed(2)}</h3></div>
    <button id="end">Check out</button>
  </section>`
}