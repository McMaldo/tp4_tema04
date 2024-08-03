function setArticleView(){
  return /*html*/`
  <header>
    <div class="icon-container">
      <span class="icon" onclick='setView("home")'>arrow_back</span>
      <span class="icon" onclick='setView("cart")'>shopping_cart</span>
    </div>
    <div class="img-container">
      <img src="img/img-00.jpg" alt="">
    </div>
    <div class="slider">
      <span></span>
      <span class="selected"></span>
      <span></span>
    </div>
  </header>
  <main>
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
    <input type="submit" value="Add to cart">
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
        document.querySelector("header .img-container").innerHTML=/*html*/`
          <img src="${e.img.src}" alt="${e.img.alt}">`
        document.querySelector("main .product-info").innerHTML=/*html*/`
          <h1>${e.name}</h1>
          <div class="price">
            <h2>$${e.price.now}</h2>
            <h4>$${e.price.then}</h4>
          </div>`
      }
    })
  })
  let list=["color","size"].forEach(x=>{
    document.querySelectorAll(`#${x}-list span`).forEach(e=>{
      e.setAttribute("onClick",`setSelectedOption("#${x}-list",id)`)
    })
  })
}
let setSelectedOption=(group,idSelected)=>{
  document.querySelector(group).querySelectorAll("span").forEach(e => {
    e.id == idSelected ? e.classList.add("selected") : e.classList.remove("selected")
  })
}