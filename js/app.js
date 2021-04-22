    // navbar
const elment = document.querySelector('.hamburger');
const elment1 = document.querySelector('.nav-list');

elment.addEventListener("click", ()=> {
  elment.classList.toggle('active');
  elment1.classList.toggle('active');
})

        // vanta effect
 VANTA.GLOBE ({
  el: "#vanta-canvas",
  mouseControls: true,
  touchControls: true,
  gyroControls : true,
  minHeight    : 200.00,
  minWeight    : 200.00,
  scale        : 1.00,
  scaleMobile  : 1.00
})

//  data Aos init 

AOS.init();


