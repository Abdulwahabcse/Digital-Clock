let is24HourFormat = true;

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    if (!is24HourFormat) {
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        document.querySelector('.time').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    } 
    
    else {
        document.querySelector('.time').textContent = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds}`;
    }
}

function toggleFormat() {
    is24HourFormat = !is24HourFormat;
    updateTime();
}
document.getElementById('toggleFormat').addEventListener('click', toggleFormat);

setInterval(updateTime);



