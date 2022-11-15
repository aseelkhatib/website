import {plansList} from './data.js';
    let plan_number = window.localStorage.getItem("plan_number");
    document.getElementById("plan_num").innerHTML ="you chose plan "+plan_number;
    document.getElementById("monthly").innerHTML ="monthly- " +plansList[plan_number-1].monthlySubPrice+"$";
    document.getElementById("yearly").innerHTML ="yearly- " +plansList[plan_number-1].yearlySubPrice+"$/month";
    
    document.getElementById("yearly").onclick = function () {
        location.href = "page3.html";
    };
    document.getElementById("monthly").onclick = function () {
        location.href = "page3.html";
    };