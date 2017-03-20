//The DOM
var firstDay = document.querySelector('.dy1');
var secondDay = document.querySelector('.dy2');
var matchDaysBtn = document.querySelector('.theButton');
var list = document.querySelectorAll('.day')
//#########################The Dom END############################
var getDays = function(date) {            //getDay function
    var specificDay = date.getDay();
    return specificDay;
};
matchDaysBtn.addEventListener('click', () => { //eventLestiner to Match Day Btn
    clear();    //calling a clear function to clear previuos matched day
    var that_day = new Date(firstDay.value);  //variable for date input
    var that_day1 = new Date(secondDay.value);
    if (getDays(that_day) === getDays(that_day1)) { //conditional to check if days match
        list[getDays(that_day)].classList.add('matched');
    } else {
        list[getDays(that_day)].classList.add('day0');
        list[getDays(that_day1)].classList.add('day1');
    }
});
var clear = function() {        //function to clear previuos matched day
    for (var i = 0; i < list.length; i++) {
        list[i].classList.remove('matched');
        list[i].classList.remove('day0');
        list[i].classList.remove('day1');
    }
};
