function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const logoImg = document.getElementById('logo-img');
const defaultImageSrc = './assets/lx.png'; 


const hoverImageSrc = './assets/litgrxpher.png'; 


logoImg.addEventListener('mouseover', function() {
    logoImg.src = hoverImageSrc; 
});

logoImg.addEventListener('mouseout', function() {
    logoImg.src = defaultImageSrc; 
});

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
  
  professionElement.style.color = 'black';
});


nameElement.addEventListener('mouseout', function() {
  
  this.textContent = originalName;
  this.style.color = '';
  
  professionElement.textContent = originalProfession.text;
  professionElement.style.color = originalProfession.color;
});



