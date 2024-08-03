let setFooter=()=>{
  return /*html*/`
  <footer>
    <h3>contact us</h3>
    <div>
      <div class="row">
        <span class="icon">mail</span>
        <h5>McMaldo</h5>
      </div>
      <div class="row">
        <span class="icon">mail</span>
        <h5>maldonado.ignacio.pablo@gmail.com</h5>
      </div>
    </div>
  </footer>`
}
let selectBody=(view)=>{
  switch(view){
    case"article":
      return setArticleView()
    case"cart":
      return setCartView()
    default:
      return setHomeView()
  }
}
let setView=(view,id)=>{
  document.body.className=''
  document.body.classList.add(view)
  document.body.innerHTML=/*html*/`
  ${selectBody(view)}
  ${setFooter()}
  <script src="js/cart.js"></script>
  <script src="js/article.js"></script>
  <script src="js/home.js"></script>
  <script src="js/index.js"></script>`
  switch(view){
    case"article":
      setArticleData(id)
      break;
    default:
      setArticleList()
      break;
  }
}

setView("home");