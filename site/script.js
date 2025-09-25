// script.js

// Atualiza o menu de navegação conforme login
function initHeader() {
  if (!document.querySelector('header')) return;
  let currentlink = window.location.href
  headertext = `
    <h1>Bibellus Gelato</h1>
    <nav>
  `
  headertext += (!currentlink.includes("index.html") && currentlink.includes("about.html") || currentlink.includes("contato.html"))) ? `<a href="index.html">Cardapio</a>` : `<b>Cardapio</b>`
  headertext += (!currentlink.includes("about.html")) ? `<a href="about.html">Sobre Nós</a>` : `<b>Sobre Nós</b>`
  headertext += (!currentlink.includes("contato.html")) ? `<a href="contato.html">Contato</a>` : `<b>Contato</b>`
  
  headertext += `
  </nav>`

  document.querySelector('header').innerHTML = headertext
  /*document.querySelector('header').innerHTML = `
    <h1>Bibellus Gelato</h1>
    <nav>
      <a href="index.html">Cardapio</a>
      <a href="about.html">Sobre Nós</a>
      <a href="contato.html">Contato</a>
    </nav>`;*/
}

// --- CARROSSEL ---
let slideIndex = 0;
let sorvetes = ["Pistache", "Baunilia", "Flocos", "Morango", "Morango.Truf", "Napolitano", "Charge", "Acai", "Abac.vinho"];
function showSlides() {
  const slides = document.querySelectorAll('.carousel .slide');
  if (!slides.length) return;
  slideIndex = (slideIndex + 1) % slides.length;
  const offset = -slideIndex * 100;
  document.querySelector('.carousel .slides').style.transform = `translateX(${offset}%)`;
}
function initCarousel() {
  document.querySelector('.carousel .prev').onclick = () => {
    slideIndex = (slideIndex - 1 + document.querySelectorAll('.carousel .slide').length) % document.querySelectorAll('.carousel .slide').length;
    document.querySelector('.carousel .slides').style.transform = `translateX(${-slideIndex*100}%)`;
    
    clearInterval(showSlidesInt);
    showSlidesInt = setInterval(showSlides, 5000);
  };
  document.querySelector('.carousel .next').onclick = () => {
    showSlides();

    clearInterval(showSlidesInt);
    showSlidesInt = setInterval(showSlides, 5000);
  };
  showSlidesInt = setInterval(showSlides, 5000);
  for (let sorvete of sorvetes) {
    document.querySelector('.carousel .slides').innerHTML += `
      <div class="slide">
        <img src="https://cayoananias.github.io/bibellus_gelato/images/Sorv.`+sorvete+`.png" alt=`+sorvete+`" style="height:400px"><img/>
        <h3>`+sorvete+`</h3>
      </div>`
  }
}

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
  
  
