// counter
let counterFunc = (id, startNum, endNum, increament, counterUnit, interval) => {
  let countEl = document.getElementById(id);
  let num = startNum;
  let a = setInterval(() => {
    num += increament;
    countEl.innerText = `${num}${counterUnit}+`;
    num >= endNum ? clearInterval(a) : 0;
  }, interval);
};
// counterFunc = (id, startNum, endNum,increament, counterUnit, interval)

counterFunc("customers", 0, 100, 3, "K", 70);
counterFunc("restorents", 0, 500, 7, "", 30);
counterFunc("chefs", 0, 1750, 15, "", 20);
counterFunc("countries", 0, 29, 1, "", 90);

// mobile menu display of navbaar
let hamburger = document.getElementById("hamburger");
let mobileMenu = document.getElementById("mobileMenu");
// let closebtn = document.getElementById("close");

let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");

hamburger.addEventListener("click", () => {
  bar1.classList.toggle("bar1");
  bar2.classList.toggle("bar2");
  bar3.classList.toggle("bar3");
  hamburger.style.height = "2.5rem";

  if (mobileMenu.style.display == "block") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "block";
  }
});

// off mobile menu after going to bookmarks
let manuEl = document.querySelectorAll(".menu-off");
// let mobileMenu = document.getElementById("mobileMenu");

manuEl.forEach((element) => {
  element.addEventListener("click", () => {
    mobileMenu.style.display = "none";
    bar1.classList.remove("bar1");
    bar2.classList.remove("bar2");
    bar3.classList.remove("bar3");
  });
});

// review slider
let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");

let slide1 = document.getElementById("slide-1");
let slide2 = document.getElementById("slide-2");
let slide3 = document.getElementById("slide-3");

function one() {
  btn3.style.width = "1rem";
  btn2.style.width = "1rem";

  btn3.style.borderRadius = "50%";
  btn3.style.opacity = "50%";

  btn2.style.borderRadius = "50%";
  btn2.style.opacity = "50%";

  slide1.style.marginLeft = "0%";
  btn1.style.opacity = "100%";

  slide2.style.marginLeft = "-300%";
  slide3.style.marginLeft = "-300%";

  btn1.style.width = "1.8rem";
  btn1.style.borderRadius = ".8rem";
  btn1.style.opacity = "100%";
}
function two() {
  btn1.style.width = "1rem";
  btn3.style.width = "1rem";

  btn1.style.borderRadius = "50%";
  btn1.style.opacity = "50%";
  btn3.style.borderRadius = "50%";
  btn3.style.opacity = "50%";

  slide1.style.marginLeft = "-300%";
  slide2.style.marginLeft = "0%";
  btn2.style.opacity = "100%";

  slide3.style.marginLeft = "-300%";

  btn2.style.width = "1.8rem";
  btn2.style.borderRadius = ".8rem";
  btn2.style.opacity = "100%";
}

function three() {
  btn1.style.width = "1rem";
  btn2.style.width = "1rem";

  btn1.style.borderRadius = "50%";
  btn1.style.opacity = "50%";
  btn2.style.borderRadius = "50%";
  btn2.style.opacity = "50%";

  slide1.style.marginLeft = "-300%";
  slide2.style.marginLeft = "-300%";
  slide3.style.marginLeft = "0%";

  btn3.style.width = "1.8rem";
  btn3.style.borderRadius = ".8rem";
  btn3.style.opacity = "100%";
}

let sliderChalao = () => {
  let startInterval = setInterval(() => {
    let II = setTimeout(two, 1);
    let III = setTimeout(three, 5000);
    let I = setTimeout(one, 10000);

    btn1.addEventListener("click", () => {
      one();
      clearTimeout(II);
      clearTimeout(III);
      clearInterval(startInterval);
      setTimeout(sliderChalao, 10);
    });

    btn2.addEventListener("click", () => {
      two();
      clearTimeout(I);
      clearTimeout(III);
      clearInterval(startInterval);
      setTimeout(sliderChalao, 10);
    });

    btn3.addEventListener("click", () => {
      three();
      clearTimeout(I);
      clearTimeout(II);
      clearInterval(startInterval);
      setTimeout(sliderChalao, 10);
    });
  }, 15000);
};

sliderChalao();

// popUpCard js***********************************************

let cardObj = {
  one: {
    heading: "Sp. Vegetable Burger",
    caption: "Time: 12 . 5 Minutes | Serves: 2",
    price: "$10.50",
    priceCut: "$11.70",
    img: "img-4.jpg",
  },
  two: {
    heading: "Rainbow Vegetable Sandwich",
    caption: "Time: 15 . 2 Minutes | Serves: 1",
    price: "$11.70",
    priceCut: "$12.70",
    img: "img-3.jpg",
  },
  three: {
    heading: "Red Cherry Cake",
    caption: "Time: 9 . 6 Minutes | Serves: 2",
    price: "$12.70",
    priceCut: "$13.70",
    img: "img-5.jpg",
  },
  four: {
    heading: "Straberry Cake",
    caption: "Time: 6 . 5 Minutes | Serves: 1",
    price: "$13.70",
    priceCut: "$14.70",
    img: "img-5.jpg",
  },
  five: {
    heading: "Rainbow Vegetable Sandwich",
    caption: "Time: 15 . 2 Minutes | Serves: 1",
    price: "$14.70",
    priceCut: "$15.70",
    img: "img-3.jpg",
  },
  six: {
    heading: "Sp. Vegetable Burger",
    caption: "Time: 12 . 5 Minutes | Serves: 2",
    price: "$15.70",
    priceCut: "$16.70",
    img: "img-4.jpg",
  },
};
let cardButtons = document.querySelectorAll(".card-btn");
// sources
// let card;

// for Page
let cardImgOnPage = document.querySelectorAll(".card-img");
let cardHeadingOnPage = document.querySelectorAll(".cardHeading");
let cardCaptionOnPage = document.querySelectorAll(".caption");
let cardPriceOnPage = document.querySelectorAll(".price");
let cardPriceCutOnPage = document.querySelectorAll(".price-cut");

// 1st
cardImgOnPage[0].setAttribute("src", `${cardObj.one.img}`);
cardHeadingOnPage[0].innerText = cardObj.one.heading;
cardCaptionOnPage[0].innerText = cardObj.one.caption;
cardPriceOnPage[0].innerText = cardObj.one.price;
cardPriceCutOnPage[0].innerText = cardObj.one.priceCut;
// 2nd
cardImgOnPage[1].setAttribute("src", `${cardObj.two.img}`);
cardHeadingOnPage[1].innerText = cardObj.two.heading;
cardCaptionOnPage[1].innerText = cardObj.two.caption;
cardPriceOnPage[1].innerText = cardObj.two.price;
cardPriceCutOnPage[1].innerText = cardObj.two.priceCut;
// 3
cardImgOnPage[2].setAttribute("src", `${cardObj.three.img}`);
cardHeadingOnPage[2].innerText = cardObj.three.heading;
cardCaptionOnPage[2].innerText = cardObj.three.caption;
cardPriceOnPage[2].innerText = cardObj.three.price;
cardPriceCutOnPage[2].innerText = cardObj.three.priceCut;
// 4
cardImgOnPage[3].setAttribute("src", `${cardObj.four.img}`);
cardHeadingOnPage[3].innerText = cardObj.four.heading;
cardCaptionOnPage[3].innerText = cardObj.four.caption;
cardPriceOnPage[3].innerText = cardObj.four.price;
cardPriceCutOnPage[3].innerText = cardObj.four.priceCut;
// 5
cardImgOnPage[4].setAttribute("src", `${cardObj.five.img}`);
cardHeadingOnPage[4].innerText = cardObj.five.heading;
cardCaptionOnPage[4].innerText = cardObj.five.caption;
cardPriceOnPage[4].innerText = cardObj.five.price;
cardPriceCutOnPage[4].innerText = cardObj.five.priceCut;
// 6
cardImgOnPage[5].setAttribute("src", `${cardObj.six.img}`);
cardHeadingOnPage[5].innerText = cardObj.six.heading;
cardCaptionOnPage[5].innerText = cardObj.six.caption;
cardPriceOnPage[5].innerText = cardObj.six.price;
cardPriceCutOnPage[5].innerText = cardObj.six.priceCut;

// for popup********************************
let card;
// let cardPopUp = document.getElementById("cardPopUp");
let cardPopUp = document.querySelector("#cardPopUp");
let cardHeading = document.querySelector(".cardPopUp-heading");
let cardCaption = document.querySelector(".cardPopUp-caption");
let cardPrice = document.querySelector(".cardPopUp-price");
let cardPriceCut = document.querySelector(".cardPopUp-price-cut");

cardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button == cardButtons[0]) {
      cardPopUp.style.backgroundImage = `url(${cardObj.one.img})`;
      cardHeading.innerText = cardObj.one.heading;
      // console.log(cardHeading);
      cardCaption.innerText = cardObj.one.caption;
      cardPrice.innerText = cardObj.one.price;
      cardPriceCut.innerText = cardObj.one.priceCut;
    } else if (button == cardButtons[1]) {
      cardPopUp.style.backgroundImage = `url(${cardObj.two.img})`;
      cardHeading.innerText = cardObj.two.heading;
      cardCaption.innerText = cardObj.two.caption;
      cardPrice.innerText = cardObj.two.price;
      cardPriceCut.innerText = cardObj.two.priceCut;
    } else if (button == cardButtons[2]) {
      // card = cardObj.three;
      // console.log(card);
      cardPopUp.style.backgroundImage = `url(${cardObj.three.img})`;
      cardHeading.innerText = cardObj.three.heading;
      cardCaption.innerText = cardObj.three.caption;
      cardPrice.innerText = cardObj.three.price;
      cardPriceCut.innerText = cardObj.three.priceCut;
    } else if (button == cardButtons[3]) {
      // card = cardObj.four;
      // console.log(card);
      cardPopUp.style.backgroundImage = `url(${cardObj.four.img})`;
      cardHeading.innerText = cardObj.four.heading;
      cardCaption.innerText = cardObj.four.caption;
      cardPrice.innerText = cardObj.four.price;
      cardPriceCut.innerText = cardObj.four.priceCut;
    } else if (button == cardButtons[4]) {
      // card = cardObj.five;
      // console.log(card);
      cardPopUp.style.backgroundImage = `url(${cardObj.five.img})`;
      cardHeading.innerText = cardObj.five.heading;
      cardCaption.innerText = cardObj.five.caption;
      cardPrice.innerText = cardObj.five.price;
      cardPriceCut.innerText = cardObj.five.priceCut;
    } else if (button == cardButtons[5]) {
      // card = cardObj.six;
      // console.log(card);
      cardPopUp.style.backgroundImage = `url(${cardObj.six.img})`;
      cardHeading.innerText = cardObj.six.heading;
      cardCaption.innerText = cardObj.six.caption;
      cardPrice.innerText = cardObj.six.price;
      cardPriceCut.innerText = cardObj.six.priceCut;
    }

    cardPopUp.style.display = "block";
  });
});

// hiding the popup
let popUpCloseBtn = document.getElementById("popUpClose-btn");
popUpCloseBtn.addEventListener("click", () => {
  cardPopUp.style.display = "none";
});

// heart feature

let heart = document.querySelectorAll(".heart");
let imgs = document.querySelectorAll(".img");
for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("dblclick", () => {
    heart[i].classList.add("heart-display-block");
    setTimeout(() => {
      heart[i].classList.remove("heart-display-block");
    }, 1000);
  });
}

// qty counter

let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let qtyNum = document.getElementById("qtyNum");

let num = 0;
plusBtn.addEventListener("click", () => {
  num++;
  qtyNum.innerText = num;
});
minusBtn.addEventListener("click", () => {
  num == 0 ? num == 1 : num--;
  qtyNum.innerText = num;
});
