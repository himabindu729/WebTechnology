document.getElementById("container").innerHTML=`
<div id="leftContainer">
    <h1 id=""headingLeft>Signup</h1>
    <p id="paraLeft">If you already have an Account</p>
    <input id="buttonLeft" type="button" value="Login"></input>
    </div>
    <div id="rightContainer">
        <div id="formContainer">
            <table>
                <tr>
                    <th><input type="text" placeholder="First Name"></th>
                    <th><input type="text" placeholder="Last Name"></th>
                </tr>
                <tr>
                    <th colspan="2"><input type="text" placeholder="Mobile no or Email id"></th>
                    <th colspan="2"><input type="password" placeholder="Enter password"></th>
                </tr>
                    <td colspan="2">Choose your Date of birth</td>
                </tr>
                <tr>
                    <th colspan="2">
                        <select name="" id="">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                            <option value="">7</option>
                            <option value="">8</option>
                            <option value="">9</option>
                            <option value="">10</option>
                            <option value="">11</option>
                            <option value="">12</option>
                            <option value="">13</option>
                            <option value="">14</option>
                            <option value="">15</option>
                            <option value="">16</option>
                            <option value="">17</option>
                            <option value="">18</option>
                            <option value="">19</option>
                            <option value="">20</option>
                            <option value="">21</option>
                            <option value="">22</option>
                            <option value="">23</option>
                            <option value="">24</option>
                            <option value="">25</option>
                            <option value="">26</option>
                            <option value="">27</option>
                            <option value="">28</option>
                            <option value="">29</option>
                            <option value="">30</option>
                            <option value="">31</option>
                        </select>
                        <select name="" id="">
                            <option value="">Jan</option>
                            <option value="">Feb</option>
                            <option value="">Mar</option>
                            <option value="">Apr</option>
                            <option value="">May</option>
                            <option value="">June</option>
                            <option value="">July</option>
                            <option value="">Aug</option>
                            <option value="">Sep</option>
                            <option value="">Oct</option>
                            <option value="">Nov</option>
                            <option value="">Dec</option>
                        </select>
                        <select name="" id="">
                            <option value="">1991</option>
                            <option value="">1992</option>
                            <option value="">1993</option>
                            <option value="">1994</option>
                            <option value="">1995</option>
                            <option value="">1996</option>
                            <option value="">1997</option>
                            <option value="">1998</option>
                            <option value="">1999</option>
                            <option value="">2000</option>
                            <option value="">2001</option>
                            <option value="">2002</option>
                            <option value="">2003</option>
                            <option value="">2004</option>
                            <option value="">2005</option>
                            <option value="">2006</option>
                            <option value="">2007</option>
                            <option value="">2008</option>
                            <option value="">2009</option>
                            <option value="">2010</option>
                        </select>
                    </th>
                </tr>
                <tr>
                    <td colspan="2">Gender</td>
                </tr>
                <tr>
                    <th colspan="2">
                        <div id="containerGender">
                            Male <input type="radio" name="gen">
                            Female <input type="radio" name="gen">
                            others <input type="radio" name="gen">
                        </div>
                    </th>
                </tr>
                <tr>
                    <td colspan="2" id="terms">People who use our services may have upload their details following all the terms and conditions and also choose the correct options</td>
                </tr>
                <tr>
                    <th colspan="2"> <input type="submit" value="signup" id="bRight"></th>
                </tr>
            </table>
        </div>
    </div>
`;
document.querySelector("body").style.backgroundImage=`linear-gradient(75deg,orange,orangered)`;

var container=document.getElementById("container");
container.style.width="100vw";
container.style.height="100vh";
container.style.display="flex";
container.style.justifyContent="space-evenly";
container.style.alignItems="center";

var lcount=document.getElementById("leftContainer");
lcount.style.width="100vw";
lcount.style.height="100vh";
lcount.style.display="flex";
lcount.style.flexDirection="column";
lcount.style.justifyContent="space-evenly";
lcount.style.alignItems="center";

var hleft=document.getElementById("headingLeft");
hleft.style.fontSize="7vw";
hleft.style.color="purple";
hleft.style.textShadow="2px 2px 2px black"
hleft.style.letterSpacing="1vw";

var pleft=document.getElementById("paraLeft");
pleft.style.fontSize="3vw";

var bleft=document.getElementById("buttonLeft");
bleft.style.width="15vw";
bleft.style.height="3vw";
bleft.style.backgroundColor="peachpuff";
bleft.style.borderRadius="10px"
bleft.style.border="none";
bleft.style.boxShadow="2px 2px 2px black";
bleft.style.fontSize="2vw";
bleft.style.fontWeight="bold";
bleft.style.letterSpacing="1vw";

var rcont=document.getElementById("rightContainer");
rcont.style.width="150vw";
rcont.style.height="100vh";
rcont.style.display="flex";
rcont.style.justifyContent="center";
rcont.style.display="flex";
rcont.style.alignContent="center";
rcont.style.alignItems="center";

var fcont=document.getElementById("formCotainer");
fcont.style.width="100%";
fcont.style.height="80%";
fcont.style.backgroundColor="peachpuff";
fcont.style.borderRadius="10px";
fcont.style.boxShadow="5px 5px 5px black";
fcont.style.padding="2vw";
fcont.style.display="flex";
fcont.style.alignItems="center";

var allinp=document.getElementsByTagName("input");
for(i=0;i<=3;i++){
    allinp[i+1].style.border="2px solid black";
    allinp[i+1].style.boxShadow="2px 2px 2px black";
    allinp[i+1].style.borderRadius="5px";
    allinp[i+1].style.padding="0.2vw";
    allinp[i+1].style.fontSize="2vw";
}
allinp[3].style.width="98%";
allinp[4].style.width="98%";

var allth=document.getElementsByTagName("th");
for (i=0;i<=allth.length-1;i++){
    allth[i].style.width="10vw";
}
var allsel=document.getElementsByTagName("select");
for (i=0;i<=allsel.length-1;i++){
    allsel[i].style.width="10vw";
    allsel[i].style.height="3vw";
    allsel[i].style.backgroundColor="cyan";
    allsel[i].style.border="2px solid black";
    allsel[i].style.borderRadius="5px";
    allsel[i].style.color="black";
    allsel[i].style.marginLeft="2vw";
    allsel[i].style.marginRight="2vw";
}
document.getElementById("terms").style.textAlign="center";

var bRight=document.getElementById("bRight");
bRight.style.width="18vw";
bRight.style.height="4vw";
bRight.style.backgroundColor="cyan";
bRight.style.borderRadius="10px";
bRight.style.color="black"
bRight.style.border="none";
bRight.style.boxShadow="2px 2px 2px black";
bRight.style.fontSize="2vw";
bRight.style.fontWeight="bold";
bRight.style.letterSpacing="1vw";
bRight.style.border="2px solid black"

var gcont=document.getElementById("containerGender");
gcont.width="100%";
gcont.height="100%";
gcont.style.padding="1vw";

for (i=5;i<=7;i++){
    allinp[i].style.marginRight="5vw";
    allinp[i].style.marginLeft="1vw";
}

