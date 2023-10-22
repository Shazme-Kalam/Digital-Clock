function updateClock(){
var date = new Date();
var day = date.getDay();
    mon =date.getMonth();
    dNum = date.getDate();
    yr = date.getFullYear();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    per = "AM"
 
//  if(hour == 0){
//    hour = hour - 12;
//       per = "AM"
//  }

 Number.prototype.pad = function(digits){
     for(var n = this.toString(); n.length < digits; n= 0 + n);
     return n;
}

    var months = ["January", "February", "March", "April", "May","June", "July", "August", "September", "October","November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[day], months[mon], dNum.pad(2), yr, hour.pad(2), min.pad(2), sec.pad(2), per];
    for(var i = 0; i < ids.length; i++){
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

}

function initClock(){
    updateClock();
    window.setInterval("updateClock()",1)
}