// script.js

// Atualiza o menu de navegação conforme login
function initHeader() {
  if (!document.querySelector('header')) return;
  let currentlink = window.location.href
  if (currentlink.includes("cardapio.html") || currentlink.includes("about.html") || currentlink.includes("contato.html")) {
    headertext = `
      <div onclick="location.assign('index.html')" style="cursor: pointer;display:flex;justify-content:center"><img src="https://cayoananias.github.io/bibellus_gelato/images/logo.png" style="height:36px"></img>
      <h1 style="display: inline">Bibellus Gelato</h1></div>
      <nav>
    `
    headertext += (!currentlink.includes("cardapio.html")) ? `<a href="cardapio.html">Cardápio</a>` : `<b>Cardápio</b>`
    headertext += (!currentlink.includes("about.html")) ? `<a href="about.html">Sobre Nós</a>` : `<b>Sobre Nós</b>`
    headertext += (!currentlink.includes("contato.html")) ? `<a href="contato.html">Contato</a>` : `<b>Contato</b>`
    
    headertext += `
    </nav>`
  }
  else {
    headertext = `<h1 style="font-size: 40px">Bibellus Gelato</h1>`
  } 
  document.querySelector('header').innerHTML = headertext
}

/*
Aqui jaz o Carousel
2025-2025
Nunca te esqueceremos
*/

function initFooter() {
  if (!document.querySelector('footer')) return;
  document.querySelector('footer').innerHTML = `
  <p>Razão Social: Bibellus varejo de sorvetes ltda • CNPJ: 02.291.863/0001-90</p>
  <p>Contato-nos: <a href="mailto:comunicacoes@bibellusgelato.com.br">comunicacoes@bibellusgelato.com.br</a></p>`
}

// inicialização em todas as páginas
window.onload = () => {
  initHeader();
  initFooter();
};
  
  
