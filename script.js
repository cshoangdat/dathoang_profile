function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

let activities_list = document.querySelector('.slider .slider-list');
let activities_items = document.querySelectorAll('.slider .slider-list .slider-item');
let activities_dots = document.querySelectorAll('.slider .activities-dots li')
let activities_btn_prev = document.getElementById('activities-btn-prev');
let activities_btn_next = document.getElementById('activities-btn-next');

let active = 0;
let lengthItems = activities_items.length - 1;

activities_btn_next.onclick = function(){
  if(active + 1 > lengthItems){
    active = 0;
  }
  else{
    active = active + 1;
  }
  reloadSlider();
}

activities_btn_prev.onclick = function(){
  if(active - 1 < 0){
    active = lengthItems;
  }
  else{
    active = active - 1;
  }
  reloadSlider();
}

let refreshSlider = setInterval(()=>{
  activities_btn_next.click()
}, 5000);

function reloadSlider(){
  let checkLeft = activities_items[active].offsetLeft;
  activities_list.style.left = -checkLeft + 'px';

  let lastActiveDot = document.querySelector('.slider .activities-dots li.active');
  lastActiveDot.classList.remove('active');
  activities_dots[active].classList.add('active');
  clearInterval(refreshSlider);
  refreshSlider = setInterval(()=>{
    activities_btn_next.click()
  }, 5000);
}

activities_dots.forEach((li, key) => {
  li.addEventListener('click', function(){
    active = key;
    reloadSlider();
  })
})