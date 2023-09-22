function navSlide(){
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')
    
    burger.addEventListener('click',() => {
        //Toggle Navnya
        nav.classList.toggle('nav-active')

        //Animasi List Links
        navLinks.forEach((link, index) => {
            // console.log(index)
            if(link.style.animation){
                link.style.animation = ''
            }else{
                //Delay animation
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
                // console.log(index / 7 + 0.3);
            }
        })

        //Animasi burger
        burger.classList.toggle('toggle')
    })
    
}

navSlide();

const button = document.querySelectorAll("[data-carousel-button")

button.forEach(button =>{
    button.addEventListener("click", () =>{
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel").querySelector("[data-slides")
    
        const activeSlide = slides.querySelector("[data-active")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if(newIndex < 0) newIndex = slides.children.length - 1
        if(newIndex >= slides.children.length) newIndex = 0
        
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
        
})
