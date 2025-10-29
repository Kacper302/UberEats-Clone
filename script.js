const navbar = document.querySelector('nav');
const btn_location = document.querySelector('.btn-location');
const order_list = document.querySelectorAll('.order-list');
console.log(window.scrollY);

document.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    if (scrollY > 30) {
        navbar.style.backgroundColor = 'white';
    }
    if(scrollY >= 500){
        btn_location.style.display = 'block';
    }
    else{
        navbar.style.backgroundColor = 'transparent';
        btn_location.style.display = 'none';
    }
})
order_list[0].addEventListener('click', ()=> {
    order_list[1].classList.toggle('hidden');
    order_list[2].classList.toggle('hidden');
})