var menu=document.getElementById("menu")
var sidenav=document.querySelector(".sidenav")
var close=document.getElementById("close")
var offer__x = document.getElementById("offer__x")
var offerbar = document.querySelector(".offerbar")

offer__x.addEventListener("click",function(){
    offerbar.style.display="none"
})

menu.addEventListener("click",function(){
    sidenav.style.left="0"

})
close.addEventListener("click",function(){
    sidenav.style.left = "-50%"
})




const slideContainer = document.querySelector('.slide-image-container');
const images = document.querySelectorAll('.slide-image-container img');
const leftArrow = document.getElementById('arrow-left');
const rightArrow = document.getElementById('arrow-right');

const totalimages = images.length;
let index = 0;

rightArrow.addEventListener('click', () => {
    console.log("Right arrow is clicked");
    index = (index + 1) % totalimages;
    updateslide();
});

leftArrow.addEventListener('click', () => {
    console.log("Left arrow is clicked");
    index = (index - 1 + totalimages) % totalimages;
    updateslide();
});

function updateslide() {
    slideContainer.style.transform = `translateX(-${index * 100}vw)`;
}

  document.addEventListener('DOMContentLoaded', function () {
    const hearts = document.querySelectorAll('.heart-icon');

    hearts.forEach(heart => {
      heart.addEventListener('click', function () {
        heart.classList.toggle('liked');
        heart.classList.toggle('fa-regular');
        heart.classList.toggle('fa-solid'); // optional: switch to solid heart
      });
    });
  });
