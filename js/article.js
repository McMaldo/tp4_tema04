function setArticleView(){
  return /*html*/`
  <header>
    <div class="icon-container">
      <span class="icon" onclick='setView("home")'>arrow_back</span>
      <span class="icon" onclick='setView("cart")'>shopping_cart</span>
    </div>
    <scroll-page id="page-1">
      <div class="img-container">
        <img src="" alt="">
      </div>
    </scroll-page>
    <scroll-page id="page-2">
      <div class="img-container">
        <img src="" alt="">
      </div>
    </scroll-page>
    <scroll-page id="page-3">
      <div class="img-container">
        <img src="" alt="">
      </div>
    </scroll-page>
  </header>
  <main>
    <nav>
      <a id="a1" href="#page-1" class="selected"></a>
      <a id="a2" href="#page-2"></a>
      <a id="a3" href="#page-3"></a>
    </nav>
    <div class="product-info">
      <h2></h2>
      <div class="price">
      </div>
    </div>
    <section>
      <h5>Colour</h5>
      <div id="color-list">
        <span id="color1"><svg></svg></span>
        <span id="color2" class="selected"><svg></svg></span>
        <span id="color3"><svg></svg></span>
        <span id="color4"><svg></svg></span>
      </div>
    </section>
    <section>
      <h5>Size</h5>
      <div id="size-list">
        <span id="1">S</span>
        <span id="2">M</span>
        <span id="3" class="selected">L</span>
        <span id="4">XL</span>
        <span id="5">XXL</span>
      </div>
    </section>
    <button id="end">Add to cart</button>
    <section>
      <h5>Comments</h5>
    </section>
  </main>`
}
let setArticleData=(articleSelected)=>{
  fetch('js/json/articles.json')
  .then(response => {return response.json()})
  .then(data => {
    data.forEach(e => {
      if(e.id == articleSelected){
        document.querySelectorAll("header .img-container").forEach(x=>
          x.innerHTML=/*html*/`<img src="${e.img.src}" alt="${e.img.alt}">`)
        document.querySelector("main .product-info").innerHTML=/*html*/`
          <h1>${e.name}</h1>
          <div class="price">
            <h2>$${e.price.now}</h2>
            <h4>$${e.price.then}</h4>
          </div>`
      }
    })
  })
  let list=["#color-list span","#size-list span","nav a"].forEach(x=>{
    document.querySelectorAll(`${x}`).forEach(e=>{
      e.setAttribute("onClick",`setSelectedOption("${x}",id)`)
    })
  })
}
let setSelectedOption=(ubic,idSelected)=>{
  document.querySelectorAll(`${ubic}`).forEach(e => {
    e.id == idSelected ? e.classList.add("selected") : e.classList.remove("selected")
  })
}