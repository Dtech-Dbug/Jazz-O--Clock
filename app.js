const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")
const digiClock = document.querySelector('.digital')

function setDate(){
    const now = new Date();  // note of the date
    const seconds = now.getSeconds();  // note of the seconds of the current minute
    const minutes = now.getMinutes()
    const hours = now.getHours()

    
   
    

     // to convert the seconds to degree for rotation of the clock arms
     // initially, we offset rotate rotate was set to 90deg, so we add 90 deg to the secondDegrees to counter the offset, else rhe clock would start ticking from a 90deg left to right.
     const secondDegrees = ((seconds / 60) * 360) +90;
     secondHand.style.transform = `rotate(${secondDegrees}deg)`


     // for the minute and the minute hand rotation
     const minuteDegrees = ((minutes / 60) *360) + 90;
     minuteHand.style.transform = `rotate(${minuteDegrees}deg)`


     // for hours and the hour hand rotation
     const hourDegrees = ((hours / 12)* 360) + 90
     hourHand.style.transform = `rotate(${hourDegrees}deg)`

     
    

   
    
}

setInterval(setDate , 1000)