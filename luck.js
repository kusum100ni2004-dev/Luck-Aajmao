
function checkLuck(){

let num=document.getElementById("number").value;

if(num==="" || num<0 || num>5){
alert("Enter number between 0 and 5");
return;
}

let chance=Math.random()*100;

let result="";

if(chance<=90){

result="😔 Better Luck Next Time";

}
else if(chance<=94){

result="🎁 Free Spin Won";

}
else if(chance<=97){

result="💸 You Won ₹10";

}
else if(chance<=99){

result="💰 You Won ₹50";

}
else{

result="🏆 JACKPOT ₹100";

}

document.getElementById("result").innerHTML=result;
document.getElementById("popup").style.display="block";
document.getElementById("overlay").style.display="block";

}

function closePopup(){

document.getElementById("popup").style.display="none";
document.getElementById("overlay").style.display="none";

}

