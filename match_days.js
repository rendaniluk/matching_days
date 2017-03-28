//The DOM
var firstDay = document.querySelector('.dy1');
var secondDay = document.querySelector('.dy2');
var list = document.querySelectorAll('.day');
//#########################The Dom END############################
var getDaysIndex = function(date) {//function to get the day index
    var specificDay = date.getDay();
    return specificDay;
};
var act = function (){
    clear();    //calling a clear function to clear previuos matched day
    var that_day = new Date(firstDay.value);  //variable for date input
    var that_day1 = new Date(secondDay.value);
    if (getDaysIndex(that_day) === getDaysIndex(that_day1)) { //conditional to check if days match
        list[getDaysIndex(that_day)].classList.add('matched');
    } else {
        list[getDaysIndex(that_day)].classList.add('day0');
        list[getDaysIndex(that_day1)].classList.add('day1');
    }
};
var clear = function() {        //function to clear previuos matched day
    for (var i = 0; i < list.length; i++) {
        list[i].classList.remove('matched');
        list[i].classList.remove('day0');
        list[i].classList.remove('day1');
    }
};
firstDay.addEventListener('change', act); //eventLestiner to Match Days
secondDay.addEventListener('change', act);
