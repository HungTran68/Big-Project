let isShowSeeMore = false;
let popupSeeMore = document.getElementById('right-box-see-more');

const handleClickSeeMore = () => {
  isShowSeeMore = true;
  console.log('1111', isShowSeeMore);

  handleDisplayPopUpSeeMore(); 
};


const handleDisplayPopUpSeeMore = () => {
  if (isShowSeeMore) {
    
    // popupSeeMore.style.display = 'block';
    popupSeeMore.style.right = 0;
    popupSeeMore.style.transition = 'right .5s'; 
    
};}

const handleClickButtonClosePopup = () => {
  isShowSeeMore = false;
  if (!isShowSeeMore) {
    popupSeeMore.style.right = '-360px';
    popupSeeMore.style.transition = 'right .3s';
};}

// come to login page
let loginPage = document.querySelector('.user');

loginPage.addEventListener('click', () => {
  window.location.href = 'loginPage.html';
}
)

// come to Home Page

let homePage = document.querySelector('.logo-kfc');

homePage.addEventListener('click', () => {
  window.location.href = 'index.html';
}
)

// show button bôking

window.onscroll = () => {
  const scrollTop = document.documentElement.scrollTop ?? document.body.scrollTop;
  const lengthScroll = 200;

  if (scrollTop > lengthScroll){
    document.getElementById("btn-booking").classList.add("show");
  }
  else {
    document.getElementById("btn-booking").classList.remove("show");
  }
}