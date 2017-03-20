//The DOM
var firstDay = document.querySelector('.dy1');
var secondDay = document.querySelector('.dy2');
var matchDaysBtn = document.querySelector('.theButton');
//#########################The Dom END############################
var getDays = function(date) {
    var specificDay = date.getDay();
    return specificDay;
};
matchDaysBtn.addEventListener('click', () => {
    var that_day = new Date(firstDay.value);
    var that_day1 = new Date(secondDay.value);
    if (getDays(that_day) === getDays(that_day1)) {
        document.querySelectorAll('.day')[getDays(that_day)].classList.add('matched');
    } else {
        document.querySelectorAll('.day')[getDays(that_day)].classList.add('day0');
        document.querySelectorAll('.day')[getDays(that_day1)].classList.add('day1');
    }
});
