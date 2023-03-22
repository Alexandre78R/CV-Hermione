document.body.onload=function(){
    nbItems=5;
    position=0;
    carouselBox=document.getElementById("carousel_box");
    arrowL=document.getElementById("L");
    arrowR=document.getElementById("R");
    itemCarousel=document.getElementsByClassName("item_carousel");
    boxOverflow=document.getElementById("box_overflow");
    point1=document.getElementById("p1");
    point2=document.getElementById("p2");
    point3=document.getElementById("p3");
    point4=document.getElementById("p4");
    point5=document.getElementById("p5");
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
     
    if(position==0){
        arrowL.classList.add("disabled")
        point1.classList.add("point_current")
    }
        else
            {arrowL.classList.remove("disabled")
            point1.classList.remove("point_current")}
    if(position==-1)
        point2.classList.add("point_current")
        else
            point2.classList.remove("point_current")
    if(position==-2)
        point3.classList.add("point_current")
        else
            point3.classList.remove("point_current")
    if(position==-3)
        point4.classList.add("point_current")
        else
            point4.classList.remove("point_current")
    if(position==-4)
        point5.classList.add("point_current")
        else    
            point5.classList.remove("point_current")
}

}


// MENU BURGER START
const menuHamburger = document.querySelector(".menu_burger");
const navLinks = document.querySelector(".nav_links");
const portraitText = document.querySelector(".portrait_text");
const barreHorizontale = document.querySelector(".menu")

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


