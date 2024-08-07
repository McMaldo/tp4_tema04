async function request() {
  const response = await fetch("js/json/articles.json");
  const data = await response.json();
  return data;
}
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
let setBody=(view,data,id)=>{
  switch(view){
    case"article":
      return setArticleView(data,id);
    case"cart":
      return setCartView(data);
    default:
      return setHomeView(data);
  }
}
let setView=async (view,id)=>{
  window.scroll(0,0);
  let data=await request();
  document.body.className='';
  document.body.classList.add(view);
  document.body.innerHTML=/*html*/`
  ${setBody(view,data,id)}
  ${setFooter()}
  <script src="js/article.js"></script>
  <script src="js/cart.js"></script>
  <script src="js/home.js"></script>
  <script src="js/index.js"></script>`
}
setView("home");