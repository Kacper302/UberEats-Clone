const navbar = document.querySelector('nav');
const btn_location = document.querySelector('.btn-location');

const order_list = document.querySelectorAll('.order-list');
const order_list_container = document.querySelector('.order-list-container');

const overlay_background = document.querySelector('.overlay');
const overlay_cancel_btn = document.querySelector('.overlay-location-cancel');


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


btn_location.addEventListener('click', () => {
  overlay_background.classList.add('active');
})
overlay_cancel_btn.addEventListener('click', () => {
    overlay_background.classList.remove('active')
})

document.addEventListener('click', (e) => {
    if(e.target == overlay_background){
        overlay_background.classList.remove('active')
    }
})