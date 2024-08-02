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
let setView=(viewName,id)=>{
  document.body.innerHTML=/*html*/`
  ${viewName=="article"?setArticleView():setHomeView()}
  ${setFooter()}
  <script src="js/article.js"></script>
  <script src="js/home.js"></script>
  <script src="js/index.js"></script>`
  switch(viewName){
    case"article":
      setArticleData(id)
      break;
    default:
      setArticleList()
      break;
  }
}

setView("home");