let is24HourFormat = true;

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let timeString;

    if (is24HourFormat) {
        hours = String(hours).padStart(2, '0');
        timeString = `${hours}:${minutes}:${seconds}`;
    } else {
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        hours = String(hours).padStart(2, '0');
        timeString = `${hours}:${minutes}:${seconds} ${period}`;
    }

    document.getElementById('clock').textContent = timeString;
}

document.getElementById('toggleFormat').addEventListener('click', () => {
    is24HourFormat = !is24HourFormat;
    updateClock();
});

setInterval(updateClock, 1000);
updateClock();
