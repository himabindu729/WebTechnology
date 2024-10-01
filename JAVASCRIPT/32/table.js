var tab=document.createElement("table")
 document.body.appendChild(tab);
 tab.style.border="5px solid black"
 tab.style.borderCollapse="collapse"
 for(i=1;i<=5;i++){
    var row=document.createElement("tr")
    tab.appendChild(row);
    for (k=0;k<=2;k++){
        var sell=document.createElement("td");
        row.appendChild(sell)
        sell.style.border="3px solid black"
    }
 }   
 var alltd=document.querySelectorAll("td")
 console.log(alltd);
 var borderColors=["blue","blue","blue","red","red","red","green","green","green","yellow","yellow","yellow"]
 var arr=["Details","Emp1","Emp2","EmpName","Sai","Rama","Package","10LPA","15LPA","STREAM","IT","CS","YEAR","2023","2024"] 
 for(i=0;i<=alltd.length-1;i++){
    alltd[i].innerHTML=arr[i];
    alltd[i].style.border="3px solid ${borderColors[i]}"
 }    
 for(i=0;i<=12;i++){
    if(i%3==0){
        alltd[i].style.fontFamily="bold"
        alltd[i].style.textAlign="center"
    }
    else if(i==1 || i==2){
        alltd[i].style.fontFamily="bold"
        alltd[i].style.textAlign="center"
    }
 }
