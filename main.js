// navbar transform animation

window.onscroll = () => {
    navbarAnimation()
}

const navbarAnimation = () => {
    const x  = document.querySelector("#header")
    if (document.documentElement.scrollTop > 150) {
        setTimeout(() => {
            x.classList.remove("header1")
            x.classList.remove("header3")
            x.classList.add("header2")
        }, 100);
      
    } else if (document.documentElement.scrollTop < 150 && !x.classList.contains("header1")) {
        setTimeout(() => {
            x.classList.remove("header2")
            x.classList.add("header3")
        }, 100);
    }
}


// navbar current section animation

document.addEventListener("DOMContentLoaded", function(){
    
    const section1 = document.querySelector('.section__intro');
    const section2 = document.querySelector('.section__gallery');
    const section3 = document.querySelector('.section__method');
    const section4 = document.querySelector('.contact__container');

    const options = {
        threshold: [0.25]
    };
    
    const observer = new IntersectionObserver(function
     (entries, observer){
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelector('.navbar__list__item__active')?.classList.remove("navbar__list__item__active")
                const name = `.link__${entry.target.classList[0]}`
                document.querySelector(name).classList.add("navbar__list__item__active")
            } else {
                const name = `.link__${entry.target.classList[0]}`
                document.querySelector(name).classList.remove("navbar__list__item__active")
            }
     });
    }, options);
    
    observer.observe(section1);
    observer.observe(section2);
    observer.observe(section3);
    observer.observe(section4);
   
  });


  // google maps


  // Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;


// burger 


const toggleNavbar = () => {
    const x = document.querySelector(".navbar__burger").classList
    const y = document.querySelector(".navbar__list").classList
    if (x.contains("navbar__burger__active")) {
        x.remove("navbar__burger__active")
        y.remove("navbar__list__active")
    } else {
        x.add("navbar__burger__active")
        y.add("navbar__list__active")
    }
}

// carousel


let myInterval

const openModal = (type) => {
    
    const name = `.carousel--${type}`
    document.querySelector(name).classList.replace("carousel--inactive", "carousel--active")
    const x = document.querySelector(".modal, .modal--inactive")
    x.classList.add("modal--active")
    x.classList.remove("modal--inactive")
    myInterval = setInterval(autoDisplay.bind(null, type), 5000)

}


const changeSlide = ({offset, slides}) => {

  const activeSlide = slides.querySelector("[data-active]")
  let newIndex = [...slides.children].indexOf(activeSlide) + offset
  if (newIndex < 0) newIndex = slides.children.length - 1
  if (newIndex >= slides.children.length) newIndex = 0

  slides.children[newIndex].dataset.active = true
  delete activeSlide.dataset.active

}


const autoDisplay = (type) => {

    const name = `.carousel--${type}`
    const slides = document.querySelector(name).querySelector("[data-slides]")
    const offset = 1
    changeSlide({offset, slides})

}


const closeModal = () => {
   
    clearInterval(myInterval)

    const x = document.querySelector(".modal, .modal--active")
    x.classList.remove("modal--active")
    x.classList.remove("modal")
    x.classList.add("modal--inactive")
    document.querySelector(".carousel--active").classList.replace("carousel--active", "carousel--inactive")
}


const buttons = document.querySelectorAll("[data-carousel-button]")
buttons.forEach(button => {
  button.addEventListener("click", () => {

    clearInterval(myInterval)

    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    changeSlide({offset, slides})
  })
})






  
