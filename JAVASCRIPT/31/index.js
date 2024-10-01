// console.log(Date())
// console.log(typeof(Date()))    //returns string data type
// To extract each value we need to fetch seperately

function dateFun(){
    let allDate=new Date();
    let hh=allDate.getHours();
    let mm=allDate.getMinutes();
    let ss=allDate.getSeconds();
    let dd=allDate.getDate();
    // month and day gives the index values
    let mo=allDate.getMonth();
    let yy=allDate.getFullYear();
    let mi=allDate.getMilliseconds();
    let dy=allDate.getDay();
    // console.log(hh,mm,ss,dd,mo,yy,mi,dy);
    var am_pm="Am"
    if(hh>=12){
        am_pm="Pm"
        if(hh>12){
            hh-=12;
        }
    }
    if(hh==0){
        hh=12;
    }
    document.querySelector("#time").innerHTML=`${hh}:${mm} ${am_pm}`
    switch(mo){
        case 0:
            mo="Jan";
        break;
        case 1:
            mo="Feb";
        break;
        case 2:
            mo="Mar";
        break;
        case 3:
            mo="Apr";
        break;
        case 4:
            mo="May";
        break;
        case 5:
            mo="Jun";
        break;
        case 6:
            mo="Jul";
        break;
        case 7:
            mo="Aug";
        break;
        case 8:
            mo="Sep";
        break;
        case 9:
            mo="Oct";
        break;
        case 10:
            mo="Nov";
        break;
        case 11:
            mo="Dec";
        break;
    }
    document.querySelector("#date").innerHTML=`${dd}/${mo}/${yy}`
    if(dy==0){
        dy="ఆదివారం"
    }
    else if(dy==1){
        dy="సోమవారం"
    }
    else if(dy==2){
        dy="మంగళవారం"
    }
    else if(dy==3){
        dy="బుధవారం"
    }
    else if(dy==4){
        dy="గురువారం"
    }
    else if(dy==5){
        dy="శుక్రవారం"
    }
    else if(dy==6){
        dy="శనివారం"
    }
    document.querySelector("#day").innerHTML=dy;
    document.querySelector("#sec").innerHTML=ss;
}
setInterval(dateFun,1000);
