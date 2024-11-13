var v1 = 0;
var r1 = 0;
var r2 = 0;
var rf = 0;
var itotal = 0;
var i1 = 0;
var i2 = 0;
var i3 = 0;
var req =0;


const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "black";
ctx.lineWidth = 2;

//vertical
ctx.beginPath();
ctx.moveTo(100, 185);
ctx.lineTo(100, 390);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(670, 185);
ctx.lineTo(670, 390);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(240, 100);
ctx.lineTo(240, 270);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(550, 100);
ctx.lineTo(550, 270);
ctx.stroke();

//horizontal

ctx.beginPath();
ctx.moveTo(100, 185);
ctx.lineTo(240, 185);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(230, 185);
ctx.lineTo(220, 180);
ctx.lineTo(220, 190);
ctx.closePath();
ctx.fill();

ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(240, 100);
ctx.lineTo(380, 100);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(380, 100);
ctx.lineTo(370, 95);
ctx.lineTo(370, 105);
ctx.closePath();
ctx.fill();
ctx.beginPath();
ctx.moveTo(450, 100);
ctx.lineTo(550, 100);
ctx.stroke();

ctx.strokeStyle = "#0066ff";
ctx.beginPath();
ctx.moveTo(240, 270);
ctx.lineTo(380, 270);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(380, 270);
ctx.lineTo(370, 265);
ctx.lineTo(370, 275);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(450, 270);
ctx.lineTo(550, 270);
ctx.stroke();

ctx.strokeStyle = "green";
ctx.beginPath();
ctx.moveTo(240, 185);
ctx.lineTo(380, 185);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(380, 185);
ctx.lineTo(370, 180);
ctx.lineTo(370, 190);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(450, 185);
ctx.lineTo(550, 185);
ctx.stroke();

ctx.strokeStyle = "black";
ctx.beginPath();
ctx.moveTo(550, 185);
ctx.lineTo(670, 185);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 390);
ctx.lineTo(405, 390);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(435, 390);
ctx.lineTo(670, 390);
ctx.stroke();

//power supply
ctx.beginPath();
ctx.moveTo(405, 365);
ctx.lineTo(405, 415);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(415, 375);
ctx.lineTo(415, 405);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(425, 365);
ctx.lineTo(425, 415);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(435, 375);
ctx.lineTo(435, 405);
ctx.stroke();

//resistor1

ctx.beginPath();
ctx.moveTo(380, 101);
ctx.lineTo(390,88);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(390, 88);
ctx.lineTo(400,112);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 112);
ctx.lineTo(410,88);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(410, 88);
ctx.lineTo(420,112);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(420, 112);
ctx.lineTo(430,88);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(430, 88);
ctx.lineTo(440,112);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(440, 112);
ctx.lineTo(450,100);
ctx.stroke();

//resistor2

ctx.beginPath();
ctx.moveTo(380, 185);
ctx.lineTo(390,172);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(390, 172);
ctx.lineTo(400,196);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 196);
ctx.lineTo(410,172);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(410, 172);
ctx.lineTo(420,196);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(420, 196);
ctx.lineTo(430,172);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(430, 172);
ctx.lineTo(440,196);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(440, 196);
ctx.lineTo(450,184);
ctx.stroke();

//resistor3

ctx.beginPath();
ctx.moveTo(380, 270);
ctx.lineTo(390,257);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(390, 257);
ctx.lineTo(400,281);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 281);
ctx.lineTo(410,257);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(410, 257);
ctx.lineTo(420,281);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(420, 281);
ctx.lineTo(430,257);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(430, 257);
ctx.lineTo(440,281);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(440, 281);
ctx.lineTo(450,269);
ctx.stroke();

// resister 1 ammeter
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(300, 100, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// resistor 1 Ammetre symbol naming
ctx.fillStyle = "red"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("a1", 288 ,100)

// resister 2 ammeter
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(300, 185, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// resistor 2 Ammetre symbol naming
ctx.fillStyle = "green"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("a2", 288, 185)

// resister 3 ammeter
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(300, 270, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// resistor 3 Ammetre symbol naming
ctx.fillStyle = "#0066ff"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("a3", 288, 270)

//  ammeter
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(170, 185, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// Ammetre symbol naming
ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("A", 164, 185)

// Ammetre symbol naming
ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Ammeter", 120, 150)

// resistor 1 naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Resistor 1", 375, 65)

// resistor 2 naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Resistor 2", 375, 150)

// resistor 3 naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Resistor 3", 375, 230)

// battery naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Battery", 385, 345)

// positive terminal naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("+ve", 350, 410)

// negative terminal naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("-ve", 450, 410)

//lines details
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(739, 402);
ctx.lineTo(785, 402);
ctx.stroke();

ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(739, 432);
ctx.lineTo(785, 432);
ctx.stroke();

ctx.strokeStyle = '#0066ff';
ctx.beginPath();
ctx.moveTo(739, 462);
ctx.lineTo(785, 462);
ctx.stroke();

//naming

ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("I1", 790, 400)

ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";            
ctx.fillText("I2", 790, 430)

ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("I3", 790, 460)

//border
ctx.strokeStyle = 'black';
ctx.lineWidth =1;
ctx.beginPath();
ctx.moveTo(725, 372);
ctx.lineTo(725, 500);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(724, 372);
ctx.lineTo(850, 372);
ctx.stroke();

//big arrow

// ctx.lineWidth =2;
// ctx.beginPath();
// ctx.moveTo(95, 350);
// ctx.lineTo(95, 300);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(105, 350);
// ctx.lineTo(105, 300);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(95, 350);
// ctx.lineTo(105, 350);
// ctx.stroke();

//Initialise system parameters here
function resistance1Display(res){
  let text = `R1=${res} Ω`;
  ctx.fillStyle = "white";
  ctx.fillRect(370,52,110,25);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 385, 62)
  ctx.fillStyle = "black";
}

function ammeter1Display(i){
  let text = `I1=${i}A`;
  ctx.fillStyle = "white";
  ctx.fillRect(260,52,110,25);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 265, 62)
  ctx.fillStyle = "black";
}

function resistance2Display(res){
  let text = `R2=${res} Ω`;
  ctx.fillStyle = "white";
  ctx.fillRect(370,138,110,25);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 385, 150)
  ctx.fillStyle = "black";
}

function ammeter2Display(i){
  let text = `I2=${i} A`;
  ctx.fillStyle = "white";
  ctx.fillRect(260,138,110,25);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 265, 150)
  ctx.fillStyle = "black";
}

function resistancefDisplay(res){
  let text = `R3=${res} Ω`;
  ctx.fillStyle = "white";
  ctx.fillRect(370,220,110,25);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 385, 230);
  ctx.fillStyle = "black";
}

function ammeter3Display(i){
  let text = `I3=${i} A`;
  ctx.fillStyle = "white";
  ctx.fillRect(260,220,110,25);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 265, 230);
  ctx.fillStyle = "black";
}

function batteryDisplay(volt){
  let text = `${volt} V`;
  ctx.fillStyle = "white";
  ctx.fillRect(405,445,100,25);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 405, 455)
  ctx.fillStyle = "black";
}

function ammeterDisplay(i){
  let text = `I=${i} A`;
  ctx.fillStyle = "white";
  ctx.fillRect(130,220,90,25);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 135, 230);
  ctx.fillStyle = "black";
}

//Initialise system parameters here
function varinit() {
  varchange();
  //Variable slider and number input types
  $("#voltage1Slider").slider("value", 0.05); // slider initialisation : jQuery widget
  $("#voltage1Spinner").spinner("value", 0.05); // number initialisation : jQuery widget
  
  $("#voltage2Slider").slider("value", 0.05); // slider initialisation : jQuery widget
  $("#voltage2Spinner").spinner("value", 0.05);
  //resistor 1
  $("#resistor1Slider").slider("value", 0.01);
  $("#resistor1Spinner").spinner("value", 0.01);
  //resistor 2
  $("#resistor2Slider").slider("value", 0.01);
  $("#resistor2Spinner").spinner("value", 0.01);
  //resistor 3
  $("#resistorfSlider").slider("value", 0.01);
  $("#resistorfSpinner").spinner("value", 0.01);
  // $("#CsArea").spinner("value", 0.01);
  // $("#Ivalue").spinner("value", 0.01);

  $('#voltage1Slider').slider("disable"); 
  $('#voltage1Spinner').spinner("disable"); 
  // $('#voltage2Slider').slider("disable"); 
  $('#resistor1Slider').slider("disable"); 
  $('#resistor1Spinner').spinner("disable"); 
  $('#resistor2Slider').slider("disable"); 
  $('#resistor2Spinner').spinner("disable"); 
  $('#resistorfSlider').slider("disable"); 
  $('#resistorfSpinner').spinner("disable"); 

  $("#add-to-table-btn").prop("disabled", true);
  $("#add-I1I2-btn").prop("disabled", true);
  $("#result-btn").prop("disabled", true);
  document.getElementById('comments-tab').style.display = 'none'
  document.getElementById('message').innerHTML ="click on start simulation"
}

function varchange() {
  $("#voltage1Slider").slider({ max: 30, min: 0, step: 1 });
  $("#voltage1Spinner").spinner({ max: 30, min: 0, step: 1 });

  $("#voltage1Slider").on("slide", function (e, ui) {
    $("#voltage1Spinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltage1Spinner").on("spin", function (e, ui) {
    $("#voltage1Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltage1Spinner").on("change", function () {
    varchange();
  });
 
  $("#voltage2Slider").slider({ max: 30, min: 0, step: 1 });
  $("#voltage2Spinner").spinner({ max: 30, min: 0, step: 1 });

  $("#voltage2Slider").on("slide", function (e, ui) {
    $("#voltage2Spinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltage2Spinner").on("spin", function (e, ui) {
    $("#voltage2Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltage2Spinner").on("change", function () {
    varchange();
  });

  // resistor 1

  $("#resistor1Slider").slider({ max: 200, min: 0, step: 1 });
  $("#resistor1Spinner").spinner({ max: 200, min: 0, step: 1 });

  $("#resistor1Slider").on("slide", function (e, ui) {
    $("#resistor1Spinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor1Spinner").on("spin", function (e, ui) {
    $("#resistor1Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor1Spinner").on("change", function () {
    varchange();
  });
  $("#resistor1Spinner").on("touch-start", function () {
    varchange();
  });

  // resistor 2
  $("#resistor2Slider").slider({ max: 200, min: 0, step: 1 });
  $("#resistor2Spinner").spinner({ max: 200, min: 0, step: 1 });

  $("#resistor2Slider").on("slide", function (e, ui) {
    $("#resistor1Spinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor2Spinner").on("spin", function (e, ui) {
    $("#resistor2Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor2Spinner").on("change", function () {
    varchange();
  });
  $("#resistor2Spinner").on("touch-start", function () {
    varchange();
  });

  // resistor 3
  $("#resistorfSlider").slider({ max: 200, min: 0, step: 1 });
  $("#resistorfSpinner").spinner({ max: 200, min: 0, step: 1 });

  $("#resistorfSlider").on("slide", function (e, ui) {
    $("#resistorfSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistorfSpinner").on("spin", function (e, ui) {
    $("#resistorfSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistorfSpinner").on("change", function () {
    varchange();
  });
  $("#resistorfSpinner").on("touch-start", function () {
    varchange();
  });
  //
  $("#CsArea").spinner({ max: 1, min: 0.01, step: 0.0001 });
  $("#Ivalue").spinner({ max: 1, min: 0.01, step: 0.0001 });
}
function varupdate() {
  $("#voltage1Spinner").spinner("value", $("#voltage1Slider").slider("value")); //updating slider location with change in spinner(debug)
  $("#voltage2Spinner").spinner("value", $("#voltage2Slider").slider("value"));
  $("#resistor1Spinner").spinner("value", $("#resistor1Slider").slider("value"));
  $("#resistor2Spinner").spinner("value", $("#resistor2Slider").slider("value"));
  $("#resistorfSpinner").spinner("value", $("#resistorfSlider").slider("value"));
  volt1 = $("#voltage1Spinner").spinner("value"); //Updating variables
  volt2 = $("#voltage2Spinner").spinner("value"); //Updating variables
  res1 = $("#resistor1Spinner").spinner("value");
  res2 = $("#resistor2Spinner").spinner("value");
  resf = $("#resistorfSpinner").spinner("value");

   resistance2Display(res2);
   resistance1Display(res1);
   resistancefDisplay(resf);
   batteryDisplay(volt1);

  v1Assign(volt1);
  resis1Assign(res1);
  resis2Assign(res2);
  resisfAssign(resf);
  let curt =0;
  req = ((res1*res2*resf)/((res2*resf)+(res1*res2)+(res1*resf)));
  if (isNaN(req) || !isFinite(req)) {
    req = 0;    
  }else{
    req = ((res1*res2*resf)/((res2*resf)+(res1*res2)+(res1*resf))); 
  }

  if (isNaN(volt1/req) || !isFinite(volt1/req)) {
    curt=0
    itotalAssign(0)
  } else {
    curt = volt1/req;
    itotalAssign(volt1/req)
  }
   let cur1 = curt*((1/res1)/((1/res1)+(1/res2)+(1/resf)))
   let cur2 = curt*((1/res2)/((1/res1)+(1/res2)+(1/resf)))
   let cur3 = curt*((1/resf)/((1/res1)+(1/res2)+(1/resf)))

   if (isNaN(cur1) || !isFinite(cur1)) {
    console.log("called i1");
    i1Assign(0)
   } else {
    console.log("called i1");
    i1Assign(cur1)
   }

   if (isNaN(cur2) || !isFinite(cur2)) {
    console.log("called i2");
    i2Assign(0)
   } else {
    console.log("called i2");
    i2Assign(cur2)
   }

   
   if (isNaN(cur3) || !isFinite(cur3)) {
    console.log("called i3");
    i3Assign(0)
   } else {
    console.log("called i3");
    i3Assign(cur3)
   }
// console.log(v0);
};

function v1Assign(volt) {
  v1 = volt;
  // console.log(v1);
}

function itotalAssign(cur) {
    itotal = cur.toFixed(2);
    ammeterDisplay(itotal);
}
function i1Assign(cur) {
    i1 = cur.toFixed(2);
    ammeter1Display(i1);
}
function i2Assign(cur) {
    i2 = cur.toFixed(2);
    ammeter2Display(i2);
}
function i3Assign(cur) {
    i3 = cur.toFixed(2);
    ammeter3Display(i3);
}

function resis1Assign(res) {
  r1 = res;
  // console.log(r1);
}

function resis2Assign(res) {
  r2 = res;
  // console.log(r2);
}

function resisfAssign(res) {
  rf = res;
  // console.log(rf);
}

function v0Assign(volt) {
  v0 = volt;
  console.log("v0",v0);
}


function startSimulation(){
  $('#voltage1Slider').slider("enable");
  $('#voltage1Spinner').spinner("enable"); 
  // $('#voltage2Slider').slider("enable");
  $('#resistor1Slider').slider("enable");
  $('#resistor1Spinner').spinner("enable"); 
  $('#resistor2Spinner').spinner("enable"); 
  $('#resistorfSpinner').spinner("enable"); 
  $('#resistor2Slider').slider("enable"); 
  $('#resistorfSlider').slider("enable"); 
  $("#simulate-btn").prop("disabled", true);
  $("#add-to-table-btn").prop("disabled", false);
  $("#add-I1I2-btn").prop("disabled", false);
  $("#result-btn").prop("disabled", false);
  document.getElementById('message').innerHTML = "Vary the voltage and resistor values ,click on add to table";
  
};

function addtable(){
  document.getElementById('comments-tab').style.display = 'block'
  var table=document.getElementById("mytable");
  var row=table.insertRow(-1);
  var cell1=row.insertCell(0);
  var cell2=row.insertCell(1);
  var cell3=row.insertCell(2);
  var cell4=row.insertCell(3);
  var cell5=row.insertCell(4);
  var cell6=row.insertCell(5);

  cell1.innerHTML= v1;
  cell2.innerHTML=itotal;
  cell3.innerHTML= i1;
  cell4.innerHTML= i2;
  cell5.innerHTML= i3;
  cell6.innerHTML= itotal;
  // cell5.classList.add("column-font");
  document.getElementById('message').innerHTML = "Click on Result button";
}

function showResult() {
  // $('#resultI').text("Value of I(Total Current Throught the Circuit): "+req.toFixed(2));
  document.getElementById('result-display-div').style.display = 'block'    
  
}


// function toggleButton() {
//   var button = document.getElementById('simulate-btn');
//   button.disabled = !button.disabled;
//   // var button = document.getElementById('add-to-table');
//   // button.disabled = !button.disabled;
//   var button = document.getElementById('result-btn');
//   button.disabled = !button.disabled;
// }

window.addEventListener("load", varinit);
