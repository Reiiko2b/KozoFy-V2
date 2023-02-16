
const stars = document.querySelectorAll(".rate-star i")
const txt = document.querySelector('.rate-star span')

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

stars.forEach((star, index1) => {
    star.addEventListener('click', () => {
        stars.forEach((star, index2) => {
            if(index1 >= index2){
                star.classList.add("active")
                const val = index1
                txt.innerHTML = val + 1
            }else{
                star.classList.remove("active")
            }
        })
    })
})