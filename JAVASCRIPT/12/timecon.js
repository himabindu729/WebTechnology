var hh=prompt("Enter the HH in 24 format");
var mm=prompt("Enter the MM");
hh=Number(hh);
mm=Number(mm);
var am_pm="AM";
if(hh>=12){
    am_pm="PM";
    if(hh>12){
        hh-=12;
    }
}

if(hh==0){
    hh=12;
}
document.getElementById("hh").innerHTML=hh;
document.getElementById("mm").innerHTML=mm;
document.getElementById("am_pm").innerHTML=am_pm;