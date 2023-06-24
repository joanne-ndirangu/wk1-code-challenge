// Speed Detector
function speed() {
const speed = prompt("Enter speed:");

    const speedLimit = 70;       //any speed above this gets demerit points
    let demeritPoints = 0;       //default points

    console.log(speed)

     if (speed <= speedLimit) {        //only if speed limit is not exceeded
         console.log(`Ok`)
         document.write(`Ok`)
     } else {
         demeritPoints = Math.floor((speed - speedLimit) / 5);    //if speed limit is exceeded calculate demerit points
   }

         if (demeritPoints > 12) {
             console.log("License suspended")
             document.write("License suspended")
         } else {
            Math.floor(demeritPoints);              //math.floor rounds decimal numbers down to the nearest whole number
             console.log(`Points:${demeritPoints}`)
             document.write(`Points:${demeritPoints}`)    //prints demerit points
         }
        }