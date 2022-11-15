let plan_number = window.localStorage.getItem("plan_number");
let the_date=new Date();
let lim= the_date.getFullYear()+"-"+(the_date.getMonth()+1);
document.getElementById("plan_num").innerHTML ="you choose plan "+plan_number;
document.getElementById("experation").setAttribute('min',lim);