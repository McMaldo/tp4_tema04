function setHomeView(){
  return /*html*/`
  <header>
    <div class="search">
      <input class="icon" type="submit" value="search">
      <input type="search" placeholder="What are you looking for?">
    </div>
    <div class="product-info">
      <h5>Recommendations</h5>
      <h2>Women Blue Denim</h2>
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
    <section id="Trending" class="article-list">
      <div class="title">
        <h4>Trending</h4>
        <h6 onClick='showAll()'>Show all</h6>
      </div>
      <div class="article-scroll"></div>
    </section>
    <section class="Categories">
      <div class="title">
        <h4>Categories</h4>
        <h6>Show all</h6>
      </div>
      <div class="categories-list">
        <article>
          <div class="icon">woman</div>
          <div class="name">Woman<h6>(728 items)</h6></div>
          <div class="icon">chevron_right</div>
        </article>
        <article>
          <div class="icon">man</div>
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
      <div class="article-scroll">
        <article>
          <div class="img-container">
            <img src="img/img-01.jpg" alt="">
          </div>
          <div class="article-info">
            <h5>Buzo Capo</h5>
            <div class="price">
              <h4>$35.99</h4>
              <h5>$39.99</h5>
            </div>
          </div>
        </article>
        <article>
          <div class="img-container">
            <img src="img/img-02.jpg" alt="">
          </div>
          <div class="article-info">
            <h5>Russ Shirt</h5>
            <div class="price">
              <h4>$19.99</h4>
              <h5>$25.99</h5>
            </div>
          </div>
        </article>
        <article>
          <div class="img-container">
            <img src="img/img-03.jpg" alt="">
          </div>
          <div class="article-info">
            <h5>Greek Shirt</h5>
            <div class="price">
              <h4>$18.99</h4>
              <h5>$24.99</h5>
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>`
}
function setArticleList(){
  fetch('js/json/articles.json')
  .then(response => {return response.json()})
  .then(data => {
    data.forEach(e=>{
      document.querySelector("#Trending .article-scroll").innerHTML +=/*html*/`
      <article id="${e.id}" onClick='setView("article",id)'>
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
    });
  })
}
let showAll=()=>{
  document.querySelector(".article-scroll").classList.toggle(".showAll")
}