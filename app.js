let hourHand = document.querySelector('.hourHand');

let minHand = document.querySelector('.minHand');

let secondHand = document.querySelector('.secondHand');

function minute(){
    let now = new Date();
    let minutes = now.getMinutes();
    let minutesdegrees = ((minutes / 60) * 360);
    console.log(minutesdegrees);

    minHand.style.transform = `rotate(${minutesdegrees}deg)`;
}
minute();

function hour(){
    let now = new Date();
    let hours = now.getHours();
    let hoursdegrees = ((hours / 12) * 360);
    hourHand.style.transform = `rotate(${hoursdegrees}deg)`;
}
hour();

setInterval(function(){
    let now = new Date();
    let seconds = now.getSeconds();
    let secondsTodegrees = ((seconds / 60) * 360);

    if(secondsTodegrees >= 354){
        secondHand.style.transition = 'none';
        minute();
    }

    if(secondsTodegrees >= 6 && secondsTodegrees <= 353 ){
        secondHand.style.transition = 'all 0.5s';
    }
    secondHand.style.transform = `rotate(${secondsTodegrees}deg)`;
},1000);

setInterval(minute, 60000);

setInterval(hour, 3600000);