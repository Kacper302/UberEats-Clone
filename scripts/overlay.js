const overlay_background = document.querySelector('.overlay');
const overlay_location = document.querySelector('.overlay-location');
const overlay_order = document.querySelector('.overlay-order');
export function closeAllOverlays(){
    overlay_background.classList.remove('active')
    overlay_location.style.display = 'none';
    overlay_order.style.display = 'none';
}

export function showOverlay(overlay){
    overlay_background.classList.add('active');
    overlay.style.display= 'block';
}