
const header__navItem = document.querySelectorAll(".header__nav-item-link");
const btn__navToggle = document.querySelector(".menu-icon");
const header = document.querySelector(".header");
// function for headerNavItem
header__navItem.forEach(item => item.addEventListener("click",function(e){ 
  e.preventDefault();
  const icon = e.currentTarget.querySelector(".fas");
  if(e.currentTarget.classList.contains("active")){
    icon.classList.remove("fa-caret-down");
    icon.classList.add("fa-caret-right");
  }else{
    icon.classList.remove("fa-caret-right");
    icon.classList.add("fa-caret-down");
  }
  this.classList.toggle("active");
}));

btn__navToggle.addEventListener("click",function(){
  header.classList.toggle("active");
});
// 
const close_headerfix = document.querySelector(".close_header-fix");
close_headerfix.addEventListener("click",function(){
  header.classList.remove("active");
});
// const btn_menuitem  = document.querySelectorAll(".btn-menu-item-trigger");
// for(let item of btn_menuitem){
//   item.addEventListener("click",function(e){
//     alert("hello world")
//   });
// }