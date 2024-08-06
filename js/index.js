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
let setBody=(view)=>{
  switch(view){
    case"article":
      return setArticleView()+'<script src="js/article.js"></script>'
    case"cart":
      return setCartView()+'<script src="js/cart.js"></script>'
    default:
      return setHomeView()+'<script src="js/home.js"></script>'
  }
}
let setView=(view,id)=>{
  window.scroll(0,0);
  document.body.className='';
  document.body.classList.add(view);
  document.body.innerHTML=/*html*/`
  ${setBody(view)}
  ${setFooter()}
  <script src="js/index.js"></script>`
  switch(view){
    case"article":
      setArticleData(id)
      break;
    case"home":
      setHomeData()
      break;
  }
}

setView("home");