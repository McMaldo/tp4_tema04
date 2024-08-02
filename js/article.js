function setArticleView(){
  return /*html*/`
  <header class="article">
    <span class="icon" onclick='setView("home")'>arrow_back_ios</span>
    <div class="product-info">
      <h2></h2>
      <div class="price">
        <h3>$30.00</h3>
        <h5>$36.00</h5>
      </div>
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
    
  </main>`
}
let setArticleData=(articleSelected)=>{
  fetch('js/json/articles.json')
  .then(response => {return response.json()})
  .then(data => {
    data.map(e => {e.id == articleSelected ? document.querySelector("header").innerHTML=(/*html*/`
      <span class="icon" onclick='setView("home")'>arrow_back_ios</span>
      <div class="product-info">
        <h2>${e.name}</h2>
        <div class="price">
          <h3>$${e.price.now}</h3>
          <h5>$${e.price.then}</h5>
        </div>
      </div>
      <div class="img-container">
        <img src="${e.img.src}" alt="${e.img.alt}">
      </div>
      <div class="slider">
        <span></span>
        <span class="selected"></span>
        <span></span>
      </div>`) : 0});
  })
}