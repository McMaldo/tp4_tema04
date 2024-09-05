let color="white";
let size="l";
export let addToCart=(data, articleToAdd)=>{
  let article={};
  data.forEach(e => e.id==articleToAdd ? article=e : 0);
  article.color=color;
  article.size=size;
  localStorage.setItem("cart",
    localStorage.getItem("cart") ? localStorage.getItem("cart").concat(","+JSON.stringify(article)) : JSON.stringify(article)
  );
}
export let setSelectedOption=(ubic,idSelected)=>{
  document.querySelectorAll(`${ubic}`).forEach(e => {
    e.id == idSelected ? e.classList.add("selected") : e.classList.remove("selected")
  })
  if(ubic=="#color-list span"){
    color=idSelected;
  }else if(ubic=="#size-list span"){
    size=idSelected;
  }
}
export function setMain(data,articleSelected){
  let article={};
  data.forEach(e => e.id==articleSelected ? article=e : 0)
  return /*html*/`
  <section id="heading">
    <div class="icon-container">
      <span class="icon" id="goHome">arrow_back</span>
      <span class="icon" id="goCart">shopping_cart</span>
    </div>
    <scroll-container>
      <scroll-page id="page-1">
        <div class="img-container">
          <img src="public/${article.img.src}" alt="${article.img.alt}">
        </div>
      </scroll-page>
    </scroll-container>
    <nav>
      <a id="a1" href="#page-1" class="selected"></a>
      <a id="a2" href="#page-2"></a>
      <a id="a3" href="#page-3"></a>
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
        <span id="white" class="selected"><svg></svg></span>
        <span id="gray"><svg></svg></span>
        <span id="black"><svg></svg></span>
        <span id="blue"><svg></svg></span>
      </div>
    </div>
    <div>
      <h5>Size</h5>
      <div id="size-list">
        <span id="s">S</span>
        <span id="m">M</span>
        <span id="l" class="selected">L</span>
        <span id="xl">XL</span>
        <span id="xxl">XXL</span>
      </div>
    </div>
    <button id="end">Add to cart</button>
    <!--<h5>Comments</h5>-->
  </section>`
}