document.body.onload=function(){
    nbItems=5;
    position=0;
    carouselBox=document.getElementById("carousel_box");
    arrowL=document.getElementById("L");
    arrowR=document.getElementById("R");
    itemCarousel=document.getElementsByClassName("item_carousel");
    afficherMasquer();

arrowR.onclick=function(){
    if(position>-nbItems+1)
        position--;
    carouselBox.style.transform="translate("+position*document.body.clientWidth+"px)";
    afficherMasquer();
}
arrowL.onclick=function(){
    if(position<0)
        position++;
    carouselBox.style.transform="translate("+position*document.body.clientWidth+"px)";
    afficherMasquer();
}
addEventListener("resize", () => {
    carouselBox.style.transition="none";
    carouselBox.style.transform="translate("+position*document.body.clientWidth+"px)";
    carouselBox.style.transition="all 0.5s ease";
});
function afficherMasquer(){
    if(position==-nbItems+1)
        arrowR.style.visibility="hidden";
    else 
        arrowR.style.visibility="visible";
    if(position==0){
        arrowL.style.visibility="hidden";
    }
    else
        arrowL.style.visibility="visible";  
}
}


