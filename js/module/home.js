export let showAll=()=>{
  document.querySelector(".article-scroll").classList.toggle(".showAll")
}
export let setSelectedImage=(idSelected)=>{
  document.querySelectorAll("nav a").forEach(e => {
    e.id == idSelected ? e.classList.add("selected") : e.classList.remove("selected")
  })
}
function setHeaderScroll(data){
  let result="";
  data.forEach(e=>{
    if(e.id<3) {
      result+=/*html*/`<scroll-page id="${e.id}">
        <div class="product-info">
          <h5>Recommendations</h5>
          <h2>${e.name}</h2>
          <div class="price">
            <h3>$${e.price.now}</h4>
            <h5>$${e.price.then}</h5>
          </div>
        </div>
        <div class="img-container">
          <img src="${e.img.src}" alt="${e.img.alt}">
        </div>
      </scroll-page>`
    }
  })
  return result;
}
function setNav(data){
  let result="";
  data.forEach(e=>{
    if(e.id<3) {
      result+=/*html*/`<a id="a${e.id}" href="#${e.id}" ${e.id==0?'class="selected"':0} onClick="setSelectedImage(id)"></a>`
    }
  });
  return result;
}
function setArticleScroll(data){
  let result="";
  data.forEach(e=>{
    if(e.id>2) {
      result+=/*html*/`
      <article id="${e.id}">
        <div class="img-container">
            <img src="${e.img.src}" alt="${e.img.alt}">
        </div>
        <div class="article-info">
            <h5>${e.name}</h5>
            <div class="price">
                <h4>$${e.price.now}</h4>
                <h5>$${e.price.then}</h5>
            </div>
        </div>
      </article>`
    }
  });
  return result;
}
export let setMain=(data)=>{
  return/*html*/`
    <section id="heading">
      <div class="search">
        <input class="icon" type="submit" value="search">
        <input type="search" placeholder="What are you looking for?">
      </div>
      <scroll-container>
        ${setHeaderScroll(data)}
      </scroll-container>
      <nav>
        ${setNav(data)}
      </nav>
    </section>
    <section id="Trending" class="article-list">
      <div class="title">
        <h4>Trending</h4>
        <h6 onClick='showAll()'>Show all</h6>
      </div>
      <div class="article-scroll">
        ${setArticleScroll(data)}
      </div>
    </section>
    <section class="Categories">
      <div class="title">
        <h4>Categories</h4>
        <h6>Show all</h6>
      </div>
      <div class="categories-list">
        <article>
          <div class="img-container">
            <img src="img/icon-m.png" alt="">
          </div>
          <div class="name">Woman<h6>(728 items)</h6></div>
          <div class="icon">chevron_right</div>
        </article>
        <article>
          <div class="img-container">
            <img src="img/icon-w.png" alt="">
          </div>
          <div class="name">Man<h6>(536 items)</h6></div>
          <div class="icon">chevron_right</div>
        </article>
      </div>
    </section>
    <section class="article-list">
      <div class="title">
        <h4>Best Seller</h4>
        <h6>Show all</h6>
      </div>
      <div class="article-scroll"></div>
    </section>`
}