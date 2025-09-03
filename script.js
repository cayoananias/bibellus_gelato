// script.js

// Atualiza o menu de navegação conforme login
function checkLoginStatus() {
    const user = localStorage.getItem('loggedInUser');
    const nav = document.querySelector('nav');
    if (!nav) return;
    nav.innerHTML = `
      <a href="index.html">Home</a>
      <a href="about.html">Sobre Nós</a>`;/*
    if (user) {
      const span = document.createElement('span');
      span.textContent = `Olá, ${user}`;
      span.style.margin = '0 10px';
      nav.appendChild(span);
      const logout = document.createElement('a');
      logout.href = '#';
      logout.textContent = 'Sair';
      logout.onclick = () => {
        localStorage.removeItem('loggedInUser');
        window.location = 'index.html';
      };
      nav.appendChild(logout);
    } else {
      const login = document.createElement('a');
      login.href = 'login.html';
      login.textContent = 'Login';
      nav.appendChild(login);
    }*/
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
      document.querySelector('.carousel .slides').innerHTML += 
        '<div class=\"slide\" data-name=\"Sorvete Chocolate\" data-prices=\'{\"180\":13,\"286\":18,\"480\":23,\"720\":28}\'><img src=\"images/Sorv. '+sorvete+'.jpg\" alt=\"'+sorvete+'\" /><h3>'+sorvete+'</h3>\</div\>'
    }
  }
  
  // --- LOGIN ---
  function handleLoginForm() {
    const form = document.querySelector('#login-form');
    if (!form) return;
    form.onsubmit = e => {
      e.preventDefault();
      const email = form.email.value.trim();
      const pass = form.password.value.trim();
      if (!email || !pass) {
        alert('Preencha todos os campos');
        return;
      }
      // Em um cenário real, aqui viria validação no servidor
      localStorage.setItem('loggedInUser', email);
      window.location = 'index.html';
    };
  }
  
  // inicialização em todas as páginas
  window.onload = () => {
    checkLoginStatus();
    initCarousel();
    handleLoginForm();
  };
  
  