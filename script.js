function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

var nameElement = document.getElementById('name');
var professionElement = document.getElementById('profession');


var originalName = nameElement.textContent;
var originalProfession = {
  text: professionElement.textContent,
  color: window.getComputedStyle(professionElement).color 
};


nameElement.addEventListener('mouseover', function() {
  
  this.textContent = 'Litgrxpher';
  
  this.style.color = 'red';
  
  professionElement.textContent = 'Jack Of All Trades :)';
  
  professionElement.style.color = 'white';
});


nameElement.addEventListener('mouseout', function() {
  
  this.textContent = originalName;
  this.style.color = '';
  
  professionElement.textContent = originalProfession.text;
  professionElement.style.color = originalProfession.color;
});


function toggleDarkMode() {
  const body = document.body;
  const logoImg = document.getElementById('logo-img');

  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
      logoImg.src = './assets/lx_white.png'; // Add your dark mode logo image path
  } else {
      logoImg.src = './assets/lx.png';
  }
}

