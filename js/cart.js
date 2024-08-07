/*let num = document.getElementById("num");
let btnRestar = document.getElementById("restar");
let btnSumar = document.getElementById("sumar");
let addToCart = document.querySelector(".food-addToCart");
let buySection = document.querySelector("footer.flex");
let cant = 1;
num.innerText = cant;
btnRestar.innerText = "block"
btnRestar.style.cursor = "unset"
btnRestar.style.color = "gray";
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
let setCartContent=(data)=>{
  let result="";
  data.forEach(e => {
    result+=`
    <article>
      <div class="img-container">
        <img src="${e.img.src}" alt="">
      </div>
      <div class="article-info">
        <h4>${e.name}</h4>
        <h5>Blue . L</h5>
        <div class="article-price">
          <h4>${e.price.now}</h4>
          <div class="article-unit">
              <button class="icon" id="restar">remove</button>
              <h5 class="center" id="num">1</h5>
              <button class="icon" id="sumar">add</button>
          </div>
        </div>
      </div>
    </article>`
  });
  return result;
}
function setCartView(data){
  let total=0;
  data.forEach(e=>total+=Number(e.price.now))
  return /*html*/`
  <header>
    <span class="icon" onclick='setView("home")'>arrow_back</span>
    <h2>My Cart</h2>
  </header>
  <main>
    <section id="cart">
      ${setCartContent(data)}
    </section>
    <section id="price">
      <div id="total"><h5>Total</h5><h3>$${total}</h3></div>
      <button id="end">Check out</button>
    </section>
  </main>`
}