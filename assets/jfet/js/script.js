var voltd = 0;
var curd = 0;
let vgs = [];
let current = [];
let count=0;
// let check=1;
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.addEventListener("click", function (e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (clickedPoint) {
    clickedPoints.push(clickedPoint);
    drawPoint(clickedPoint.x, clickedPoint.y, clickedPoint.color);

    if (clickedPoints.length === 2) {
      if (clickedPoints[0].color == "red" && clickedPoints[1].color == "red") {
        // Connect points with a straight line using their respective color
        ctx.lineWidth = 2;
        ctx.strokeStyle = clickedPoints[0].color;
        ctx.beginPath();
        ctx.moveTo(clickedPoints[0].x, clickedPoints[0].y);
        ctx.lineTo(clickedPoints[1].x, clickedPoints[1].y);
        red = 1;
        console.log("red=", red);
        ctx.stroke();
        ctx.strokeStyle = "red";
      } else if (
        clickedPoints[0].color == "black" &&
        clickedPoints[1].color == "black"
      ) {
        // Connect points with a straight line using their respective color
        ctx.lineWidth = 2;
        ctx.strokeStyle = clickedPoints[0].color;
        ctx.beginPath();
        ctx.moveTo(clickedPoints[0].x, clickedPoints[0].y);
        ctx.lineTo(clickedPoints[1].x, clickedPoints[1].y);
        black = 1;
        console.log("black=", black);
        ctx.stroke();
        ctx.strokeStyle = "black"; // Reset the stroke style to black
      }
      // canvas
      clickedPoints = [];
    }
  }
});
const Width = 590;
canvas.width = Width;
const Height = 300;
canvas.height = Height;
//// third edited
/// battery
ctx.beginPath();
lineWidth = 4;
ctx.moveTo(15, 130);
ctx.lineTo(45, 130);
ctx.moveTo(25, 140);
ctx.lineTo(35, 140);
ctx.moveTo(15, 150);
ctx.lineTo(45, 150);
ctx.moveTo(25, 160);
ctx.lineTo(35, 160);
ctx.moveTo(28, 75);
ctx.lineTo(28, 130);
ctx.moveTo(30, 160);
ctx.lineTo(30, 280);
ctx.moveTo(30, 280);
ctx.lineTo(555, 280);
ctx.moveTo(28, 75);
ctx.lineTo(90, 75);
ctx.stroke();
// resistor
ctx.beginPath();
ctx.moveTo(90, 125);
ctx.lineTo(90, 75);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(90, 125);
ctx.lineTo(105, 130);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(105, 130);
ctx.lineTo(80, 135);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(80, 135);
ctx.lineTo(105, 140);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(105, 140);
ctx.lineTo(80, 145);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(80, 145);
ctx.lineTo(105, 150);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(105, 150);
ctx.lineTo(80, 155);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(80, 155);
ctx.lineTo(90, 160);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(90, 160);
ctx.lineTo(90, 280);
ctx.stroke();
//arow
ctx.beginPath();
ctx.moveTo(105, 140);
ctx.lineTo(120, 135);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(105, 140);
ctx.lineTo(120, 145);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(105, 140);
ctx.lineTo(165, 140);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(165, 65);
ctx.lineTo(165, 140);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(165, 65);
ctx.lineTo(205, 65);
ctx.stroke();
//ammeter1

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(205, 65, 21, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
//Ammeter naming
ctx.font = "bold small-caps 12px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Ammeter", 205, 94);
//ammeter symbol naming
ctx.fillStyle = "black";
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("A", 198, 63);
ctx.beginPath();
ctx.moveTo(205, 85);
ctx.lineTo(205, 180);
ctx.stroke();
//voltmeter symbol
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(205, 180, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.fillStyle = "black";
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("V", 198, 184);
ctx.beginPath();
ctx.moveTo(205, 199);
ctx.lineTo(205, 280);
ctx.stroke();
//////BJT
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(280, 70, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.beginPath();
ctx.moveTo(265, 70);
ctx.lineTo(275, 65);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(265, 60);
ctx.lineTo(275, 65);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(225, 65);
ctx.lineTo(275, 65);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(275, 50);
ctx.lineTo(275, 85);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(275, 60);
ctx.lineTo(300, 60);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(275, 75);
ctx.lineTo(300, 75);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(300, 75);
ctx.lineTo(300, 280);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(300, 25);
ctx.lineTo(300, 60);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(300, 25);
ctx.lineTo(380, 25);
ctx.stroke();
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(380, 25, 18, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
//Ammeter naming
ctx.font = "bold small-caps 12px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Ammeter", 385, 65);
//ammeter symbol naming
ctx.fillStyle = "black";
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("A", 373, 24);
ctx.fillStyle = "black";
ctx.font = " bold small-caps 15px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Vgg", 1, 174);
ctx.fillStyle = "black";
ctx.font = " bold small-caps 15px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Rh1", 120, 124);
ctx.fillStyle = "black";
ctx.font = " bold small-caps 15px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Ig", 230, 50);
ctx.fillStyle = "black";
ctx.font = " bold small-caps 15px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Vgs", 220, 210);
ctx.fillStyle = "black";
ctx.font = " bold small-caps 15px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Vds", 390, 210);
ctx.fillStyle = "black";
ctx.font = " bold small-caps 15px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Id", 400, 15);
ctx.fillStyle = "black";
ctx.font = " bold small-caps 14px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Rh2", 452, 115);
ctx.fillStyle = "black";
ctx.font = " bold small-caps 14px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Vd", 572, 165);
ctx.beginPath();
ctx.moveTo(383, 42);
ctx.lineTo(383, 180);
ctx.stroke();
//voltmeter
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(380, 180, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.fillStyle = "black";
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("V", 373, 184);
ctx.beginPath();
ctx.moveTo(383, 199);
ctx.lineTo(383, 280);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(398, 24);
ctx.lineTo(450, 24);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(450, 24);
ctx.lineTo(450, 136);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(450, 136);
ctx.lineTo(470, 136);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(465, 130);
ctx.lineTo(470, 136);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(465, 142);
ctx.lineTo(470, 136);
ctx.stroke();
////rheostat
ctx.beginPath();
ctx.moveTo(480, 125);
ctx.lineTo(480, 75);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(480, 125);
ctx.lineTo(495, 130);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(495, 130);
ctx.lineTo(470, 135);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(470, 135);
ctx.lineTo(495, 140);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(495, 140);
ctx.lineTo(470, 145);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(470, 145);
ctx.lineTo(495, 150);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(495, 150);
ctx.lineTo(470, 155);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(470, 155);
ctx.lineTo(480, 160);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(480, 160);
ctx.lineTo(480, 280);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(480, 75);
ctx.lineTo(540, 75);
ctx.stroke();
ctx.beginPath();
lineWidth = 4;
ctx.moveTo(540, 130);
ctx.lineTo(570, 130);
ctx.moveTo(550, 140);
ctx.lineTo(560, 140);
ctx.moveTo(540, 150);
ctx.lineTo(570, 150);
ctx.moveTo(550, 160);
ctx.lineTo(560, 160);
ctx.moveTo(553, 75);
ctx.lineTo(553, 130);
ctx.moveTo(555, 160);
ctx.lineTo(555, 280);
ctx.moveTo(540, 75);
ctx.lineTo(554, 75);
ctx.stroke();
const tester = document.getElementById("tester");

/* Current Plotly.js version */
// console.log(Plotly.BUILD);
function voltmeter1Display(r1) {
  ctx.fillStyle = "white";
  ctx.fillRect(226, 165, 69, 35);
  ctx.fillStyle = "black";
  ctx.font = "17px Arial";
  let text = `${r1.toFixed(2)}V`;
  ctx.fillText(text, 225, 185);
}
function voltmeter2Display(r2) {
  ctx.fillStyle = "white";
  ctx.fillRect(405, 155, 60, 35);
  ctx.fillStyle = "black";
  ctx.font = "17px Arial";
  let text = `${r2.toFixed(1)}V`;
  ctx.fillText(text, 405, 175);
  votd = r2;
}
function current2Display(r3) {
  ctx.fillStyle = "white";
  ctx.fillRect(394, 40, 53, 35);
  ctx.fillStyle = "black";
  ctx.font = "17px Arial";
  let text = ` ${r3.toFixed(1)}A`;
  ctx.fillText(text, 400, 55);
  curd = r3;
}
function rh1Display(r5) {
  ctx.fillStyle = "white";
  ctx.fillRect(104, 70, 59, 45);
  ctx.fillStyle = "black";
  ctx.font = "17px Arial";
  let text = ` ${r5}kΩ`;
  ctx.fillText(text, 105, 90);
  //curd = r3;
}
function rh2Display(r6) {
  ctx.fillStyle = "white";
  ctx.fillRect(484, 90, 65, 35);
  ctx.fillStyle = "black";
  ctx.font = "17px Arial";
  let text = ` ${r6}kΩ`;
  ctx.fillText(text, 485, 110);
  //curd = r3;
}
let isDrawing = false;
let startPoint = { x: 0, y: 0 };
let endPoint = { x: 0, y: 0 };
const wires = [];
let movePoints = [];
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
  ctx.lineTo(x + 89, y + 1);
  ctx.lineTo(x + 119, y + 1);
  ctx.stroke();
  // Draw connection points
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.fill();
  drawTerminalPoint(350, 90, 4, "red");
}
// Function to draw a battery
function drawBattery(x, y) {
  // Draw battery body
  ctx.beginPath();
  ctx.lineTo(x + 100, y + 10);
  ctx.moveTo(x + 100, y - 30);
  ctx.moveTo(x - 30, y + 20);
  ctx.lineTo(x - 30, y - 20);
  ctx.moveTo(x - 40, y + 10);
  ctx.lineTo(x - 40, y - 10);
  ctx.moveTo(x + 70, y - 1);
  ctx.lineTo(x - 100, y - 1);
  ctx.moveTo(x - 100, y - 1);
  ctx.lineTo(x - 40, y - 1);
  ctx.stroke();
  // Draw connection points
  ctx.fillStyle = "black";
  ctx.beginPath();
  //ctx.arc(350, y, 4, 0, 2 * Math.PI);
  ctx.fill();
  drawTerminalPoint(350, 190, 4, "black");
}
canvas.addEventListener("click", function (event) {
  const clickX = event.clientX - canvas.getBoundingClientRect().left;
  const clickY = event.clientY - canvas.getBoundingClientRect().top;
  // Check if the click is on the ending red point
  if (clickX >= 210 && clickX <= 350 && clickY >= 92 && clickY <= 90) {
    // Draw a red line between the starting red point and ending red point
    let color = "red ";
    ctx.strokeStyle = color;
    console.log("mouse line red ");
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(210, 92);
    ctx.lineTo(350, 90);
    ctx.stroke();
    if (color == "red") {
      console.log("red line");
      red = 1;
    }
  }

  if (clickX >= 210 && clickX <= 350 && clickY >= 189 && clickY <= 190) {
    let color = "black";
    ctx.strokeStyle = color;
    //console.log("mouse line black");
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(210, 189);
    ctx.lineTo(350, 190);
    ctx.stroke();
    if (color == "black") {
      console.log("black line");
      black = 1;
    }
  }
});

//Initialise system parameters here
function varinit() {
  varchange();
  //Variable slider and number input types
  $("#Slider").slider("value", 1500);
  $("#r2Slider").slider("value", 1500);
  $("#r2Spinner").spinner("value", 1500);
  $("#r1Slider").slider("value", 0.05);
  $("#r1Spinner").spinner("value", 0.05);
  $("#CsArea").spinner("value", 0.01);
  $("#Ivalue").spinner("value", 0.01);
  $("#r2Slider").slider("disable");
  $("#r2Spinner").spinner("disable");
  $("#r1Slider").slider("disable");
  $("#r1Spinner").spinner("disable");
  $("#message").text("Click on start");
  $(" #r1, #r2").text(0);
}
function varchange() {
  $("#r2Slider").slider({ max: 100, min: 1, step: 1 });
  $("#r2Spinner").spinner({ max: 100, min: 0, step: 1 });

  $("#r2Slider").on("slide", function (e, ui) {
    $("#r2Spinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#r2Spinner").on("spin", function (e, ui) {
    $("#r2Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#r2Spinner").on("change", function () {
    varchange();
  });
  $("#r2Spinner").on("touch-start", function () {
    varchange();
  });
  $("#r1Slider").slider({ max: 100, min: 0, step: 1 });
  $("#r1Spinner").spinner({ max: 100, min: 0, step: 1 });

  $("#r1Slider").on("slide", function (e, ui) {
    $("#r1Spinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#r1Spinner").on("spin", function (e, ui) {
    $("#r1Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });

  $("#r1Spinner").on("change", function () {
    varchange();
  });
  $("#r1Spinner").on("touch-start", function () {
    varchange();
  });
  time = 0;
  varupdate();
}
$("#CsArea").spinner({ max: 1, min: 0.01, step: 0.0001 });
$("#Ivalue").spinner({ max: 1, min: 0.01, step: 0.0001 });

function varupdate() {
  //updating slider location with change in spinner(debug)
  $("#r2Spinner").spinner("value", $("#r2Slider").slider("value"));
  $("#r1Spinner").spinner("value", $("#r1Slider").slider("value"));
  //Updating variables
  r5 = $("#r1Spinner").spinner("value");
  r6 = $("#r2Spinner").spinner("value");
  r2 = $("#r2Spinner").spinner("value") * 0.1;
  r1 = $("#r1Spinner").spinner("value") * 0.02;
  r3 = 10 * ((1 - r1 / r2) * (1 - r1 / r2));
  voltmeter1Display(r1);
  voltmeter2Display(r2);
  current2Display(r3);
  rh1Display(r5);
  rh2Display(r6);
}

function addtable() {
   //rowCount =+1;

  var table = document.getElementById("mytable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);

  cell1.innerHTML = votd.toFixed(4);
  cell2.innerHTML = curd.toFixed(4);

  //cell5.classList.add("column-font");
  vgs.push(votd.toFixed(4));
  current.push(curd.toFixed(4));
  //  plotGraph();
}
// plotGraph();
//show hidden values

function showvalue() {
  var hiddenCells = document.querySelectorAll(".column-font");
  hiddenCells.forEach(function (cell) {
    cell.style.display = "table-cell";
  });
}
function checkConnection() {
  //console.log("working check");
  if (red && black) {
    //console.log("working red black");
    alert("Circuit connection is correct ");
    $("#r2Slider").slider("enable");
    $("#r2Spinner").spinner("enable");
    $("#r1Slider").slider("enable");
    $("#r1Spinner").spinner("enable");
    //$('#thresholdSlider').slider("enable");
    //$('#thresholdSpinner').spinner("enable");
    $("#check-btn").prop("disabled", true);
    //$("#message").text("Set the threshold current and click on simulate button");
    //$("#threshold-btn, #simulate-btn").prop("disabled", false);
    varupdate();
    //display();
  } else {
    if (red == 0) {
      if (black == 0) {
        alert("complete the circuit connection");
        return;
      } else {
        alert(" connect live wire");
        console.log("live wire");
      }
    }
    if (black == 0) {
      alert("connect neutral wire");
      console.log("neutral wire");
    }
  }
}

function parameterSliderEnable() {
  console.log("working");
  $("#r2Slider").slider("disable");
  $("#r2Spinner").spinner("disable");
  $("#r1Slider").slider("enable");
  $("#r1Spinner").spinner("enable");
  //$('#thresholdSlider').slider("disable");
  //$('#thresholdSpinner').spinner("disable");
  $("#message").text("Rh1 is Constant Since Vgs needs to be constant throughout the simulation ");
  // display();
}
function setR1() {
  $("#set-r1").prop("disabled",true);
  $("#r2Slider").slider("enable");
  $("#r2Spinner").spinner("enable");
  $("#r1Slider").slider("disable");
  $("#r1Spinner").spinner("disable");
  $("#message").text("Vary Rh2 and Click on Add to table ");
}

//   document.getElementById('volt').innerHTML = (current*resistance);
// }
window.addEventListener("load", varinit);
function plotGraph() {
  console.log(1);
  Plotly.newPlot(
    tester,
    [
      {
        x: vgs,
        y: current,
      },
    ],
    {
      margin: { t: 0 },
      xaxis: {
        title: 'Vgs  (volts)', // Add your desired X-axis name here
      },
      yaxis: {
        title: 'Id   (A)', // Add your desired Y-axis name here
      },
    },
    { showSendToCloud: true }
  );
  $("#message").text("Graph is plotted below according to Rh1 and Rh2 value  ");
}
