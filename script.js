const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 580);
});

let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.nav-list');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll =()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const sr= ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2300,
    reset:true
});

sr.reveal('.home-text',{delay:150});
sr.reveal('.home-img',{delay:250});
sr.reveal('.container',{delay:250});

sr.reveal('.about-img',{});
sr.reveal('.about-text',{delay:150});

sr.reveal('.middle-text',{});
sr.reveal('.row-btn, .app-content',{delay:150});

sr.reveal('.review-content, .contact',{delay:150});
