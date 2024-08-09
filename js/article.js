let color="white";
let size="l";
let addToCart=async (articleToAdd)=>{
  let article={};
  let data=await request();
  data.forEach(e => e.id==articleToAdd ? article=e : 0);
  article.color=color;
  article.size=size;
  localStorage.setItem("cart",
    localStorage.getItem("cart") ? localStorage.getItem("cart").concat(","+JSON.stringify(article)) : JSON.stringify(article)
  );
  setView("cart");
}
let setSelectedOption=(ubic,idSelected)=>{
  document.querySelectorAll(`${ubic}`).forEach(e => {
    e.id == idSelected ? e.classList.add("selected") : e.classList.remove("selected")
  })
  if(ubic=="#color-list span"){
    color=idSelected;
  }else if(ubic=="#size-list span"){
    size=idSelected;
  }
}
function setArticleView(data,articleSelected){
  let article={};
  data.forEach(e => e.id==articleSelected ? article=e : 0)
  return /*html*/`
  <section id="heading">
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
  </section>
  <section class="product-info">
    <div>
      <h1>${article.name}</h1>
      <div class="price">
        <h2>$${article.price.now}</h2>
        <h4>$${article.price.then}</h4>
      </div>
    </div>
    <div>
      <h5>Colour</h5>
      <div id="color-list">
        <span id="white" onClick="setSelectedOption('#color-list span',id)" class="selected"><svg></svg></span>
        <span id="gray" onClick="setSelectedOption('#color-list span',id)"><svg></svg></span>
        <span id="black" onClick="setSelectedOption('#color-list span',id)"><svg></svg></span>
        <span id="blue" onClick="setSelectedOption('#color-list span',id)"><svg></svg></span>
      </div>
    </div>
    <div>
      <h5>Size</h5>
      <div id="size-list">
        <span id="s" onClick="setSelectedOption('#size-list span',id)">S</span>
        <span id="m" onClick="setSelectedOption('#size-list span',id)">M</span>
        <span id="l" onClick="setSelectedOption('#size-list span',id)" class="selected">L</span>
        <span id="xl" onClick="setSelectedOption('#size-list span',id)">XL</span>
        <span id="xxl" onClick="setSelectedOption('#size-list span',id)">XXL</span>
      </div>
    </div>
    <button id="end" onClick="addToCart(${article.id})">Add to cart</button>
    <!--<h5>Comments</h5>-->
  </section>`
}