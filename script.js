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

  if (document.body.classList.contains('dark-mode')) {
      professionElement.style.color = 'white';
  } else {
      professionElement.style.color = 'black';
  }
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

// Define the IntersectionObserver with a callback function
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.1 // Adjust this threshold value as needed
});

// Select all section elements to be observed
const sections = document.querySelectorAll('section');

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});

