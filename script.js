// script.js

// Atualiza o menu de navegação conforme login
function checkLoginStatus() {
    const user = localStorage.getItem('loggedInUser');
    const nav = document.querySelector('nav');
    if (!nav) return;
    nav.innerHTML = `
      <a href="index.html">Home</a>
      <a href="about.html">Sobre Nós</a>
      <a href="cart.html">Carrinho</a>`;
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
    }
  }
  
  // --- CARRINHO ---
  function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }
  
  function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  // Adiciona item ao carrinho
  function addToCart(name, size, price) {
    const cart = getCart();
    cart.push({ name, size, price });
    saveCart(cart);
    alert(`Adicionado: ${name} (${size})`);
  }
  
  // Exibe itens na página cart.html
  function displayCart() {
    const cart = getCart();
    const tbody = document.querySelector('#cart-body');
    if (!tbody) return;
  
    if (cart.length === 0) {
      tbody.innerHTML = '<tr><td colspan="4">Carrinho vazio</td></tr>';
      return;
    }
  
    tbody.innerHTML = '';
    cart.forEach((item, i) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${item.name}</td>
        <td>${item.size}</td>
        <td>R$ ${item.price.toFixed(2)}</td>
        <td><button onclick="removeItem(${i})">Remover</button></td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  function removeItem(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    displayCart();
  }
  
  // --- CARROSSEL ---
  let slideIndex = 0;
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
    setInterval(showSlides, 7000);
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
    displayCart();
  };
  
  