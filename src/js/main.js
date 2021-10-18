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
      @@include('modules/accordion.js')

 



