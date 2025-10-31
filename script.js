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

const dateList = document.querySelectorAll('.overlay-order-select')
const overlay_order_plan = document.querySelector('.overlay-order-plan')

function putDates() {
    for (let i = 0; i < 7; i++) {
    const date = new Date();
    const weekDays = [
        "niedz", "pon", "wt", "śr", "czw", "pt", "sob"
    ];
    const monthName = [
    "sty","lut","mar","kwi","maj","cze","lip","sie","wrz","paź","lis","gru"  
    ];
    date.setDate(date.getDate() + i);
    const day = date.getDay();
    const month = date.getMonth(); 

    console.log(`${weekDays[day]}, ${date.getDate()} ${monthName[month]}`);
    const option = document.createElement("option");
   option.textContent = `${weekDays[day]}, ${date.getDate()} ${monthName[month]}`;
   option.setAttribute('value', `${weekDays[day]}, ${date.getDate()} ${monthName[month]}`)
   
   dateList[0].appendChild(option)
    }
   
    
}
putDates()

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
    order_list[0].innerHTML = "<i class='fa-solid fa-clock'></i> Dostarcz Teraz <span class='span-dropdown'><i class='fa-solid fa-v'></i></span>"
})


btn_location.addEventListener('click', () => {
  showOverlay(overlay_location)

})
overlay_cancel_location.addEventListener('click', () => {
   closeAllOverlays();
})
overlay_cancel_order.addEventListener('click', () => {
    closeAllOverlays();
     order_list[1].classList.add('hidden');
    order_list[2].classList.add('hidden');
})

overlay_order_now.addEventListener('click', () => {
     closeAllOverlays();
     order_list[0].innerHTML = "<i class='fa-solid fa-clock'></i> Dostarcz Teraz <span class='span-dropdown'><i class='fa-solid fa-v'></i></span>"
})

document.addEventListener('click', (e) => {
    if(e.target == overlay_background){
    closeAllOverlays()
     sidebar.style.left = "-500px";
    }
})

order_list[2].addEventListener('click', () => {
    showOverlay(overlay_order)
})

menu_btn.addEventListener('click', () => {
     overlay_background.classList.add('active');
    sidebar.style.left = '0'; 
    
})

overlay_order_plan.addEventListener('click', () => {
    const dateValue = dateList[0].value;
    const hourValue = dateList[1].value;
    console.log(dateValue,hourValue);
    order_list[0].innerHTML = `${dateValue}<br> ${hourValue}`
    closeAllOverlays();
})

function closeAllOverlays(){
    overlay_background.classList.remove('active')
    overlay_location.style.display = 'none';
    overlay_order.style.display = 'none';
}

function showOverlay(overlay){
    overlay_background.classList.add('active');
    overlay.style.display= 'block';
}