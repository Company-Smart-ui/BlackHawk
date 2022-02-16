"use strict"
const body =document.querySelector("body");
const html=document.querySelector("html");
const header=document.querySelector(".header");
const navBtn=document.querySelector(".nav__btn");
window.onload= function(){
  navBtn.addEventListener('click', function() {
    this.classList.toggle('active');
  });
  pagescroll(); 
}  ;
 
      @@include('modules/nav.js') 
      @@include('modules/fixed-header.js')
  
      @@include('lazyscripts.js')
      @@include('modules/accordion.js');

 

(function() {
  if (document.querySelector('.form')) {
    const wrap = document.querySelectorAll('.wpcf7-form-control-wrap'),
          check = document.querySelector('.wpcf7-checkbox'),
          checkHandler = check?.querySelector('input[type="checkbox"]');
  if(!check){
      return
  }
    wrap.forEach(item => {
      if (item.querySelector('select')) {
        item.classList.add('polygon')
      }
    })
  
    check?.addEventListener('click', function() {
      checkHandler.checked = !checkHandler.checked;
    })
  }
})()

