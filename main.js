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
                mainImage.classList.remove('imgHermioneHouse');
                mainImage.classList.add('imgHermione');
                mainText.style.opacity = 1;
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
                mainImage.classList.remove('imgHermione');
                mainImage.classList.remove('imgMagicWand');
                mainImage.classList.add('imgHermioneHouse');
                mainText.style.opacity = 0;
            }
        }
        else
            point2.classList.remove("point_current");
        if (position == -2) {
            point3.classList.add("point_current");
            if (window.matchMedia("(min-width: 430px)").matches) {
                mainImage.classList.remove('imgHermioneHouse');
                mainImage.classList.remove('imgOtterPatronus');
                mainImage.classList.add('imgMagicWand');
                mainText.style.opacity = 0;
            }
        }
        else
            point3.classList.remove("point_current");
        if (position == -3) {
            point4.classList.add("point_current");
            if (window.matchMedia("(min-width: 430px)").matches) {
                mainImage.classList.remove('imgMagicWand');
                mainImage.classList.remove('imgCat');
                mainImage.classList.add('imgOtterPatronus');
                mainText.style.opacity = 0;
            }
        }
        else
            point4.classList.remove("point_current");
        if (position == -4) {
            point5.classList.add("point_current");
            if (window.matchMedia("(min-width: 430px)").matches) {
                mainImage.classList.remove('imgOtterPatronus');
                mainImage.classList.add('imgCat');
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
const button = document.querySelector('.button');
const popUp = document.querySelector('.bubble');
const close = document.querySelector('.close');


// BUBBLE POPS WHEN YOU CLICK ON SEND + ERROR MESSAGES WHEN EMPTY FIELDS //
button.addEventListener('click', function (e) {
    let userName = document.getElementById('firstname').value;
    let userEmail = document.getElementById('email').value;
    let userMessage = document.getElementById('message').value;
    let messageErrorUser = document.getElementById('error-message-firstname');
    let messageErrorEmail = document.getElementById('error-message-email');
    let messageErrorText = document.getElementById('error-message-text');

    if (userName === '') {
        messageErrorUser.style.opacity = '1';
    } else {
        messageErrorUser.style.opacity = '0'
    }
    if (userEmail === '') {
        messageErrorEmail.style.opacity = '1';
    } else {
        messageErrorEmail.style.opacity = '0';
    }
    if (userMessage === '') {
        messageErrorText.style.opacity = '1';
    } else {
        messageErrorText.style.opacity = '0';
    }

    if (userName !== '' && userEmail !== '' && userMessage !== '') {
        popUp.style.opacity = '1';
        popUp.style.transition = 'all 0.5s ease';
        document.getElementById('name').innerHTML = userName;
    };
});

// BUBBLE ClOSES WHEN YOU CLICK ON THE CROSS//
close.addEventListener('click', function () {
    popUp.style.opacity = '0';
})

const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
const hiddenElementsRight = document.querySelectorAll('.hidden-right');

// Pensine Text Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (window.matchMedia("(min-width: 430px)").matches) {
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
        }
    });
});

hiddenElementsLeft.forEach((el) => observer.observe(el));
hiddenElementsRight.forEach((el) => observer.observe(el));

/* SIDE NAV BAR START */
const pensineElement = document.querySelectorAll('.pensine');
const labelTextmessageFromElement = document.querySelectorAll('#message');
const hedwigeFromElement = document.querySelectorAll('.hedwige');
const aboutElement = document.querySelectorAll('.about_me');
const blurEleement = document.querySelectorAll('.blur');
const skillElement = document.querySelectorAll('.skills');

const ligne01 = document.getElementById("ligne1");
const ligne02 = document.getElementById("ligne2");
const ligne03 = document.getElementById("ligne3");

const observerImg = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (window.matchMedia("(min-width: 430px)").matches) {
            if (entry.target.className === "about_me") {
                if (entry.isIntersecting) {
                    ligne01.style.opacity = 1;
                    ligne02.style.opacity = 0.5;
                    ligne03.style.opacity = 0.5;
                    if (position !== 0) {
                        mainText.style.opacity = 0;
                    } else {
                        mainText.style.opacity = 1;
                    }
                    if (mainImage.className === 'portrait imgPensine imgHermione') {
                        mainImage.classList.remove('imgPensine');
                        ligne01.style.opacity = 1;
                        ligne02.style.opacity = 0.5;
                        ligne03.style.opacity = 0.5;
                        mainText.style.opacity = 1;
                    }
                    mainImage.classList.add('imgHermione');
                    if (mainImage.className === "portrait imgPensine imgHermione"){
                        mainImage.classList.remove('imgPensine');
                    } 
                } else {
                    mainImage.classList.remove('imgHermione');
                }
            } else if (entry.target.className === "pensine") {
                if (entry.isIntersecting) {
                    ligne01.style.opacity = 0.5;
                    ligne02.style.opacity = 1;
                    ligne03.style.opacity = 0.5;
                    mainText.style.opacity = 0;
                    mainImage.classList.add('imgPensine');
                } else { 
                    mainImage.classList.remove('imgPensine');
                    if (mainImage.className === 'portrait') {
                        mainText.style.opacity = 1;
                    }
                }
            } else if (entry.target.className === "blur") {
                if (entry.isIntersecting) {
                    ligne01.style.opacity = 0.5;
                    ligne02.style.opacity = 1;
                    ligne03.style.opacity = 0.5;
                    mainText.style.opacity = 0;
                    if (mainImage.className === 'portrait imgContact imgPensine') {
                        mainImage.classList.remove('imgContact');
                    }
                    mainImage.classList.add('imgPensine');
                } else {
                    mainImage.classList.remove('imgPensine');
                    if (mainImage.className === 'portrait') {
                        mainText.style.opacity = 1;
                        ligne01.style.opacity = 1;
                        ligne02.style.opacity = 0.5;
                        ligne03.style.opacity = 0.5;
                    }
                }
            }
            if (window.matchMedia("(max-height: 1250px)").matches) {
                if (entry.target.id === "message") {
                    if (entry.isIntersecting) {
                        ligne01.style.opacity = 0.5;
                        ligne02.style.opacity = 0.5;
                        ligne03.style.opacity = 1;
                        mainText.style.opacity = 0;
                        mainImage.classList.add('imgContact');
                    } else {
                        ligne01.style.opacity = 0.5;
                        ligne02.style.opacity = 1;
                        ligne03.style.opacity = 0.5;
                        mainText.style.opacity = 0;
                        mainImage.classList.remove('imgContact');
                    }
                }
            } else {
                if (entry.target.className === "hedwige") {
                    if (entry.isIntersecting) {
                        ligne01.style.opacity = 0.5;
                        ligne02.style.opacity = 0.5;
                        ligne03.style.opacity = 1;
                        mainText.style.opacity = 0;
                        mainImage.classList.add('imgContact');
                    } else {
                        ligne01.style.opacity = 0.5;
                        ligne02.style.opacity = 1;
                        ligne03.style.opacity = 0.5;
                        mainText.style.opacity = 0;
                        mainImage.classList.remove('imgContact');
                    }
                }
            }
        }
    });
});

aboutElement.forEach((el) => observerImg.observe(el));
skillElement.forEach((el) => observerImg.observe(el));
pensineElement.forEach((el) => observerImg.observe(el));
blurEleement.forEach((el) => observerImg.observe(el));
labelTextmessageFromElement.forEach((el) => observerImg.observe(el));
hedwigeFromElement.forEach((el) => observerImg.observe(el));
/* SIDE NAV BAR END */