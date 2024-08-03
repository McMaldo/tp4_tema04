function setCartView(){
  return /*html*/`
  <header>
    <div class="icon-container">
      <span class="icon" onclick='setView("home")'>arrow_back</span>
      <span class="icon" onclick='setView("cart")'>shopping_cart</span>
    </div>
    <div class="search">
      <input class="icon" type="submit" value="search">
      <input type="search" placeholder="What are you looking for?">
    </div>
  </header>
  <main>
    
  </main>`
}