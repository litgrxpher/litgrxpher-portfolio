function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function changeTextAndColor() {
    var textElement = document.querySelector('.section__text__p2');
    if (textElement.textContent === "Electronics Engineer") {
        textElement.textContent = "Creative Design / Editor";
        textElement.style.color = "red";
    } else {
        textElement.textContent = "Electronics Engineer";
        textElement.style.color = ""; 
    }
}
