// script.js

// Atualiza o menu de navegação conforme login
function initHeader() {
    const user = localStorage.getItem('loggedInUser');
    const header = document.querySelector('header');
    if (!header) return;
    header.innerHTML = `
      <h1>Bibellus Gelato</h1>
      <nav>
        <a href="index.html">Cardapio</a>
        <a href="about.html">Sobre Nós</a>
        <a href="about.html">Contato</a>
      </nav>`;
  }
  
  // --- CARROSSEL ---
  let slideIndex = 0;
  let sorvetes = ["Chocolate", "Baunilha", "Flocos", "Morango", "Triple"];
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
    };
    document.querySelector('.carousel .next').onclick = () => {
      showSlides();
    };
    setInterval(showSlides, 5000);
    for (let sorvete of sorvetes) {
      document.querySelector('.carousel .slides').innerHTML += `
        <div class=\"slide\" data-name=\"Sorvete `+sorvete+`\" data-prices=\'{\"180\":13,\"286\":18,\"480\":23,\"720\":28}\'>
          <img src=\"images/Sorv. `+sorvete+`.png\" alt=\"`+sorvete+`\" />
          <h3>`+sorvete+`</h3>
        </div>`
    }
  }
  
  // inicialização em todas as páginas
  window.onload = () => {
    initHeader();
    initCarousel();
  };
  
  