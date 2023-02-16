const hamburgerButton = document.querySelector('.nav-toggler')
const navigation = document.querySelector('nav')


hamburgerButton.addEventListener("click", toggleNav)

function toggleNav(){
    hamburgerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}

const progressbar = document.querySelector('.scrollbar')

let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () =>{
    let progress = (document.documentElement.scrollTop / totalHeight) * 100;
    progressbar.style.height = `${progress}%`;
    progressbar.style.opacity = `${progress}%`;
})

const progressBarClick = document.querySelector('.clickScrollbar')

progressBarClick.addEventListener('click', (e) => {

    let newPageScroll = e.clientY / progressBarClick.offsetHeight * totalHeight;
    window.scrollTo({
        top : newPageScroll,
        behavior: 'smooth'
    })

})

const items = document.querySelectorAll('.slider-card p')
const nbSlide = items.length
const suivant = document.querySelector('.right')
const precedent = document.querySelector('.left')
let count = 0

function slideSuivante() {
    items[count].classList.remove('active')

    if(count < nbSlide - 1){
        count++;
    }else {
        count = 0
    }

    items[count].classList.add('active')   

}
suivant.addEventListener('click', slideSuivante)

function sliderPrecedente() {
    items[count].classList.remove('active')
    if(count > 0){
        count--
    }else{
        count = nbSlide - 1
    }

    items[count].classList.add('active')
}
precedent.addEventListener('click', sliderPrecedente)
