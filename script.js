const navbar = document.querySelector('nav');
const btn_location = document.querySelector('.btn-location');
const order_list = document.querySelectorAll('.order-list');
const order_list_container = document.querySelector('.order-list-container')
console.log(window.scrollY);

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
