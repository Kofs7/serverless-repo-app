// start coding your function here!
function running_late(date) {
    var hours = date.getHours(); // get hours of the day
    if (hours >= 22) {
        return "It is late!";
    } else {
        return "It is still early!";
    }
}
// new Date() returns the current date and time
console.log(running_late(new Date("December 17, 1995 23:24:00"))); 

exports.running_late = running_late;
