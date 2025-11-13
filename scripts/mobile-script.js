import { closeAllOverlays, showOverlay, putDates, putHours } from "./overlay.js";

export function initMobile(){
    const btn_LogIn = document.querySelector('.btn-Login')
const order_list = document.querySelectorAll('.order-list');

const overlay_background = document.querySelector('.overlay');
const overlay_cancel_location = document.querySelector('.overlay-location-cancel');
const overlay_cancel_order = document.querySelector('.overlay-order-cancel');
const overlay_order_now = document.querySelector('.overlay-order-now');

const overlay_order = document.querySelector('.overlay-order');
const overlay_location = document.querySelector('.overlay-location');

const menu_btn = document.querySelector('.btn-menu');
const sidebar= document.querySelector('.sidebar');
const input_container_navbar = document.querySelector(".input-container-navbar-content")
const dateList = document.querySelectorAll('.overlay-order-select');
const overlay_order_plan = document.querySelector('.overlay-order-plan');
const input_adres = document.querySelector(".input-container")
const location_input = document.querySelector('.location-input')

btn_LogIn.innerHTML = "<i class='fa-solid fa-user'></i>";

putDates();
putHours();


document.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    if (scrollY > 30) {
        location_input.style.display = 'block';
    }
    else{
        location_input.style.display = 'none';
    }
})
document.addEventListener('click', (e) => {
    if(e.target == overlay_background){
    closeAllOverlays()
     sidebar.style.left = "-500px";
    }
})

 menu_btn.addEventListener('click', () => {
     overlay_background.classList.add('active');
    sidebar.style.left = '0'; 
    
})

input_adres.addEventListener('click', () => {
    showOverlay(overlay_location)
    
})
overlay_cancel_location.addEventListener('click', () => {
   closeAllOverlays();
})

overlay_cancel_order.addEventListener('click', () => {
    closeAllOverlays();

})

order_list[0].addEventListener('click', () => {
    showOverlay(overlay_order)
})

overlay_order_plan.addEventListener('click', () => {
    const dateValue = dateList[0].value;
    const hourValue = dateList[1].value;
    console.log(dateValue,hourValue);
    order_list[0].innerHTML = `${dateValue}<br> ${hourValue}`
    closeAllOverlays();
})
overlay_order_now.addEventListener('click', () => {
     closeAllOverlays();
     order_list[0].innerHTML = "<i class='fa-solid fa-clock'></i> Dostarcz Teraz <span class='span-dropdown'><i class='fa-solid fa-angle-down'></i></span>"
})
input_container_navbar.addEventListener('click', () => {
    showOverlay(overlay_location)
})
}