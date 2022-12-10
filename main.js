var navMenu = document.querySelector('.nav__menu'),
    navToggle = document.querySelector('.nav__toggle')
    navClose = document.querySelector('.nav__close')

navToggle.onclick = function(){
    navMenu.classList.add('show-menu');
}
navClose.onclick = function(){
    navMenu.classList.remove('show-menu')
}
// ======Remove menu mobile=========
var navLink = document.querySelectorAll('.nav__link');

var linkAction = () =>{
    var navMenu = document.querySelector('.nav__menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction));
// =============== SCROLL ===================
var header = document.querySelector('.header');
window.addEventListener('scroll',function(){
    if(this.window.pageYOffset>50){
        header.classList.add('bg-header')
    }
    else{
        header.classList.remove('bg-header')
    }
})
/* ===========SCROLL UP============= */
var nuttop = document.querySelector('.scrollup');
window.addEventListener('scroll',function(){
    if(this.window.pageYOffset>50){
        nuttop.classList.add('show-scroll')
    }
    else{
        nuttop.classList.remove('show-scroll')
    }
})

var sections = document.querySelectorAll('section[id]');
var scrollActive = () => {
    var scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId+']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)
// ===================== Dark theme ==================
var themeButton = document.getElementById('theme-button');
var darkTheme = 'dark-theme'
var iconTheme = 'bxs-sun'

var selectedTheme = localStorage.getItem('selected-theme');
var selectecIcon = localStorage.getItem('selected-icon');

var getCurrentTheme = ()=> document.body.classList.contains(darkTheme)? 'dark': 'light';
var getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? 'bx bx-moon':'bxs-sun';

if (selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add': 'remove'](darkTheme)
    themeButton.classList[selectecIcon=== 'bx bx-moon'?'add':'remove'](iconTheme)
}
themeButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
     reset:true,
})

sr.reveal(`.home__img, .newsletter__container, footer__logo, .footer__description, .footer__content, .footer__info`)

sr.reveal(`.home__data`, {origin:'bottom'});
sr.reveal(`.about__data, .recently__data`, {origin:'left'});
sr.reveal(`.about__img, .recently__img`,{origin:'right'});
sr.reveal(`.popular__card`,{interval:100})
