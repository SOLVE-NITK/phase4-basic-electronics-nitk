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
ctx.fillText("A",10,60)
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("A",410,60)
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("B",410,140)
//Y NAMING
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("A",300,58)
//B naming
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("B",10,115)
//Z naming
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("B",300,135)
//A+B terminal naming
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("A+B",100,60)
//A.B terminal naming
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("A . B",550,80)
//voltmeter naming
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("A+B",215,60)
ctx.fillText("____",215,45)
ctx.fillText("__",547,65)
ctx.fillText("__",569,65)
ctx.fillText("__",407,45)
ctx.fillText("__",407,125)
ctx.fillText("=",274,90)
function ADisplay(A){
  ctx.fillStyle = "white"
  ctx.fillRect(10,15,40,35)
  ctx.fillStyle = "black"
  ctx.font = "20px Arial";
  let text = `${A}`
  ctx.fillText(text,20,35);
}
function YDisplay(Y){
  ctx.fillStyle = "white"
  ctx.fillRect(290,10,40,35)
  ctx.fillStyle = "black"
  ctx.font = "20px Arial";
  let text = `${Y}`
  ctx.fillText(text,300,30);
}
// ADisplay(A);
function BDisplay(B){
  ctx.fillStyle = "white";
  ctx.fillRect(10,120,40,35)
  ctx.fillStyle = "black"
  ctx.font = "20px Arial";
  let text = ` ${B} `
  ctx.fillText(text,15,135);
}
function ZDisplay(Z){
  ctx.fillStyle = "white"
  ctx.fillRect(290,140,40,35)
  ctx.fillStyle = "black"
  ctx.font = "20px Arial";
  let text = ` ${Z} `
  ctx.fillText(text,295,160);
}
function AOrBDisplay(C){
  ctx.fillStyle = "white"
  ctx.fillRect(90,15,50,35)
  ctx.fillStyle = "black"
  ctx.font = "20px Arial";
  let text = ` ${C}`
  ctx.fillText(text,105,35);
}

function AOrBComDisplay(){
  ctx.fillStyle = "white"
  ctx.fillRect(212,10,40,35)
  ctx.fillStyle = "red"
  ctx.font = "20px Arial";
  let text = ` ${+!C}`
  ctx.fillText(text,220,30);
}
function AComDisplay(){
  ctx.fillStyle = "white"
  ctx.fillRect(395,10,40,35)
  ctx.fillStyle = "black"
  ctx.font = "20px Arial";
  let text = ` ${M}`
  ctx.fillText(text,405,30);
}
function BComDisplay(){
  ctx.fillStyle = "white"
  ctx.fillRect(395,145,50,35)
  ctx.fillStyle = "black"
  ctx.font = "20px Arial";
  let text = ` ${S}`
  ctx.fillText(text,405,165);
}
function AAndBDisplay() {
  // Calculate A' and B'
  var ACom = M;
  var BCom = S;

  // Calculate A'B'
  var result = ACom & BCom;

  ctx.fillStyle = "white"
  ctx.fillRect(545, 20, 40, 45);
  ctx.fillStyle = "red";
  ctx.font = "20px Arial";
  let text = ` ${result ? 1 : 0} `;
  ctx.fillText(text, 555, 50);
}

function drawOr(){
  ctx.beginPath();
  ctx.arc(33,93,27,1.70*Math.PI,0.20*Math.PI);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(10,77);
  ctx.lineTo(55,77);
  ctx.lineWidth=2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(10,100);
  ctx.lineTo(58,100);
  ctx.lineWidth=2;
  ctx.stroke();
}
function drawOval()
{
    ctx.lineWidth="2";
    ctx.strokeStyle="black";
    ctx.scale(1.5,0.41);
    ctx.beginPath();
    ctx.arc(12.9,220,50, 1.64 * Math.PI, 0.34 * Math.PI);
    ctx.stroke();
    ctx.setTransform(1,0,0,1,0,0)
}

  ctx.beginPath();
  ctx.moveTo(95,90);
  ctx.lineTo(150,90);
  ctx.lineWidth=2;
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
  //first not gate
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

  //// draw and gate
  ctx.beginPath();
  ctx.moveTo(490,80);
  ctx.lineTo(490,110);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(490,80);
  ctx.lineTo(540,80);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(490,110);
  ctx.lineTo(545,110);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(525,98,24,1.72*Math.PI,0.18*Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(550,95);
  ctx.lineTo(590,95);
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
//   document.getElementById("inputA").disabled=false;
//   document.getElementById("inputB").disabled=false;
// }
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
  //Y=!Y;
  // AComDisplay(!Y);
  BDisplay(B);
  ZDisplay(Z);
  BComDisplay(!S);
  AOrBDisplay(C);
  AOrBComDisplay(!C);
  AAndBDisplay();

  function calculateC(A , B) {
    if (A==1 || B==1)
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
  // $("#p3").text("De Morgans first law has been observed and proved that LHS=RHS")
  document.getElementById('result-display').style.display ="block"
}
function result(){
  display();
}
function simulate(){
  varr();
}
window.addEventListener("load", varinit);
