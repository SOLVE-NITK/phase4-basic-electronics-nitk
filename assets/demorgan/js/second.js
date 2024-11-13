const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
var A = 0;
var B = 0;
var C = 0;
var Y=0;
var Z=0;
M=0;
S=0;
canvas.addEventListener('click',function(e){
  const clickX=e.clientX-canvas.getBoundingClientRect().left;
  const clickY=e.clientY-canvas.getBoundingClientRect().top;
  A = $('#inputA').val();
  Y = $('#inputA').val();
 B = $('#inputB').val();
 Z = $('#inputB').val();
});
const Width=590;
canvas.width=Width;
const Height=300;
canvas.height=Height;

//variable A naming
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("A",20,60)
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("A",300,60)
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("A",420,60)
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("A + B",520,70)

//B naming
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("B",20,115)
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("B",300,130)
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("B",418,140)
//A+B terminal naming
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("A.B",110,60)
//voltmeter naming
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("A.B",220,60)
ctx.fillText("____",217,45)
ctx.fillText("__",418,45)
ctx.fillText("__",415,125)
ctx.fillText("__",545,55)
ctx.fillText("__",515,55)
ctx.fillText("=",274,90)
function ADisplay(A){
  ctx.fillStyle = "white"
  ctx.fillRect(5,10,40,35)
  ctx.fillStyle = "black"
  ctx.font = "20px Arial";
  let text = `${A}`
  ctx.fillText(text,20,30);
}
function YDisplay(Y){
  ctx.fillStyle = "white"
  ctx.fillRect(280,15,50,35)
  ctx.fillStyle = "black"
  ctx.font = "20px Arial";
  let text = `${Y}`
  ctx.fillText(text,299,35);
}
// ADisplay(A);
function BDisplay(B){
  ctx.fillStyle = "white";
  ctx.fillRect(5,120,40,35)
  ctx.fillStyle = "black"
  ctx.font = "20px Arial";
  let text = ` ${B} `
  ctx.fillText(text,15,140);
}
function ZDisplay(Z){
  ctx.fillStyle = "white"
  ctx.fillRect(290,138,40,35)
  ctx.fillStyle = "black"
  ctx.font = "20px Arial";
  let text = ` ${Z} `
  ctx.fillText(text,295,155);
}
function AAndBDisplay(C){
  ctx.fillStyle = "white"
  ctx.fillRect(100,10,50,35)
  ctx.fillStyle = "black"
  ctx.font = "20px Arial";
  let text = ` ${C}`
  ctx.fillText(text,110,30);
}

function AOrBComDisplay(){
  ctx.fillStyle = "white"
  ctx.fillRect(215,13,40,35)
  ctx.fillStyle = "red"
  ctx.font = "20px Arial";
  let text = ` ${+!C}`
  ctx.fillText(text,223,30);
}
function AComDisplay(){
  ctx.fillStyle = "white"
  ctx.fillRect(405,12,40,35)
  ctx.fillStyle = "black"
  ctx.font = "20px Arial";
  let text = ` ${M}`
  ctx.fillText(text,414,35);
}
function BComDisplay(){
  ctx.fillStyle = "white"
  ctx.fillRect(405,148,40,35)
  ctx.fillStyle = "black"
  ctx.font = "20px Arial";
  let text = ` ${S}`
  ctx.fillText(text,413,165);
}
function AOrBDisplay() {
  // Calculate A' and B'
  var ACom = M;
  var BCom = S;

  // Calculate A'B'
  var result = ACom || BCom;

  ctx.fillStyle = "white"
  ctx.fillRect(520, 20, 40, 35);
  ctx.fillStyle = "red";
  ctx.font = "20px Arial";
  let text = ` ${result ? 1 : 0} `;
  ctx.fillText(text,530,40);
}
//// draw and gate
ctx.beginPath();
  ctx.moveTo(20,80);
  ctx.lineTo(50,80);
  ctx.lineWidth=2;
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(20,100);
  ctx.lineTo(50,100);
  ctx.stroke();
 ctx.beginPath();
  ctx.moveTo(50,70);
  ctx.lineTo(50,110);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(50,70);
  ctx.lineTo(100,70);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(50,110);
  ctx.lineTo(105,110);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(80,94,31,1.72*Math.PI,0.19*Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(109,90);
  ctx.lineTo(149,90);
  ctx.stroke();

  function drawNot()
  {
  ctx.beginPath();
  ctx.moveTo(200,90);
  ctx.lineTo(150,70);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(200,90);
  ctx.lineTo(150,109);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(150,70);
  ctx.lineTo(150,110);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(206,90,5,0,2*Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(210,90);
  ctx.lineTo(260,90);
  ctx.stroke();
  
  }
 // first not gate
  ctx.beginPath();
  ctx.moveTo(300,70);
  ctx.lineTo(350,70);
  ctx.lineWidth=2;
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(350,50);
  ctx.lineTo(390,70);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(350,90);
  ctx.lineTo(390,70);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(350,50);
  ctx.lineTo(350,90);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(396,70,5,0,2*Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(210,90);
  ctx.lineTo(260,90);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(402,70);
  ctx.lineTo(450,70);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(450,70);
  ctx.lineTo(450,90);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(450,90);
  ctx.lineTo(490,90);
  ctx.stroke();


  // second not gate

  ctx.beginPath();
  ctx.moveTo(300,120);
  ctx.lineTo(350,120);
  ctx.lineWidth=2;
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(350,100);
  ctx.lineTo(390,120);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(350,140);
  ctx.lineTo(390,120);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(350,100);
  ctx.lineTo(350,140);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(396,120,5,0,2*Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(210,90);
  ctx.lineTo(260,90);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(402,120);
  ctx.lineTo(450,120);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(450,120);
  ctx.lineTo(450,100);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(450,100);
  ctx.lineTo(490,100);
  ctx.stroke();

  //// draw or gate
  function drawOr(){
    ctx.beginPath();
    ctx.arc(463,98,27,1.70*Math.PI,0.20*Math.PI);
    ctx.stroke();
    }
  
    function drawOval()
    {
      // var canvas = document.getElementById("myCanvas");
      // var context = canvas.getContext("2d");
      ctx.lineWidth="2";
      ctx.strokeStyle="black";
      ctx.scale(1.5,0.41);
      ctx.beginPath();
      ctx.arc(299.9,232,50, 1.64 * Math.PI, 0.34 * Math.PI);
      ctx.stroke();
      ctx.setTransform(1,0,0,1,0,0)
    }
  
    ctx.beginPath();
    ctx.moveTo(525,95);
    ctx.lineTo(560,95);
    ctx.lineWidth=2;
    ctx.stroke();
  function drawComponents(){
    drawNot();
    drawOr();
    drawOval();
    
  }
  canvas.addEventListener('click',function(event){
    const clickX=event.clientX-canvas.getBoundingClientRect().left;
    const clickY=event.clientY-canvas.getBoundingClientRect().top;
   
 varupdate();
  });
  drawComponents();
 function startsimulate(){
     document.getElementById("inputA").disabled=false;
    document.getElementById("inputB").disabled=false;
   }
// function startsim(){
//     document.getElementById("inputA").disabled=false;
//     document.getElementById("inputB").disabled=false;
//   }
function varupdate(){
  // A = document.getElementById('inputA').value;
  A = document.getElementById('inputA').value;
  //FOR RHS
Y = document.getElementById('inputA').value;
 B =document.getElementById('inputB').value;
 //FOR LHS
Z =document.getElementById('inputB').value;
}
 // var C =document.getElementById('inputA').value;
 // var C =document.getElementById('inputB').value;
 function varr(){
 C=calculateC(A,B);
 M=not(Y);
 S=not(Z);
 ADisplay(A);
 YDisplay(Y);
 AComDisplay(!M);
 BDisplay(B);
  ZDisplay(Z);
  BComDisplay(!S);
  AAndBDisplay(C);
  AOrBComDisplay(!C);
  AOrBDisplay();
  
  function calculateC(A , B) {
    if (A==1 && B==1)
    return 1;
    else
    return 0;
  
  }
  function not(Y){
    if(Y==1)
    return 0;
  else
  return 1;
  }
  function not(Z){
    if(Z==1)
    return 0;
  else
  return 1;
  }
}
  //for updating all the inital value as 0
  varupdate();
  function display(){
   // $("#p3").text("De Morgans Second law has been observed and proved that LHS = RHS")
   document.getElementById('result-display').style.display="block"
  }
  function result(){
    display();
  }
  function simulate(){
    varr();
  }

window.addEventListener("load", varinit);
