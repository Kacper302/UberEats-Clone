const overlay_background = document.querySelector('.overlay');
const overlay_location = document.querySelector('.overlay-location');
const overlay_order = document.querySelector('.overlay-order');
const dateList = document.querySelectorAll('.overlay-order-select')

export function closeAllOverlays(){
    overlay_background.classList.remove('active')
    overlay_location.style.display = 'none';
    overlay_order.style.display = 'none';
}

export function showOverlay(overlay){
    overlay_background.classList.add('active');
    overlay.style.display= 'block';
}

 export function putDates() {
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

    const option = document.createElement("option");
   option.textContent = `${weekDays[day]}, ${date.getDate()} ${monthName[month]}`;
   option.setAttribute('value', `${weekDays[day]}, ${date.getDate()} ${monthName[month]}`)
   
   dateList[0].appendChild(option)
    } 
}
export function putHours() {
    for (let h = 0; h < 24;h++) {
    for (let m = 0; m < 60; m+= 30) {
        const hours = h < 10 ? "0" + h : h;
        const minutes = m < 10 ? "0" + m : m;
        
    const option = document.createElement("option");
   option.textContent = `${hours}:${minutes}`;
   option.setAttribute('value', `${hours}:${minutes}`)
   dateList[1].appendChild(option)
    }
}
}