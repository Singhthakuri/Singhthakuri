let btn=document.querySelector("#btn");
let btn2=document.querySelector("#btn1");
let copytext=document.querySelector("#code");
let copyTheText=document.querySelector("#copycode");

console.log(copytext);

var rgb="#00000";
var rgb2Color="#ffffff";

function code(){
    let  txtTocopy=document.querySelector("#copy");
  let fulltxt=txtTocopy.textContent;
  navigator.clipboard.writeText(fulltxt)
    .then(function(){
        alert("Successfully text copied");
    })
     .catch(function(error){
        alert("sorry can't copy the code",error);
     });
};

//generating hex code for colors
const  colorcode=()=> {
        let myhexnum="0123456709abcdef";
        let color="#";
    for(let i=0;i<6;i++)  {
        color= color + myhexnum[Math.floor(Math.random()*16)];  
}
console.log(color);
return color;
}; 
// this is for the button 2

let handleButton2=()=>{
rgb2Color= colorcode();
    btn2.textContent = rgb2Color;
    document.body.style.backgroundImage=`linear-gradient( to right,${rgb2Color},${rgb}`;
    copyTheText.textContent=`linear-gradient( to right,${rgb2Color},${rgb}`;
};
// this is for the button one
let handleButton1=()=>{ 
 rgb=colorcode();
btn.textContent=rgb;
document.body.style.backgroundImage=`linear-gradient( to right,${rgb},${rgb2Color}`;
copyTheText.textContent=`linear-gradient( to right,${rgb},${rgb2Color}`;
};

btn.addEventListener("click",handleButton1);
btn2.addEventListener("click",handleButton2);