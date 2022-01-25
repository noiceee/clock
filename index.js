const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
const hourHand = document.querySelector(".hour-hand");
const timeDiv = document.querySelector(".time-container");
let currentTheme = "dark";
let isRGB = "off";
setInterval(()=>{
    const date = new Date();
    let secondAngle = date.getSeconds()*6;
    let minuteAngle = date.getMinutes()*6;
    let hourAngle = date.getHours()*30;
    secondHand.setAttribute("style",`transform:rotate(${secondAngle}deg);`);
    minuteHand.setAttribute("style",`transform:rotate(${minuteAngle}deg);`);
    hourHand.setAttribute("style",`transform:rotate(${hourAngle}deg);`);
    document.title = `${parseInt(hourAngle/360*12).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })} : ${parseInt(minuteAngle/6).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })} : ${parseInt(secondAngle/6).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })}`;
    }, 1000);

document.querySelector('.theme-toggle').addEventListener('click', ()=>{
    if(currentTheme!="light"){
        document.documentElement.setAttribute("color-theme", "light");
        currentTheme = "light";
        document.querySelector('.theme-toggle').classList.add('off');
    }
    else{
        document.documentElement.setAttribute("color-theme", null);
        document.querySelector('.theme-toggle').classList.remove('off');
        currentTheme = "dark";
    }
})
document.querySelector('.theme-toggle.rgb').addEventListener('click', ()=>{
    if(isRGB=="off"){
        document.documentElement.setAttribute("rgb", "on");
        isRGB = "on";
        document.querySelector('.theme-toggle.rgb').classList.add("off");
    }
    else{
        document.documentElement.setAttribute("rgb", "off");
        document.querySelector('.theme-toggle.rgb').classList.remove('off');
        isRGB = "off";
    }
})
document.querySelector('.theme-toggle.red').addEventListener('click', ()=>{
    if(isRGB=="off"){
        document.documentElement.setAttribute("red", "on");
        isRGB = "on";
        document.querySelector('.theme-toggle.red').classList.add("off");
    }
    else{
        document.documentElement.setAttribute("red", "off");
        document.querySelector('.theme-toggle.red').classList.remove('off');
        isRGB = "off";
    }
})