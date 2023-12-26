var countDownDate = new Date("Mar 30, 2024 12:00:00 AM").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if(Number(days) < 0 ||Number(hours)<0||Number(minutes)<0||Number(seconds)<0 ){
        document.getElementById("days").innerHTML = '00';
        document.getElementById("hours").innerHTML = '00';
        document.getElementById("minutes").innerHTML = '00';
        document.getElementById("seconds").innerHTML = '00';
    }else{
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}
},1000);
