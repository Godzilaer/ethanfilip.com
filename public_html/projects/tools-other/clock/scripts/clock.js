const secondHand = document.getElementById("sec");
const minuteHand = document.getElementById("min");
const hourHand = document.getElementById("hour");

let secOldRot = 0;
let minOldRot = 0;
let hourOldRot = 0;

let oldSecond;
let syncClockInterval;

function rotate()
{
	const d = new Date();
	//const d = new Date('Wed Feb 15 2023 06:00:45 GMT-0500 (Eastern Standard Time)'); //For testing purposes
	let seconds = d.getSeconds();
	let minutes = d.getMinutes();
	let hours = d.getHours();
	hours %= 12;
	hours = hours ? hours : 12;
	
	if(seconds == 0)
	{
		secOldRot += 360;
	}
	
	if(minutes == 0 && seconds == 0)
	{
		minOldRot += 360;
	}
	
	if(hours == 12 && minutes == 0 && seconds == 0)
	{
		hourOldRot += 360;
	}
	
	let secsCalc = seconds * 6;
	let minsCalc = minutes * 6 + secsCalc / 60;
	let hoursCalc = hours * 30 + minsCalc / 12;
	
	let secHandRot = 'rotate(' + (secsCalc - 180 + secOldRot) + 'deg)';
	let minHandRot = 'rotate(' + (minsCalc - 180 + minOldRot) + 'deg)';
	let hourHandRot = 'rotate(' + (hoursCalc - 180 + hourOldRot) + 'deg)';
	
	secondHand.style.transform = secHandRot;
	minuteHand.style.transform = minHandRot;
	hourHand.style.transform = hourHandRot;

	oldSecond = d.getSeconds();
	syncClockInterval = setInterval(syncClock, 100);
}

rotate();

function syncClock()
{
	if(oldSecond != new Date().getSeconds()) 
	{
      clearInterval(syncClockInterval);
		
      rotate();
	
    }
}

