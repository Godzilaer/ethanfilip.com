const firstLunch = [1226, 1248]
const secondLunch = [1319, 1341]
//1248

const times = [
    //1
    [835, 928],

    //2
    [931, 1024],

    //Break
    [1027, 1034],

    //3
    [1037, 1130],

    //4
    [1133, 1226],

    //5 - Both lunches within this period
    [1229, 1341],

    //6
    [1344, 1437],

    //FLEX
    [1440, 1510],

    //Buses Leave
    [1515, 1520],

    //Late Bus Leaves
    [1555, 1600]
]

function Update() {
    let d = new Date();

    let time = d.getHours() + '' + d.getMinutes().toString().padStart(2, '0');

    closestI = -1;
    isWithinTime = false;

    for(let i = 0; i < 10; i++) {
        let timeFrame = times[i];
  
        if(time >= timeFrame[0] && time < timeFrame[1]) {
            
            closestI = i;
            isWithinTime = true;

            console.log("Period " + (i));
            console.log("Time Remaining: " + TimeUntil(timeFrame[1]));
            break;
        }

        if(time >= timeFrame[1] && time < times[i+1][0]) {
            console.log("Transition to Period " + (i+2))
            break;
        }
    }
}

function TimeUntil(targetTime) {
    const targetTimeStr = targetTime.toString().padStart(4, '0');
    const targetTimeHrs = parseInt(targetTimeStr.slice(0, -2), 10);
    const targetTimeMins = parseInt(targetTimeStr.slice(-2), 10);
    let targetTimeDate = new Date();
    targetTimeDate.setHours(targetTimeHrs, targetTimeMins, 0, 0);

    let now  = new Date();

    diffMilliseconds = targetTimeDate - now;

    diffMinutes = Math.floor(diffMilliseconds / 60000);
    diffSeconds = Math.floor((diffMilliseconds / 1000) - diffMinutes * 60).toString().padStart(2, '0');
       
    return diffMinutes + ":" + diffSeconds;
}

//updateInterval = setInterval(Update, 1000)