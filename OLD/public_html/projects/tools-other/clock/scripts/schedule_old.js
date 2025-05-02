const dateText = document.getElementById('date');
const dayText = document.getElementById('day');
const blocksText = document.getElementById('blocks');
const blockText = document.getElementById('block');
const blockTimeLeftText = document.getElementById('blockTimeLeft');

const day = Number(prompt("What school day is it today?"));

var blockIndex;

const blocks = [
    'ABCEFG',
    'DABFEH',
    'CDAGEH',
    'BCDFGH',
    'ABCEFG',
    'DABFEH',
    'CDAGEH',
    'BCDFGH'
]

const blocksWithLunch = [
    'ABCLEFG',
    'DABLFEH',
    'CDALGEH',
    'BCDLFGH',
    'ABCLEFG',
    'DABLFEH',
    'CDALGEH',
    'BCDLFGH'
]

const blockTimes = [
    835,
    932,
    935,
    1032,
    1035,
    1134,
    1137,
    1208,
    1211,
    1309,
    1312,
    1409,
    1412,
    1510
]

function update()
{
    const d = new Date();

    dateText.innerHTML = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getYear().toString().slice(1);
    dayText.innerHTML = "Day " + day;
    blocksText.innerHTML = blocks[day - 1];
    blockText.innerHTML = GetCurrentBlock(d);
    blockTimeLeftText.innerHTML = GetBlockTimeLeft();
}

function GetCurrentBlock(d)
{
    const t = d.getMinutes() < 10 ? Number('' + d.getHours() + 0 + d.getMinutes()) : Number('' + d.getHours() + d.getMinutes());
    const blocksToday = blocksWithLunch[day - 1];

    var blockId = "After School";

    for(let i = 0; i < blockTimes.length; i++)
    {
        if(t < blockTimes[i])
        {
            if(i == 0)
            {
                //First bell
                if(t >= 830)
                {
                    blockId = "Transition: To " + blocksToday[0] + " Block";
                    break;
                }
                
                //Before first bell
                blockId = "Before School";
                break;
            }
            
            if(blockTimes[i] - blockTimes[i - 1] == 3)
            {
                blockIndex = blocksToday.charAt(Math.floor(i / 2));
                var block1 = blocksToday.charAt(Math.floor((i - 1) / 2)) + " Block";
                var block2 =  blocksToday.charAt(Math.floor(i / 2)) + " Block";

                if(block1 == "L Block")
                {
                    block1 = "Lunch";
                }

                if(block2 == "L Block")
                {
                    block2 = "Lunch";
                }
                
                blockId = "Transition: " + block1 + " to " + block2;
                break;
            }

            if(i == 1)
            {
                blockId = i - 1;
                blockIndex = blockId;
                break;
            }

            blockId = Math.floor(i / 2);
            blockIndex = blockId;
            break;
        }
    }

    if(blockId > -1)
    {
        var block = blocksToday.charAt(blockId);
        
        if(block == "L")
        {
            return "Lunch";
        }
        
        return block + " Block";
    }

    return blockId;
}

function GetBlockTimeLeft()
{
    return blockTimes[blockIndex] - blockTimes[blockIndex - 1];
}

update();
setInterval(update, 1000);
