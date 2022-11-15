import {plansList} from './data.js';
let i=0;
for( i=0;i<plansList.length;i++){
    document.getElementById(`plan${i}`).innerHTML = plansList[i].name;
    document.getElementById(`b${i}`).innerHTML = plansList[i].yearlySubPrice+"$";
    var table = document.getElementById("table");
    var row = table.getElementsByTagName("tr")[1];
    var td = row.getElementsByTagName("td")[i+1];
    td.innerHTML = plansList[i].gamesCount;

    var row = table.getElementsByTagName("tr")[2];
    var td = row.getElementsByTagName("td")[i+1];
    td.innerHTML = plansList[i].coins;

    var row = table.getElementsByTagName("tr")[3];
    var td = row.getElementsByTagName("td")[i+1];
    td.innerHTML = plansList[i].specialAvatar;


    var row = table.getElementsByTagName("tr")[4];
    var td = row.getElementsByTagName("td")[i+1];
    td.innerHTML = plansList[i].tShirt;

    var row = table.getElementsByTagName("tr")[5];
    var td = row.getElementsByTagName("td")[i+1];
    td.innerHTML = plansList[i].customerCare;
    
}

document.getElementById(`b${0}`).onclick = function () {
    location.href = "page2.html";
    window.localStorage.setItem("plan_number",1);
};
document.getElementById(`b${1}`).onclick = function () {
    location.href = "page2.html";
    window.localStorage.setItem("plan_number",2);
};
document.getElementById(`b${2}`).onclick = function () {
    location.href = "page2.html";
    window.localStorage.setItem("plan_number",3);
};

