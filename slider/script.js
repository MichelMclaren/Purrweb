const slideContainer = document.querySelector(".container");
const slide = document.getElementById("window");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const interval = 3000;

let slides = document.querySelectorAll(".slide");
let index = 1;
let clicks = 1;
let slideId;
let currentDot;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = "first-clone";
lastClone.id = "last-clone";

slide.prepend(lastClone);
slide.append(firstClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

// const startSlide = () => {
//    slideId = setInterval(() => {
//       moveToNextSlide();
//       setActiveDot();
//    }, interval);
// };

const turnOffBtns = () => {
   prevBtn.style.pointerEvents = "none";
   nextBtn.style.pointerEvents = "none";
};

const turnOnBtns = () => {
   prevBtn.style.pointerEvents = "auto";
   nextBtn.style.pointerEvents = "auto";
};

const getSlides = () => document.querySelectorAll(".slide");

const flipSlide = () => {
   console.log("ИНДЕКС!! "+index)
   slide.style.transition = "0.7s ease-out";
   slide.style.transform = `translateX(${-slideWidth * index}px)`;
   turnOffBtns();
};

const setActiveDot = () => {
   console.log(" Индекс - "+index+" "+"Количество слайдов "+(slides.length-1))
   if (index != (slides.length - 1) && index!=0) {
      console.log("Пизда");
      currentDot = document.getElementById(`dot-${index}`);
      currentDot.classList.add("active");
   } else {
      currentDot = document.getElementById(`dot-1`);
      currentDot.classList.add("active");
   }
   if (index==0){
      disableDot()
      currentDot = document.getElementById(`dot-4`);
      currentDot.classList.add("active");
   }
};
const disableDot = () => {
      currentDot = document.getElementsByClassName('active');
      // console.log(currentDot[0].className());
      currentDot[0].classList.remove("active");
};

slide.addEventListener("transitionend", () => {
      turnOnBtns();
   slides = getSlides();
   if (slides[index].id === firstClone.id) {
      slide.style.transition = "none";
      index = 1;
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
   }

   if (slides[index].id === lastClone.id) {
      slide.style.transition = "none";
      index = slides.length - 2;
      slide.style.transform = `translateX(${-slideWidth * index}px)`;
   }
});

const moveToNextSlide = () => {
   console.log("***"+index);
   index++;
   disableDot();
   setActiveDot();
   flipSlide();
   return;
};

const moveToPreviousSlide = () => {
   console.log("Стало "+index);
   index--;
   flipSlide();
   disableDot();
   setActiveDot();
   return;
};

const checkOutsideClick = ({target}) => {
   if (target.id.includes("dot")) {
      index = [...document.getElementsByName("dot-selector")].findIndex(
         (e) => e === target
      )+1;
      // alert("Вы нажали на "+index)
      console.log("****"+index)
      disableDot();
      flipSlide();
      setActiveDot();
   }
};
console.log(index);
document.body.addEventListener("click", checkOutsideClick);

nextBtn.addEventListener("click", moveToNextSlide);
prevBtn.addEventListener("click", moveToPreviousSlide);

