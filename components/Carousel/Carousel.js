/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function Carousel(){

  const parent  = document.querySelector('.carousel-container');

    //carousel
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');
    parent.appendChild(carousel);


    //Left Button
    const leftButton = document.createElement('div');
    leftButton.classList.add('left-button');
    leftButton.textContent = '<';
    carousel.appendChild(leftButton);


    //img
    let imgArr = ['./assets/carousel/mountains.jpeg', './assets/carousel/computer.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg'];
    let img;
    imgArr.forEach( elem => {
      img = document.createElement('img');
      img.src = elem;
      //img.style.display = 'block';
      carousel.appendChild(img);
      //console.log(img);
    })
    

     //Right Button
     const rightButton = document.createElement('div');
     rightButton.classList.add('right-button');
     rightButton.textContent = '>';
     carousel.appendChild(rightButton);


    return carousel;
}

Carousel();

let slideIndex = 1;
showCarousel(slideIndex);

function showCarousel(n) {
  let i;
  var slides = document.querySelectorAll(".carousel > img");

  if (n > slides.length) {
    slideIndex = 1;
  }
  
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach( item => {
    item.style.display = "none";
  })


  slides[slideIndex - 1].style.display = "block";
}

function nextImg(n) {
  showCarousel(slideIndex += n);
}

function currentImg(n) {
  showCarousel(slideIndex = n);
}

const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

leftButton.addEventListener('click', e => {
  nextImg(-1);
})

rightButton.addEventListener('click', e => {
  nextImg(1);
})