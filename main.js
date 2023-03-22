document.body.onload = function () {
    nbItems = 5;
    position = 0;
    carouselBox = document.getElementById("carousel_box");
    arrowL = document.getElementById("L");
    arrowR = document.getElementById("R");
    itemCarousel = document.getElementsByClassName("item_carousel");
    boxOverflow = document.getElementById("box_overflow");
    afficherMasquer();

    arrowR.onclick = function () {
        if (position > -nbItems + 1)
            position--;
        carouselBox.style.transform = "translate(" + position * boxOverflow.clientWidth + "px)";
        afficherMasquer();
    }


    arrowL.onclick = function () {
        if (position < 0)
            position++;
        carouselBox.style.transform = "translate(" + position * boxOverflow.clientWidth + "px)";
        afficherMasquer();
    }


    addEventListener("resize", () => {
        carouselBox.style.transition = "none";
        carouselBox.style.transform = "translate(" + position * boxOverflow.clientWidth + "px)";
        carouselBox.style.transition = "all 0.5s ease";
    });



    function afficherMasquer() {
        if (position == -nbItems + 1)
            arrowR.classList.add("disabled")

        else
            arrowR.classList.remove("disabled")

        if (position == 0)
            arrowL.classList.add("disabled")

        else
            arrowL.classList.remove("disabled")
    }
}

// MENU BURGER START 
const menuHamburger = document.querySelector(".menu_burger")
const navLinks = document.querySelector(".nav_links")
const portraitText = document.querySelector(".portrait_text")


menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile_menu');
    portraitText.classList.toggle('no_text');
    portraitText.addEventListener('transitionend', () => {
        portraitText.hidden = false;
    })
})

portraitText.addEventListener('transitionend', () => {
    portraitText.hidden = true;
})


// Fermer le menu burger lors du click  
const navUl = document.getElementById("navTitle")
const navNone = document.querySelector(".nav_links")

navUl.addEventListener('click', () => {
    navNone.classList.remove('mobile_menu');
    portraitText.classList.toggle('no_text');
    // portraitText.addEventListener('transitionend',()=>{
    //     portraitText.hidden = false;
    // })
})

// MENU BURGER END

// BUBBLE POP UP WHEN CLICK ON BUTTON //
const button = document.querySelector('.button');
const popUp = document.querySelector('.bubble');
const background = document.querySelector('.gradient');
const footer = document.querySelector('.footer');

button.addEventListener('click', function () {
    popUp.style.display = 'block';
    // background.style.height = '56rem';
    // footer.style.marginTop = '7rem';
});