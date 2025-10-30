const navbar = document.querySelector('nav');
const btn_location = document.querySelector('.btn-location');

const order_list = document.querySelectorAll('.order-list');
const order_list_container = document.querySelector('.order-list-container');

const overlay_background = document.querySelector('.overlay');
const overlay_cancel_location = document.querySelector('.overlay-location-cancel');
const overlay_cancel_order = document.querySelector('.overlay-order-cancel');
const overlay_order_now = document.querySelector('.overlay-order-now');

const overlay_order = document.querySelector('.overlay-order');
const overlay_location = document.querySelector('.overlay-location');

const menu_btn = document.querySelector('.btn-menu');
const sidebar= document.querySelector('.sidebar');


document.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    if (scrollY > 30) {
        navbar.style.backgroundColor = 'white';
    }
    else{
      navbar.style.backgroundColor = 'transparent';
    }
    if(scrollY >= 700){
        btn_location.style.display = 'block';
    }
    else{
        
        btn_location.style.display = 'none';
    }
})

order_list[0].addEventListener('click', ()=> {
    order_list[1].classList.toggle('hidden');
    order_list[2].classList.toggle('hidden');
    
})
order_list[1].addEventListener('click', () => {
    order_list[1].classList.add('hidden');
    order_list[2].classList.add('hidden');
})

btn_location.addEventListener('click', () => {
  overlay_background.classList.add('active');
  overlay_location.style.display = 'block';

})
overlay_cancel_location.addEventListener('click', () => {
    overlay_background.classList.remove('active')
     overlay_location.style.display = 'none';
})
overlay_cancel_order.addEventListener('click', () => {
    overlay_background.classList.remove('active')
     overlay_order.style.display = 'none';

     order_list[1].classList.add('hidden');
    order_list[2].classList.add('hidden');
})

overlay_order_now.addEventListener('click', () => {
     overlay_background.classList.remove('active')
     overlay_order.style.display = 'none';
})

document.addEventListener('click', (e) => {
    if(e.target == overlay_background){
    overlay_background.classList.remove('active');
    overlay_location.style.display = 'none';
    overlay_order.style.display = 'none';
     sidebar.style.left = "-500px";
    }
})

order_list[2].addEventListener('click', () => {
    overlay_background.classList.add('active');
     overlay_order.style.display = 'block';
})

menu_btn.addEventListener('click', () => {
     overlay_background.classList.add('active');
    sidebar.style.left = '0'; 
    
})