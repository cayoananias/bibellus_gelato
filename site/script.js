// script.js

// Atualiza o menu de navegação conforme login
function initHeader() {
  if (!document.querySelector('header')) return;
  document.querySelector('header').innerHTML = `
    <h1>Bibellus Gelato</h1>
    <nav>
      <a href="index.html">Cardapio</a>
      <a href="about.html">Sobre Nós</a>
      <a href="contato.html">Contato</a>
    </nav>`;
}

// --- CARROSSEL ---
let slideIndex = 0;
let sorvetes = ["Pistache", "Baunilia", "Flocos", "Morango", "Morango.Truf", "Morango2","Napolitano", "Charge", "Acai", "Abac.vinho"];
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
      <div class=\"slide\" data-name=\"Sorvete `+sorvete+`\" data-prices=\'{\"180\":13,\"286\":18,\"480\":23,\"720\":28}\'>
        <img src=\"images/Sorv.`+sorvete+`.png\" alt=\"`+sorvete+`\" />
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
  
  