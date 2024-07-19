// show sub-menu - MOBILE

let columns = document.querySelectorAll('.column');
let body = document.querySelector('body');



columns.forEach(col => {
  col.addEventListener('click', () => {
  
    col.classList.toggle('active');
  });
});

let isShowSeeMore = false;
let popupSeeMore = document.getElementById('right-box-see-more');

const handleClickSeeMore = () => {
  isShowSeeMore = true;
  console.log('1111', isShowSeeMore);


  handleDisplayPopUpSeeMore(); 
};

let headerTop = document.querySelector('.header-top');
let wrapBox = document.querySelector('.wrap-box');

const handleDisplayPopUpSeeMore = () => {
  if (isShowSeeMore) {
    
   body.style.overflow = 'hidden';
    // popupSeeMore.style.overflowY = 'auto';
    popupSeeMore.style.right = 0;
    popupSeeMore.style.transition = 'right .5s'; 
    
    
};}



const handleClickButtonClosePopup = () => {
  isShowSeeMore = false;
  if (!isShowSeeMore) {
    
    body.style.overflowX = 'hidden';
    body.style.overflowY = 'auto';
    popupSeeMore.style.right = '-100%';
    popupSeeMore.style.transition = 'right .3s';
    headerTop.style.position = 'sticky'
    popupSeeMore.style.position = 'fixed';
    
};}



// come to login page
let loginPage = document.querySelector('.user');

loginPage.addEventListener('click', () => {
  window.location.href = 'loginPage.html';
}
)

let btnBookHeader = document.getElementById("btn-booking");
console.log(btnBookHeader);

btnBookHeader.addEventListener('click',() => {
  window.location.href = 'loginPage.html';
})

let btnBooking = document.querySelector(".button-order-booking");

btnBooking.addEventListener('click',() => {
  window.location.href = 'loginPage.html';
})

window.onscroll = () => {
  const scrollTop = document.documentElement.scrollTop ?? document.body.scrollTop;
  const lengthScroll = 400;

  if (scrollTop > lengthScroll){
    document.getElementById("btn-booking").classList.add("show");
  }
  else {
    document.getElementById("btn-booking").classList.remove("show");
  }
}

// close leftpopup mobile - mobile
let isShowPopupMobile = false;
let popupMobile = document.querySelector('.left-popup-mobile');

const hanldeOpenPopupMobile = () => {
  isShowPopupMobile = true;
  if (isShowPopupMobile){
    popupMobile.style.left = 0;
    popupMobile.style.transition = 'left 0.5s'
    body.style.overflowY = 'hidden';
    // popupMobile.style.display = 'none';
  }
  
}

const handleClickCloseLeftPopup = () => {
  isShowPopupMobile = false;
  if (!isShowPopupMobile){
    popupMobile.style.left = '-100%';
    popupMobile.style.transition = 'left 0.3s'
    body.style.overflowY = 'auto';
  }
}

let currentService = true;

let secondService = false;

let firstSevice = document.getElementById("#create");
let specialService = document.getElementById("#special");


const handleClickFirstService = () => {
  firstSevice.classList.add("current-service"); 
  specialService.classList.remove("current-service");

  }
  


const handleClickSecondService = () => {
  secondService = false;
  specialService.classList.add("current-service"); // Thêm class current-service
  firstSevice.classList.remove("current-service");
 
  }


  const handleBookParty = () => {
    window.location.href = 'loginPage.html';
  } 
