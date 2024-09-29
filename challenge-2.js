//challenge - 2 Speed Detector


//variable holding the speed of a car

let carSp = 40;

// Function to check if the car's speed is above 70 km/h

function speedDet() {
    let points = 0;
    
    if (carSpe < 70){
    console.log("Ok");
    } 
    else { 
         for(speedLim = 70; speedLim < carSpe; speedLim += 5){
            points += 1;
        }
        console.log(`Points: ${points}`);
        
    }
 
    // if statement to check whether the points are above 12
    if(points > 12){
        console.log("License suspended");
    }
}

//invoke function
speedDet();