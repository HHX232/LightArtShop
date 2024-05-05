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

//нашли все заголовки табов по data атрибуту
const tabHeaders = document.querySelectorAll('[data-tab]');
//нашли все контент боксы
const contentBoxes = document.querySelectorAll('[data-tab-content]');
 

tabHeaders.forEach(function(item){
   item.addEventListener('click',function(){
      // this.dataset.tab   //позволяет работать с дата атрибутами
      // console.log(this.dataset.tab)
      // const contentBox = document.querySelector('#' + this.dataset.tab);
      // console.log(contentBox);

      //1 все content box скрыть
      // contentBoxes.forEach(function(item){
      //    item.classList.add('none');
      // });
      //2 выбрать нужный и показать его
      const contentBox = document.querySelector('#' + this.dataset.tab);      
      if(contentBox.classList.contains = 'none'){
         contentBox.classList.toggle('none');
         console.log('have')
      }
     
   });

});

//slider-pleer
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

 //pleer-list
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
//  menuBtn.addEventListener('click', () => {
//   menu.classList.toggle('menu__list--active');
//  });



 //chart
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