let Content = document.querySelector('h1');
let Btn = document.querySelector('button');
let SelectionMenu = document.querySelectorAll('select');
let Column_Select_Menu = document.getElementById('Select-Time');
let User_Selected_Val;
let Alarm_Sound;
let IsAlarm_Alert = false;

for (let i = 12; i > 0; i--) {
    i = i < 10 ? "0" + i : i;

    let Options = `<option value="${i}">${i}</option>`;
    SelectionMenu[0].firstElementChild.insertAdjacentHTML('afterend', Options)
}

for (let i = 59; i > 0; i--) {
    i = i < 10 ? "0" + i : i;

    let Options = `<option value="${i}">${i}</option>`;
    SelectionMenu[1].firstElementChild.insertAdjacentHTML('afterend', Options)
}
for (let i = 59; i > 0; i--) {
    i = i < 10 ? "0" + i : i;

    let Options = `<option value="${i}">${i}</option>`;
    SelectionMenu[2].firstElementChild.insertAdjacentHTML('afterend', Options)
}
for (let i = 2; i > 0; i--) {
    let Am_Pm = i > 1 ? "AM" : "PM";

    let Options = `<option value="${Am_Pm}">${Am_Pm}</option>`;
    SelectionMenu[3].firstElementChild.insertAdjacentHTML('afterend', Options)
}

Alarm_Sound = new Audio('extreme-clock-alarm-26588.mp3');
setInterval(() => {
    let Time = new Date();

    let H = Time.getHours();
    let M = Time.getMinutes();
    let S = Time.getSeconds();
    let AM_PM_s;

    //Adding 0 before Houre,Minutes,Seconds

    H = H < 10 ? "0" + H : H;
    M = M < 10 ? "0" + M : M;
    S = S < 10 ? "0" + S : S;

    if (H > 12) {
        H = H - 12;
        AM_PM_s = "PM";
    } else {
        AM_PM_s = "AM";
    }
    let Current_Time = `${H}:${M}:${S}:${AM_PM_s}`;
    Content.innerText = Current_Time;

    if (User_Selected_Val == Current_Time) {
        Alarm_Sound.play();
        Alarm_Sound.loop = true;

    }



}, 1000);



Btn.addEventListener('click', (e) => {
    e.preventDefault();

    if (IsAlarm_Alert) {
        User_Selected_Val = "";
        Alarm_Sound.pause();
        Btn.innerHTML = "Set Time";
        Column_Select_Menu.classList.remove("disable");
       return IsAlarm_Alert = false;
      
       
    }


    let User_Set_Value = `${SelectionMenu[0].value}:${SelectionMenu[1].value}:${SelectionMenu[2].value}:${SelectionMenu[3].value}`;
    if (User_Set_Value.includes('Houre') || User_Set_Value.includes('Minute') || User_Set_Value.includes('Seconds') || User_Set_Value.includes('AM/PM')) {
        alert("please select value");

    }

    Btn.innerHTML = "Clear Time";
    User_Selected_Val = User_Set_Value;
    Column_Select_Menu.classList.add("disable");
    IsAlarm_Alert = true;

})