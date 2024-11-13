var red=0;
var black=0;
let check=1;
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
//const canvas = document.getElementById("canvas");
//const ctx = canvas.getContext("2d");
const points=[
  {x:210,y:92,color:'red'},
  {x:350,y:90,color:'red'},
  {x:210,y:189,color:'black'},
  {x:350,y:190,color:'black'},

];
var red=0;
var black=0;
function drawPoint(x, y, color) {
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, 2 * Math.PI, false);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}
// function lineDraw(pt1x, pt1y, pt2x, pt2y) {
//   // ctx.clearRect(0, 0, 500, 500);
//   ctx.lineWidth = 0.5;
//   ctx.beginPath();
//   ctx.moveTo(pt1x, pt1y);
//   ctx.lineTo(pt2x,pt2y);
//   ctx.stroke();
//   drawArc(pt2x, pt2y);
// }
// function drawArc(pt1x, pt1y) {
//   ctx.lineWidth = 0.5;
//   ctx.beginPath();
//   ctx.moveTo(pt1x, pt1y);
//   //ctx.arc(pt1x, pt1y, 5, 0, 2 * Math.PI, false);
//   ctx.fill();
//   ctx.closePath();

// }

points.forEach((point) => {
  drawPoint(point.x, point.y, point.color);
});

let clickedPoints = [];

canvas.addEventListener("click", function (e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  // Find the clicked point
  const clickedPoint = points.find((point) => {
    const distance = Math.sqrt((x - point.x) ** 2 + (y - point.y) ** 2);
    return distance <= 5;
  });

  if (clickedPoint) {
    clickedPoints.push(clickedPoint);
    drawPoint(clickedPoint.x, clickedPoint.y, clickedPoint.color);

    if (clickedPoints.length === 2) {
      if (clickedPoints[0].color =="red"&& clickedPoints[1].color=="red") {
        // Connect points with a straight line using their respective color
        ctx.lineWidth = 2;
        ctx.strokeStyle = clickedPoints[0].color;
        ctx.beginPath();
        ctx.moveTo(clickedPoints[0].x, clickedPoints[0].y);
        ctx.lineTo(clickedPoints[1].x, clickedPoints[1].y);
        red=1;
        console.log("red=",red);
        ctx.stroke();
        ctx.strokeStyle="red";
      }else if(clickedPoints[0].color =="black"&& clickedPoints[1].color=="black") {
          // Connect points with a straight line using their respective color
          ctx.lineWidth = 2;
          ctx.strokeStyle = clickedPoints[0].color;
          ctx.beginPath();
          ctx.moveTo(clickedPoints[0].x, clickedPoints[0].y);
          ctx.lineTo(clickedPoints[1].x, clickedPoints[1].y);
          
        black=1;
        console.log("black=",black);
        ctx.stroke();
        ctx.strokeStyle = "black"; // Reset the stroke style to black
      }
      // canvas
      clickedPoints = [];
    }
  }
});
const Width=590;
canvas.width=Width;
const Height=300;
canvas.height=Height;
//edited

ctx.beginPath();
ctx.fillStyle="orange";
ctx.fillRect(30,55,200,150);
ctx.fillStyle="gray";
ctx.fillRect(80,90,100,70);
ctx.stroke();
function drawTerminalPoint(x, y, radius,fillcolor) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = fillcolor; // Adjust the color as needed
  ctx.fill();
  
}

// Call the drawTerminalPoint function twice to add two terminal points
drawTerminalPoint(210, 92, 4,"red");
 // Adjust the coordinates and radius as needed
drawTerminalPoint(210, 189, 4,"black"); // Adjust the coordinates and radius as needed

//draw a voltmeter
// Variables for controlling the voltmeter
function updateVoltage(newVoltage) {
  voltage = newVoltage;
  drawVoltmeter();
}
//resistor naming
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("Resistor",410,60)
//Ammeter naming
ctx.font="bold small-caps 12px Arial";
ctx.textBaseline="middle";
ctx.fillText("Ammeter",535,140)
//battery naming
// ctx.font="bold small-caps 15px Arial";
// ctx.textBaseline="middle";
// ctx.fillText("Battery",390,220)
// //positive terminal
// ctx.font="bold small-caps 15px Arial";
// ctx.textBaseline="middle";
// ctx.fillText("-",400,200)
// //negative terminal
// ctx.font="bold small-caps 15px Arial";
// ctx.textBaseline="middle";
// ctx.fillText("+",425,200)
//gnd terminal naming
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("GND",470,230)
//voltmeter naming
ctx.font="bold small-caps 15px Arial";
ctx.textBaseline="middle";
ctx.fillText("VOLTMETER",85,70)
////textbox
////textbox
function voltmeterDisplay(voltmeter){
  ctx.fillStyle = "white"
  ctx.fillRect(90,115,80,25)
  ctx.fillStyle = "black"
  ctx.font = "25px Arial";
  let text = ` ${voltmeter} V`
  ctx.fillText(text,105,130);
}
function resistanceDisplay(resistance){
  ctx.fillStyle = "white";
  ctx.fillRect(400,20,70,25)
  ctx.fillStyle = "black"
  ctx.font = "20px Arial";
  let text = ` ${resistance} Ω`
  ctx.fillText(text,415,35);
}
function currentDisplay(current){
  ctx.fillStyle = "white";
  ctx.fillRect(550,155,50,25)
  ctx.fillStyle = "black"
  ctx.font = "20px Arial";
  let text = ` ${current}A`
  ctx.fillText(text,550,170);
}


let isDrawing = false;
let startPoint = { x: 0, y: 0 };
let endPoint = { x: 0, y: 0 };
const wires = [];
//const BatteryFrontX = 150;
//const BatteryBackX = 300;
let movePoints = [];




// function getMousePosition(canvas, event) {
//   let rect = canvas.getBoundingClientRect();
//   let x = event.clientX - rect.left;
//   let y = event.clientY - rect.top;
//   movePoints.push({
//     x,
//     y,
//   });
//   console.log(movePoints);
// }

// canvas.addEventListener("mouseup", function (e) {
//   getMousePosition(canvas, e);

//   const pt1x = movePoints[movePoints.length - 1].x;
//   const pt1y = movePoints[movePoints.length - 1].y;
//   drawArc(pt1x, pt1y);
//   const pt2x = movePoints[movePoints.length - 2].x;
//   const pt2y = movePoints[movePoints.length - 2].y;
//   drawArc(pt2x, pt2y);
//   lineDraw(pt1x, pt1y, pt2x, pt2y);

//   movePoints = [];
// });



// Function to draw a resistor
function drawResistor(x, y) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - 50, y - 1);
    ctx.lineTo(x + 1, y - 1);
    ctx.lineTo(x + 10, y + 30);
    ctx.lineTo(x + 30, y - 20);
    ctx.lineTo(x + 40, y + 30);
    ctx.lineTo(x + 60, y - 20);
    ctx.lineTo(x + 60, y + 30);
    ctx.lineTo(x + 80, y - 20);
    ctx.lineTo(x + 89, y +1);
    ctx.lineTo(x +119, y +1);
    //ctx.lineTo(x + 100, y + 30);
    //ctx.lineTo(x + 115, y - 10);
    //ctx.lineTo(x + 200, y - 10);
    ctx.stroke();
    // Draw connection points
    ctx.fillStyle = 'red';
    ctx.beginPath();
    //ctx.arc(350, y, 4, 0, 2 * Math.PI);
    ctx.fill();
    //ctx.fillStyle='black';
    //ctx.beginPath();
    //ctx.arc(518, y, 0, 0, 2 * Math.PI);
    //ctx.fill();
    drawTerminalPoint(350, 90, 4,"red");
    // Adjust the coordinates and radius as needed
   //drawTerminalPoint(350, 189, 4,"black"); // Adjust the coordinates and radius as needed

}

// Function to draw a battery
function drawBattery(x, y) {
    // Draw battery body
    ctx.beginPath();
    ctx.lineTo(x+100,y+10);
    ctx.moveTo(x+100,y-30);
     //ctx.moveTo(x-30,y+20);
     //ctx.lineTo(x-30,y-20);
     //gctx.moveTo(x-40,y+10);
    // ctx.lineTo(x-40,y-10);
    ctx.moveTo(x+70,y-1);
    ctx.lineTo(x-100,y-1);
    // ctx.moveTo(x-100,y-1);
    // ctx.lineTo(x-40,y-1);
    ctx.stroke();
    // Draw connection points
    ctx.fillStyle = 'black';
    ctx.beginPath();
    //ctx.arc(350, y, 4, 0, 2 * Math.PI);
    ctx.fill();
    //ctx.fillStyle='black';
    //ctx.beginPath();
    //ctx.arc(519, y, 0, 0, 2 * Math.PI);
    //ctx.fill();
    drawTerminalPoint(350, 190, 4,"black");
}
 //x=300+219, y = 90
 ctx.beginPath();
 ctx.strokeStyle="black";
 ctx.moveTo(518,90);
 ctx.lineTo(520,190)
 ctx.stroke();
//draw ground
// Draw the three horizontal lines
ctx.beginPath();
ctx.moveTo(510, 210);
ctx.lineTo(465, 210);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(505, 215);
ctx.lineTo(470, 215);
ctx.stroke();
ctx.beginPath();
        ctx.moveTo(500, 220);
        ctx.lineTo(475, 220);
        ctx.stroke();

        // Draw the straight line attached to one of the horizontal lines
        ctx.beginPath();
        ctx.moveTo(487, 210);
        ctx.lineTo(487, 190);
        ctx.stroke();

function drawComponents() {
    drawResistor(400, 90);
    drawBattery(450, 190);
    
   
}
ctx.fillStyle = "pink";
ctx.beginPath();
ctx.arc(518, 140, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// Ammetre symbol naming
ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("A", 512, 140)



// function drawWires() {
//     wires.forEach((wire) => {
//         drawWire(wire.start, wire.end);
//     });
// }
canvas.addEventListener('click',function(event){
  const clickX=event.clientX-canvas.getBoundingClientRect().left;
  const clickY=event.clientY-canvas.getBoundingClientRect().top;
  // Check if the click is on the ending red point
  if ((clickX >= 210) && (clickX <= 350) && (clickY >= 92) && (clickY <= 90)) {
    // Draw a red line between the starting red point and ending red point
    let color = "red ";
    ctx.strokeStyle = color;
    console.log("mouse line red ");
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(210, 92);
    ctx.lineTo(350, 90);
    ctx.stroke();
    if(color == "red"){
      console.log("red line");
      red = 1;
    }
  }

  if (( clickX >= 210) && (clickX <= 350) && (clickY >= 189) && (clickY <= 190)) {

    let color = "black";
    ctx.strokeStyle = color;
   //console.log("mouse line black");
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(210, 189);
    ctx.lineTo(350, 190);
    ctx.stroke();
    if(color == "black"){
      console.log("black line");
      black = 1;
    }
  }
//  if ( clickX >= 368 && clickX <= 369 && clickY >= 90 && clickY <= 190 ) {
//   // console.log("mouse line green");
//   let colour = "green"
//   ctx.strokeStyle = colour;
//   ctx.lineWidth = 2;
//   ctx.beginPath();
//   ctx.moveTo(210, 189);
//   ctx.lineTo(350, 190);
//   ctx.stroke();
//   if(colour == 'green'){
//     console.log("green line");
//     green = 1;
//   }
// }
});
ctx.strokeStyle="black";
ctx.lineWidth=1;

drawComponents();

//Initialise system parameters here
function varinit() {
  varchange();
  //Variable slider and number input types
  $("#Slider").slider("value", 1500);
  $("#currentSlider").slider("value", 1500);
  $("#currentSpinner").spinner("value", 1500);
  $("#resistanceSlider").slider("value", 0.05);
  $("#resistanceSpinner").spinner("value", 0.05);
  $("#CsArea").spinner("value", 0.01);
  $("#Ivalue").spinner("value", 0.01);

  $('#currentSlider').slider("disable");
  $('#currentSpinner').spinner("disable");
  $('#resistanceSlider').slider("disable");
  $('#resistanceSpinner').spinner("disable");
  $("#message").text("Complete circuit");
  $(" #resistance, #current").text(0);
}
function varchange() {
 
  $("#currentSlider").slider({ max:11, min:-1, step: 1});
  $("#currentSpinner").spinner({ max:10, min:0, step: 1 });

  $("#currentSlider").on("slide", function (e, ui) {
    $("#currentSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#currentSpinner").on("spin", function (e, ui) {
    $("#currentSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#currentSpinner").on("change", function () {
    varchange();
  });
  $("#currentSpinner").on("touch-start", function () {
    varchange();
  });

  $("#resistanceSlider").slider({ max:11, min: -1, step: 1 });
  $("#resistanceSpinner").spinner({ max:10, min: 0, step:1 });

  $("#resistanceSlider").on("slide", function (e, ui) {
    $("#resistanceSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistanceSpinner").on("spin", function (e, ui) {
    $("#resistanceSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });

  $("#resistanceSpinner").on("change", function () {
    varchange();

  });
  $("#resistanceSpinner").on("touch-start", function () {
  varchange();
  });
  time=0;
  varupdate();
};
  $("#CsArea").spinner({ max: 1, min: 0.01, step: 0.0001 });
  $("#Ivalue").spinner({ max: 1, min: 0.01, step: 0.0001 });

function varupdate() {
   //updating slider location with change in spinner(debug)
  $("#currentSpinner").spinner("value", $("#currentSlider").slider("value"));
  $("#resistanceSpinner").spinner("value", $("#resistanceSlider").slider("value"));
 //Updating variables
  current = $("#currentSpinner").spinner("value");
  resistance = $("#resistanceSpinner").spinner("value");
  //document.getElementById('volt').innerHTML = (current*resistance+ "Volts");
  //document.getElementById('voltvalue').value = (current*resistance+"V");
  voltmeterDisplay(current*resistance);
  //document.getElementById('restvalue').value = resistance+"Ω";
  resistanceDisplay(resistance);
  currentDisplay(current);
  //document.getElementById('currvalue').value = current+"A";
};
function display() {
  $("#p3").text("Voltage has been observed across the voltmeter.");
  //document.getElementById('res').innerHTML = "voltage has been observed across the voltmeter ";
};
function checkConnection() {
  //console.log("working check");
  if(red && black){
     //console.log("working red black");
    alert('Circuit connection is correct ')
    $('#currentSlider').slider("enable");
    $('#currentSpinner').spinner("enable");
    $('#resistanceSlider').slider("enable");
    $('#resistanceSpinner').spinner("enable");
    //$('#thresholdSlider').slider("enable");
    //$('#thresholdSpinner').spinner("enable");
    $("#check-btn").prop("disabled", true);
    //$("#message").text("Set the threshold current and click on simulate button");
    //$("#threshold-btn, #simulate-btn").prop("disabled", false);
    varupdate();
    //display();
  }
  else{
    if(red == 0 ){
      if(black == 0){
        alert('complete the circuit connection')
        return;
      }
      else{
        alert(' connect live wire')
        console.log("live wire");
      }
      }
    if(black == 0){
        alert("connect neutral wire")
        console.log("neutral wire");
      }
    }
  }
function parameterSliderEnable() {
  console.log("working");
  $('#currentSlider').slider("enable");
  $('#currentSpinner').spinner("enable");
  $('#resistanceSlider').slider("enable");
  $('#resistanceSpinner').spinner("enable");
  //$('#thresholdSlider').slider("disable");
  //$('#thresholdSpinner').spinner("disable");
  $("#message").text("Vary Parameters");
  display();
}


  // document.getElementById('volt').innerHTML = (current*resistance);
//}
window.addEventListener("load", varinit);
