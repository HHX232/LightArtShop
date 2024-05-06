const communeImg = document.querySelector('.commune__img');
const communeLinks = document.querySelector('.commune__links-window');
const communeText = document.querySelector('.commune__item--phone');
const communecross = document.querySelector('.commune__links-cross');

communeImg.addEventListener('click', function(){
  communeLinks.classList.toggle('commune__links-window--animate');
})
communeText.addEventListener('click', function(){
  communeLinks.classList.toggle('commune__links-window--animate');
})
communecross.addEventListener('click', function(){
  communeLinks.classList.toggle('commune__links-window--animate');
})

const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');


tabHeaders.forEach(function(item){
  item.addEventListener('click',function(){
     const contentBox = document.querySelector('#' + this.dataset.tab);      
     if(contentBox.classList.contains = 'none'){
        contentBox.classList.toggle('none');
        console.log('have')
     }
    
  });

});

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay:{
     delay:3000,
     disableOnInteraction: false,
  },
});

const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element){
 element.addEventListener('click', open);
})
function open(evt){
 const tabtarget = evt.currentTarget;
 const button = tabtarget.dataset.button;
 generateSongList(this.dataset.button.split('-')[1]-1)
 tabItem.forEach(function(item){
   item.classList.remove('tabs__btn-item--active');
 });

 tabtarget.classList.add('tabs__btn-item--active');

 tabContent.forEach(function(item){
item.classList.remove('tabs__content-item--active')
 });

 document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');
const chartButton = document.querySelectorAll('.chart__item-btn--status');
const chartButtonActive = document.querySelector('.chart__item-btn--status');

chartButton.forEach(function(element){

  element.addEventListener('click', pause);
})

function pause(elt){
  const targetPlay = elt.currentTarget;
  const targetPlayButton = targetPlay.dataset.chart;
  if(targetPlay.classList.contains("chart__item-btn--statusActive")){
     document.querySelector(`#${targetPlayButton}`).classList.remove("chart__item-btn--statusActive");
  }else{
  chartButton.forEach(function(item){
     item.classList.remove("chart__item-btn--statusActive")
  })
 document.querySelector(`#${targetPlayButton}`).classList.toggle("chart__item-btn--statusActive");
}
}

const colorBtn = document.querySelector('.commune__item-color')
const body = document.querySelector('.body')
const whatsLink = document.querySelector('.whats__link')
colorBtn.addEventListener("click", () => {
  body.classList.toggle("body__white")
  whatsLink.classList.toggle("whats__link-white")
  if( body.classList.contains("body__white")){
     colorBtn.innerText = "Темная тема"
  }else{
     colorBtn.innerText = "Светлая тема"
  }
})

//filters

const filterActivateButton = document.querySelector('.tabs__btn-filter')
const filterContainer = document.querySelector('.filters__container')

const filterListText = document.querySelectorAll('.filter__item-text')
const checksList = document.querySelectorAll('.check__box')
const imagesList = document.querySelectorAll('.check__img')
filterActivateButton.addEventListener("click", function(){
filterContainer.classList.toggle("filters__container--visible")
})

filterListText.forEach((el) =>{
  el.addEventListener("click", activateFilter)
})
function activateFilter(ev){
  const targetEl = ev.currentTarget;
  const targetElID = targetEl.id;
  const currentCheckMark = document.querySelector(`[data-checkIMG=${targetElID}]`)
  if(targetEl.classList.contains("filter__item-text--active")){
     checksList.forEach((el) =>{
        el.querySelector(".check__img").classList.remove("check__img--active")
       })
       filterListText.forEach((el) =>{
        el.classList.remove("filter__item-text--active")
       })
  }else{
     checksList.forEach((el) =>{
  el.querySelector(".check__img").classList.remove("check__img--active")
 })
 filterListText.forEach((el) =>{
  el.classList.remove("filter__item-text--active")
 })
 targetEl.classList.add("filter__item-text--active")
 currentCheckMark.classList.add("check__img--active")
  }
}
checksList.forEach((el) =>{
  el.addEventListener("click", activateCheck)
})
function activateCheck(ev){
  const targetEl = ev.currentTarget;
  const currentCheckMark = targetEl.querySelector('.check__img')
     const currentID = currentCheckMark.getAttribute('data-checkIMG');
     if(currentCheckMark.classList.contains("check__img--active")){
        imagesList.forEach((img) =>{
           img.classList.remove("check__img--active")
        })
        filterListText.forEach((el) =>{
        el.classList.remove("filter__item-text--active")
     })
     }else{
        imagesList.forEach((img) =>{
           img.classList.remove("check__img--active")
        })
        filterListText.forEach((el) =>{
           el.classList.remove("filter__item-text--active")
           if(el.id == currentID){
              el.classList.add("filter__item-text--active")
              currentCheckMark.classList.add("check__img--active")
           }
        })
     }
  }

  const activateButton = document.querySelector('.activate__filter')
  const songCards = document.querySelectorAll('.tabs__content-card')
  
  // console.log(activateButton)
activateButton.addEventListener('click', activateActiveFiltes);




function activateActiveFiltes(){
  const ActiveVisFilters = document.querySelector('.filter__item-text--active')
  i=0
  // console.log(ActiveVisFilters.dataset.filter)
  if(ActiveVisFilters == null){
     songCards.forEach((el) => {
        el.classList.remove('none')
     })
  }else{
  SONGS_DATA.songs.forEach((s) =>{
     if(s.type != ActiveVisFilters.dataset.filter){
        songCards[i].classList.add('none')
     }else{
        songCards[i].classList.remove('none')
     }
     i++;
  })
}
}