document.body.onload = function () {
    const nbItems = 5;
    let position = 0;
    const carouselBox = document.getElementById("carousel_box");
    const arrowL = document.getElementById("L");
    const arrowR = document.getElementById("R");
    const boxOverflow = document.getElementById("box_overflow");
    const point1 = document.getElementById("p1");
    const point2 = document.getElementById("p2");
    const point3 = document.getElementById("p3");
    const point4 = document.getElementById("p4");
    const point5 = document.getElementById("p5");
    mainImage = document.querySelector(".portrait");
    mainText = document.querySelector(".portrait_text");
    afficherMasquer();

    arrowR.onclick = function () {
        if (position > -nbItems + 1)
            position--;
        carouselBox.style.transform = "translate(" + position * boxOverflow.clientWidth + "px)";
        afficherMasquer();
    };


    arrowL.onclick = function () {
        if (position < 0)
            position++;
        carouselBox.style.transform = "translate(" + position * boxOverflow.clientWidth + "px)";
        afficherMasquer();
    };


    addEventListener("resize", () => {
        carouselBox.style.transition = "none";
        carouselBox.style.transform = "translate(" + position * boxOverflow.clientWidth + "px)";
        carouselBox.style.transition = "all 0.5s ease";
    });



    function afficherMasquer() {
        if (position == -nbItems + 1)
            arrowR.classList.add("disabled");

        else
            arrowR.classList.remove("disabled");

        if (position == 0) {
            if (window.matchMedia("(min-width: 430px)").matches) {
                mainImage.style.backgroundImage = "url(/img/Hermione.jpg)";
                mainText.style.opacity = 0.8;
            }
            arrowL.classList.add("disabled");
            point1.classList.add("point_current");
        }
        else {
            arrowL.classList.remove("disabled");
            point1.classList.remove("point_current");
        }
        if (position == -1) {
            point2.classList.add("point_current");
            if (window.matchMedia("(min-width: 430px)").matches) {
                mainImage.style.backgroundImage = "url(/img/hermione_house.jpeg)";
                mainText.style.opacity = 0;
            }
        }
        else
            point2.classList.remove("point_current");
        if (position == -2) {
            point3.classList.add("point_current");
            if (window.matchMedia("(min-width: 430px)").matches) {
                mainImage.style.backgroundImage = "url(/img/magic_wand.jpeg)";
                mainText.style.opacity = 0;
            }
        }
        else
            point3.classList.remove("point_current");
        if (position == -3) {
            point4.classList.add("point_current");
            if (window.matchMedia("(min-width: 430px)").matches) {
                mainImage.style.backgroundImage = "url(/img/otter_patronus.jpeg)";
                mainText.style.opacity = 0;
            }
        }
        else
            point4.classList.remove("point_current");
        if (position == -4) {
            point5.classList.add("point_current");
            if (window.matchMedia("(min-width: 430px)").matches) {
                mainImage.style.backgroundImage = "url(/img/hermione_cat.jpeg)";
                mainText.style.opacity = 0;
            }
        }
        else
            point5.classList.remove("point_current");
    }
};


// MENU BURGER START
const menuHamburger = document.querySelector(".menu_burger");
const navLinks = document.querySelector(".nav_links");
const portraitText = document.querySelector(".portrait_text");
const barreHorizontale = document.querySelector(".menu");

menuHamburger.addEventListener("click", () => {
    portraitText.style.display = "block";
    navLinks.classList.toggle("mobile_menu");
    portraitText.classList.toggle("no_text");
    menuHamburger.classList.toggle("disable");
    barreHorizontale.classList.toggle("toBlack");
    portraitText.addEventListener("transitionend", () => {
        if (portraitText.classList.contains("no_text")) {
            portraitText.style.display = "none";
        }
    });
});

// Fermer le menu burger lors du click sur un titres

const navUl = document.getElementById("navTitle");
const navNone = document.querySelector(".nav_links");

navUl.addEventListener("click", () => {
    navNone.classList.remove("mobile_menu");
    portraitText.classList.toggle("no_text");
    menuHamburger.classList.toggle("disable");
    barreHorizontale.classList.toggle("toBlack");
    portraitText.style.display = "block";
});

// MENU BURGER END

// MENU BURGER END

// BUBBLE POPS WHEN YOU CLICK ON SEND //
const button = document.querySelector('.button');
const popUp = document.querySelector('.bubble');
const hedwigeMobile = document.querySelector('.hedwige-mobile');
const hedwigeDesktop = document.querySelector('.hedwige-desktop');
const close = document.querySelector('.close');

// PERSONNALISATION OF THE POPUP //
function senderName() {
    let imput = document.getElementById('firstname').value;
    document.getElementById('name').innerHTML = imput;
}

button.addEventListener('click', function () {
    popUp.style.display = 'block';
    hedwigeMobile.style.marginTop = '-5.5rem';
    hedwigeDesktop.style.marginTop = '-78px';//-77px depending on the screen size :(
    senderName();
});

close.addEventListener('click', function () {
    popUp.style.display = 'none';
    // hedwigeMobile.style.marginTop = '-5.5rem';
    hedwigeDesktop.style.marginTop = '5.5rem';
});


// Pensine Text Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.target.className === "hidden-left" || entry.target.className === "hidden-left animation-left") {
            if (entry.isIntersecting) {
                entry.target.classList.add('animation-left');
            } else {
                entry.target.classList.remove('animation-left');
            }
        } else if (entry.target.className === "hidden-right" || entry.target.className === "hidden-right animation-right") {
            if (entry.isIntersecting) {
                entry.target.classList.add('animation-right');
            } else {
                entry.target.classList.remove('animation-right');
            }
        }
    });
});

const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
hiddenElementsLeft.forEach((el) => observer.observe(el));

const hiddenElementsRight = document.querySelectorAll('.hidden-right');
hiddenElementsRight.forEach((el) => observer.observe(el));

/* SIDE NAV BAR START */

const ligne01 = document.getElementById("ligne1");
const ligne02 = document.getElementById("ligne2");
const ligne03 = document.getElementById("ligne3");

window.addEventListener("scroll", event => {
    let { pageYOffset } = window;
    let scroll = this.scrollY;

    if (pageYOffset <= 1000) {
        ligne01.style.opacity = 1;
        ligne02.style.opacity = 0.5;
        ligne03.style.opacity = 0.5;
    }

    if (pageYOffset <= 700 && pageYOffset >= 200) {
        if (window.matchMedia("(min-width: 430px)").matches) {
            mainImage.style.backgroundImage = "url(/img/Hermione.jpg)";
            mainText.style.opacity = 0.8;
        }
    }


    else if (pageYOffset >= 1000 && pageYOffset <= 1700) {
        ligne01.style.opacity = 0.5;
        ligne02.style.opacity = 1;
        ligne03.style.opacity = 0.5;
        if (window.matchMedia("(min-width: 430px)").matches) {
            mainImage.style.backgroundImage = "url(/img/pensieve_dekstop.jpg)";
            mainText.style.opacity = 0;
        }
    }
    else if (window.pageYOffset >= 1700) {
        ligne02.style.opacity = 0.5;
        ligne03.style.opacity = 1;
        if (window.matchMedia("(min-width: 430px)").matches) {
            mainImage.style.backgroundImage = "url(/img/hogwarts_letters.jpeg)";
            mainText.style.opacity = 0;
        }
    }
});
/* SIDE NAV BAR END */
