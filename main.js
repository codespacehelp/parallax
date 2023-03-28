const random = [0.25,0.2,0.4,0.3,0.25,0.2,0.4,0.3];

window.addEventListener("scroll", function () {
  const text = document.querySelector(".scroll");
  const text2 = document.querySelector(".scroll-2");

  let scrolled = window.pageYOffset;
  let rate = scrolled * 0.5;
  let rate2 = scrolled * 0.2;
  text.style.transform = `translate3d(0px, ${rate}px, 0px)`;
  text2.style.transform = `translate3d(0px, ${rate2}px, 0px)`;

    let rate1 = scrolled * 0.1;
    const left = document.querySelector(".left");
    left.style.transform = `translate3d(${rate1}px, 0px, 0px)`;
    const right = document.querySelector(".right");
    right.style.transform = `translate3d(${-rate1}px, 0px, 0px)`;

    for (let i = 1; i < 9; i++) {
      const cat = document.querySelector(`.cat-${i}`);
      let rate = scrolled * random[i-1];
      cat.style.transform = `translate3d(0px, ${rate-20}px, 0px)`;
   
    }


});