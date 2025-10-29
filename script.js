const navbar = document.querySelector('nav');
const btn_location = document.querySelector('.btn-location')
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