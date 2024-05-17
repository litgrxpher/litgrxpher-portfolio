function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function changeTextAndColor() {
    var textElement = document.querySelector('.section__text__p2');
    if (textElement.textContent === "Electronics Engineer") {
        textElement.textContent = "Jack Of All Trades";
        textElement.style.color = "red";
    } else {
        textElement.textContent = "Electronics Engineer";
        textElement.style.color = ""; 
    }
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
