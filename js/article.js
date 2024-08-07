let color=0;
let size=0;
let addToCart=()=>{
  
}
let setSelectedOption=(ubic,idSelected)=>{
  document.querySelectorAll(`${ubic}`).forEach(e => {
    e.id == idSelected ? e.classList.add("selected") : e.classList.remove("selected")
  })
}
function setArticleView(data,articleSelected){
  let article={};
  data.forEach(e => {
    if(e.id == articleSelected){
      article=e;
    }
  });
  return /*html*/`
  <header>
    <div class="icon-container">
      <span class="icon" onclick='setView("home")'>arrow_back</span>
      <span class="icon" onclick='setView("cart")'>shopping_cart</span>
    </div>
    <scroll-container>
      <scroll-page id="page-1">
        <div class="img-container">
          <img src="${article.img.src}" alt="${article.img.alt}">
        </div>
      </scroll-page>
    </scroll-container>
    <nav>
      <a id="a1" href="#page-1" onClick="setSelectedOption('nav a',id)" class="selected"></a>
      <a id="a2" href="#page-2" onClick="setSelectedOption('nav a',id)"></a>
      <a id="a3" href="#page-3" onClick="setSelectedOption('nav a',id)"></a>
    </nav>
  </header>
  <main>
    <div class="product-info">
      <h1>${article.name}</h1>
      <div class="price">
        <h2>$${article.price.now}</h2>
        <h4>$${article.price.then}</h4>
      </div>
    </div>
    <section>
      <h5>Colour</h5>
      <div id="color-list">
        <span id="color1" onClick="setSelectedOption('#color-list span',id)" class="selected"><svg></svg></span>
        <span id="color2" onClick="setSelectedOption('#color-list span',id)"><svg></svg></span>
        <span id="color3" onClick="setSelectedOption('#color-list span',id)"><svg></svg></span>
        <span id="color4" onClick="setSelectedOption('#color-list span',id)"><svg></svg></span>
      </div>
    </section>
    <section>
      <h5>Size</h5>
      <div id="size-list">
        <span id="1" onClick="setSelectedOption('#size-list span',id)">S</span>
        <span id="2" onClick="setSelectedOption('#size-list span',id)">M</span>
        <span id="3" onClick="setSelectedOption('#size-list span',id)" class="selected">L</span>
        <span id="4" onClick="setSelectedOption('#size-list span',id)">XL</span>
        <span id="5" onClick="setSelectedOption('#size-list span',id)">XXL</span>
      </div>
    </section>
    <button id="end">Add to cart</button>
    <section>
      <h5>Comments</h5>
    </section>
  </main>`
}