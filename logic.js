const navBar = document.querySelector('.navigation');
const closeBtn = document.querySelector('.menu-close-btn');
const openBtn = document.querySelector('.menu-open-btn');

const navigations = [closeBtn, openBtn];

navigations.forEach((elem) =>{

    elem.addEventListener('click', ()=>{
        navBar.classList.toggle('navActive');
        document.body.classList.toggle("bodyActive");
    })
})



