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

// call api



const url = 'http://localhost:3000/menu_items';
const rowJs = document.querySelector(".rowJs");
const dealsGroup = document.querySelector(".deal-group-items");
const singleGroup = document.querySelector(".single-combo-items");
const newsGroup = document.querySelector(".new-items-group"); 
const teamGroup = document.querySelector(".team-combo-items");
const checkenGroup = document.querySelector(".chicken-combo-items") ;

let coppyArray;

async function fetchAndShowMenuItems() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const menuItems = await response.json();
    // showMenuItems(menuItems);
    // showMenuItem(menuItems)
    
    filterComboItems(menuItems);
    coppyArray = menuItems;
  } catch (error) {
    console.error('Fetch error:', error);
    rowJs.innerHTML = '<p>Chưa tải được thực đơn.</p>'; 
  }
}

console.log('--------------- day',coppyArray);
// split array with combo

const filterComboItems = (arr) => {
  let dealItems = arr.filter((value) => value.group === "deal");
  console.log('aaaa',dealItems);

  let singleCombo = arr.filter((value) => value.group === 1);
  console.log(singleCombo);

  let newItemsCombo = arr.filter((value) => value.group === "news_items");
  console.log('newItemsCombo:',newItemsCombo)

  let chickenItems = arr.filter((value) => value.group === "garan");
  console.log(chickenItems)

  let teamItems = arr.filter((value) => value.group === "team");
  console.log(teamItems);

  displayDealItems(dealItems);
  displaySingleCombo(singleCombo);
  displayNewItemsCombo(newItemsCombo)
  displayComboTeam(teamItems)
  displayChickenFoodItems(chickenItems)
}

// const displayDealItems = (dealItems) => {
//   let html = '';
//   dealItems.forEach(item => {
//     let newColomn = document.createElement('div');
//     newColomn.className = "col-6 col-md-3 col-sm-6";
//     let boxItem = document.createElement("div");
//     boxItem.className= "box-item";
//     newColomn.appendChild(boxItem);
//     let divImage = document.createElement('div');
//     divImage.className = "images-item";
//     boxItem.appendChild(divImage);
//     let tagImg = document.createElement("img");
//     tagImg.src = `${item.img}`;
//     tagImg.alt = `${item.name}`
//     divImage.appendChild(tagImg);

//     let namePrice = document.createElement("div");
//     namePrice.className = "name-price"
//     let foodName = document.createElement("div");
//     foodName.className = "food-name";
//     foodName.innerHTML = `${item.name}`
//     namePrice.appendChild(foodName);
//     let foodPrice = document.createElement("div");
//     foodPrice.className = "food-price";
//     foodPrice.innerHTML = `${item.price}`
//     namePrice.appendChild(foodPrice);
//     boxItem.appendChild(namePrice)

//     let description = document.createElement("div");
//     description.className= "info-food";
//     description.innerHTML = `${item.description}`;

//   })
//   dealsGroup.innerHTML = html;
// }

// const dealsGroup = document.getElementById("dealsGroup");



const displayDealItems = (dealItems) => {
  let html = '';
  dealItems.forEach((item, index) => {
    console.log('index:',index)
    html += `
      <div class="col-6 col-md-3 col-sm-6">
        <div class="box-item">
          <div class="images-item">
            <img src="${item.img}" alt="${item.name}">
          </div>
          <div class="name-price">
            <div class="food-name">${item.name}</div>
            <div class="food-price">${item.price} đ</div> 
          </div>
          <div class="info-food">${item.description}</div>
          <div class="btn-add">
            <button onclick ="handeClickBookFoods('${encodeURIComponent(JSON.stringify(item))}')">Đặt hàng</button>
          </div>
        </div>
      </div>
    `;
    
  })
  dealsGroup.innerHTML = html;
}
// handleClikcbutton

let itemsPicked = [];

const handeClickBookFoods = (objettItem) =>{
  // console.log(dealItems);
  
  let itemAdded = JSON.parse(decodeURIComponent(objettItem));
  itemsPicked.push(itemAdded);
  console.log('added:',itemsPicked);
  handleCreateTableFromArray(itemAdded)
  
}

const handleCreateTableFromArray = (arr) => {
  let vocabularyTable = document.getElementById('box-table');
  handleDeleteAllRowsIncludeHeader(vocabularyTable);
  for (let i =0; i< arr.length; i++){
      let myTable = document.getElementById('box-table');
      let newRow = document.createElement('tr');
      myTable.appendChild(newRow);

      let firstCol = document.createElement('td');
        let contentFirstCol = document.createTextNode(arr[i].name);
        firstCol.appendChild(contentFirstCol);
        newRow.appendChild(firstCol);

        let secondCol = document.createElement('td');
        let contentSecondCol = document.createTextNode(arr[i].price);
        secondCol.appendChild(contentSecondCol);
        newRow.appendChild(firstCol);
  }}




const displaySingleCombo = (singleCombo) => {
  let html = '';
  singleCombo.forEach((item,index) => {
    html += `
      <div class="col-6 col-md-3 col-sm-6">
        <div class="box-item">
          <div class="images-item">
            <img src="${item.img}" alt="${item.name}">
          </div>
          <div class="name-price">
            <div class="food-name">${item.name}</div>
            <div class="food-price">${item.price} đ</div> 
          </div>
          <div class="info-food">${item.description}</div>
          <div class="btn-add">
            <button id="bookingBtn" onclick ="handeClickBookFoods('${encodeURIComponent(JSON.stringify(item))}')">Đặt hàng</button>
          </div>
        </div>
      </div>
    `;
    
  })
  singleGroup.innerHTML = html;
}


const displayNewItemsCombo = (newItemsCombo) => {
  let html = '';
  newItemsCombo.forEach(item => {
    html += `
      <div class="col-6 col-md-3 col-sm-6">
        <div class="box-item">
          <div class="images-item">
            <img src="${item.img}" alt="${item.name}">
          </div>
          <div class="name-price">
            <div class="food-name">${item.name}</div>
            <div class="food-price">${item.price} đ</div> 
          </div>
          <div class="info-food">${item.description}</div>
          <div class="btn-add">
            <button id="bookingBtn" onclick ="handeClickBookFoods('${encodeURIComponent(JSON.stringify(item))}')">Đặt hàng</button>
          </div>
        </div>
      </div>
    `;
    
  })
  newsGroup.innerHTML = html;
}

const displayComboTeam = (teamItems) => {
  let html = '';
  teamItems.forEach(item => {
    html += `
      <div class="col-6 col-md-3 col-sm-6">
        <div class="box-item">
          <div class="images-item">
            <img src="${item.img}" alt="${item.name}">
          </div>
          <div class="name-price">
            <div class="food-name">${item.name}</div>
            <div class="food-price">${item.price} đ</div> 
          </div>
          <div class="info-food">${item.description}</div>
          <div class="btn-add">
            <button id="bookingBtn" onclick ="handeClickBookFoods('${encodeURIComponent(JSON.stringify(item))}')">Đặt hàng</button>
          </div>
        </div>
      </div>
    `;
    
  })
  teamGroup.innerHTML = html;
}

const displayChickenFoodItems = (chickenItems) => {
  let html = '';
  chickenItems.forEach(item => {
    html += `
      <div class="col-6 col-md-3 col-sm-6">
        <div class="box-item">
          <div class="images-item">
            <img src="${item.img}" alt="${item.name}">
          </div>
          <div class="name-price">
            <div class="food-name">${item.name}</div>
            <div class="food-price">${item.price} đ</div> 
          </div>
          <div class="info-food">${item.description}</div>
          <div class="btn-add">
            <button id="bookingBtn" onclick ="handeClickBookFoods('${encodeURIComponent(JSON.stringify(item))}')">Đặt hàng</button>
          </div>
        </div>
      </div>
    `;
    
  })
  checkenGroup.innerHTML = html;
}


// cart





fetchAndShowMenuItems(); 

// menu-ngang

const container = document.querySelector('.container-js');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
console.log(prevBtn);
console.log(nextBtn);

let currentPosition = 0; 
let quantityClick = 0;

// show chevron

const showPrevChevronMenu = () => {
  if (quantityClick == 0){
    prevBtn.style.display = 'none';
  }
  else if (quantityClick >= 1 ){
    prevBtn.style.display = 'block';
    if(quantityClick >= 16){
      nextBtn.style.display = 'none';
    }
    else{
      nextBtn.style.display = 'block';
    }
  }
}

showPrevChevronMenu(quantityClick)







nextBtn.addEventListener('click', () => {
  quantityClick += 1;
  currentPosition -= 30; 
  container.style.transform = `translateX(${currentPosition}px)`;
  
  console.log('quantity',quantityClick);
  showPrevChevronMenu();
});

prevBtn.addEventListener('click', () => {
  quantityClick -= 1;
  currentPosition += 30; 
  container.style.transform = `translateX(${currentPosition}px)`
  console.log('hihi');
  showPrevChevronMenu();
});





