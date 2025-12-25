const secondHand = document.getElementById("sec");
const minuteHand = document.getElementById("min");
const hourHand = document.getElementById("hour");

let secOldRot = 0;
let minOldRot = 0;
let hourOldRot = 0;

let oldSecond;
let syncClockInterval;

var secsCalc;
var minsCalc;
var hoursCalc;

function rotate()
{
	const d = new Date();
	//d = new Date('Wed Feb 15 2023 03:00:15 GMT-0500 (Eastern Standard Time)'); //For testing purposes
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
	
	secsCalc = seconds * 6;
	minsCalc = minutes * 6 + secsCalc / 60;
	hoursCalc = hours * 30 + minsCalc / 12;
	
	let secHandRot = 'rotate(' + (secsCalc + secOldRot) + 'deg)';
	let minHandRot = 'rotate(' + (minsCalc + minOldRot) + 'deg)';
	let hourHandRot = 'rotate(' + (hoursCalc + hourOldRot) + 'deg)';
	
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

function VisualTimerArc(endAngle) {
	let startAngle = minsCalc - 90;
	endAngle -= 90;
	
	if(endAngle < startAngle) {
		endAngle += 360;
	}

	const timerVisual = document.getElementById("timer-visual");

    const radius = timerVisual.getAttribute("r");  // Circle radius
    const circumference = 2 * Math.PI * radius;  // Full circle length

    // Calculate arc length (proportion of the circumference)
    const arcLength = ((endAngle - startAngle) / 360) * circumference;

    // Stroke-dasharray: arc length (visible) + remaining (invisible)
    const gapLength = circumference - arcLength;
    
    // Stroke-dashoffset: moves the starting position of the arc
    const dashOffset = (circumference * (1 - startAngle / 360));

    // Apply to the arc element
    
    timerVisual.setAttribute("stroke-dasharray", `${arcLength} ${gapLength}`);
    timerVisual.setAttribute("stroke-dashoffset", dashOffset);
}