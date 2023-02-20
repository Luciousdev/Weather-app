// day + month

const currentDate = new Date();
const day = currentDate.getDate();
const monthIndex = currentDate.getMonth();
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const monthName = monthNames[monthIndex];
const result = day + " " + monthName;
document.getElementById('date').innerHTML = result;


setInterval(() => {
    // Time in hours/minutes/seconds
    const time = currentDate.getHours() + ":" + currentDate.getMinutes()
    document.getElementById('time').innerHTML = time;
    console.log('time updated');
}, 60000);