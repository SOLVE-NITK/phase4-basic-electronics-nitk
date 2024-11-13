var voltage=v1 =v2 =v3 =0;
v_1=v_2=0.00;

// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");


// function roundRect(x, y, width, height, radius) {
//   ctx.beginPath();
//   ctx.moveTo(x + radius, y);
//   ctx.lineTo(x + width - radius, y);
//   ctx.arcTo(x + width, y, x + width, y + radius, radius);
//   ctx.lineTo(x + width, y + height - radius);
//   ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
//   ctx.lineTo(x + radius, y + height);
//   ctx.arcTo(x, y + height, x, y + height - radius, radius);
//   ctx.lineTo(x, y + radius);
//   ctx.arcTo(x, y, x + radius, y, radius);
//   ctx.closePath();
// }

// ctx.strokeStyle = "black";
// ctx.lineWidth = 2;

// // GND terminal naming
// ctx.font = "bold small-caps 20px Arial";
// ctx.textBaseline = "middle";
// ctx.fillText("GND", 410, 415)

// // gnd terminal
// ctx.fillStyle = "black";
// roundRect(395, 425, 10, 10, 6);
// ctx.fill();

// ctx.strokeStyle = "black";
// ctx.lineWidth = 2;

// // Vertical lines
// ctx.beginPath();
// ctx.moveTo(400, 62);
// ctx.lineTo(400, 171);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(400, 172);
// ctx.lineTo(400, 271);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(100, 62);
// ctx.lineTo(100, 235);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(400, 345);
// ctx.lineTo(400, 430);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(700, 62);
// ctx.lineTo(700, 271);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(700, 345);
// ctx.lineTo(700, 430);
// ctx.stroke();


// ctx.beginPath();
// ctx.moveTo(100, 265);
// ctx.lineTo(100, 430);
// ctx.stroke();

// // Horizontal lines
// ctx.beginPath();
// ctx.moveTo(100, 430);
// ctx.lineTo(700, 430);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(100, 62);
// ctx.lineTo(160, 62);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(299, 62);
// ctx.lineTo(400, 62);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(200, 62);
// ctx.lineTo(230, 62);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(400, 62);
// ctx.lineTo(530, 62);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(570, 62);
// ctx.lineTo(701, 62);
// ctx.stroke();

// //power supply
// ctx.beginPath();
// ctx.moveTo(75, 235);
// ctx.lineTo(125, 235);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(85, 245);
// ctx.lineTo(115, 245);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(75, 255);
// ctx.lineTo(125, 255);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(85, 265);
// ctx.lineTo(115, 265);
// ctx.stroke();

// // power supply  naming
// ctx.font = "bold small-caps 20px Arial";
// ctx.textBaseline = "middle";
// ctx.fillText("+ve", 55, 210)

// // negeative terminal naming
// ctx.font = "bold small-caps 20px Arial";
// ctx.textBaseline = "middle";
// ctx.fillText("-ve", 60, 290)
// // ctx.beginPath();
// // ctx.moveTo(690, 340);
// // ctx.lineTo(700, 346);
// // ctx.stroke();

// // ctx.beginPath();
// // ctx.moveTo(690, 340);
// // ctx.lineTo(710, 328);
// // ctx.stroke();
      
// // ctx.beginPath();
// // ctx.moveTo(710, 328);
// // ctx.lineTo(690, 316);
// // ctx.stroke();

// // ctx.beginPath();
// // ctx.moveTo(690, 316);
// // ctx.lineTo(710, 302);
// // ctx.stroke();
      
// // ctx.beginPath();
// // ctx.moveTo(710, 302);
// // ctx.lineTo(690, 290);
// // ctx.stroke();
      
// // ctx.beginPath();
// // ctx.moveTo(690, 290);
// // ctx.lineTo(710, 278);
// // ctx.stroke();
      
// // ctx.beginPath();
// // ctx.moveTo(710, 278);
// // ctx.lineTo(698, 271);
// // ctx.stroke();

// // resistor 1

// ctx.beginPath();
// ctx.moveTo(230, 62);
// ctx.lineTo(240,48);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(240, 48);
// ctx.lineTo(250,72);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(250, 72);
// ctx.lineTo(260,48);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(260, 48);
// ctx.lineTo(270,72);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(270, 72);
// ctx.lineTo(280,48);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(280, 48);
// ctx.lineTo(290,72);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(290, 72);
// ctx.lineTo(300,61);
// ctx.stroke();

// // resistor 1 end

// // resistor 2

// ctx.beginPath();
// ctx.moveTo(690, 340);
// ctx.lineTo(700, 346);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(690, 340);
// ctx.lineTo(710, 328);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(710, 328);
// ctx.lineTo(690, 316);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(690, 316);
// ctx.lineTo(710, 302);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(710, 302);
// ctx.lineTo(690, 290);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(690, 290);
// ctx.lineTo(710, 278);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(710, 278);
// ctx.lineTo(698, 271);
// ctx.stroke();

// // resistor 2 end

// //resistor 3
// ctx.beginPath();
// ctx.moveTo(390, 340);
// ctx.lineTo(400, 346);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(390, 340);
// ctx.lineTo(410, 328);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(410, 328);
// ctx.lineTo(390, 316);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(390, 316);
// ctx.lineTo(410, 302);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(410, 302);
// ctx.lineTo(390, 290);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(390, 290);
// ctx.lineTo(410, 278);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(410, 278);
// ctx.lineTo(398, 271);
// ctx.stroke();
// //resistor3 end

// // resister 1 ammeter
// ctx.fillStyle = "white";
// ctx.beginPath();
// ctx.arc(180, 63, 20, 0, 2 * Math.PI);
// ctx.fill();
// ctx.stroke();

// // resistor 1 Ammetre symbol naming
// ctx.fillStyle = "black"
// ctx.font = "bold small-caps 20px Arial";
// ctx.textBaseline = "middle";
// ctx.fillText("A1", 167, 63)

// // resister 2 ammeter
// ctx.fillStyle = "white";
// ctx.beginPath();
// ctx.arc(550, 65, 20, 0, 2 * Math.PI);
// ctx.fill();
// ctx.stroke();

// // Ammetre symbol naming
// ctx.fillStyle = "black"
// ctx.font = "bold small-caps 20px Arial";
// ctx.textBaseline = "middle";
// ctx.fillText("A2", 538, 65)

// // resister 3 ammeter
// ctx.fillStyle = "white";
// ctx.beginPath();
// ctx.arc(400, 185, 20, 0, 2 * Math.PI);
// ctx.fill();
// ctx.stroke();

// // resistor 3 Ammetre symbol naming
// ctx.fillStyle = "black"
// ctx.font = "bold small-caps 20px Arial";
// ctx.textBaseline = "middle";
// ctx.fillText("A3", 387, 186)

// // resistor 1 naming
// ctx.font = "bold small-caps 15px Arial";
// ctx.textBaseline = "middle";
// ctx.fillText("R1", 235, 30)



// // resistor 2 naming
// ctx.font = "bold small-caps 15px Arial";
// ctx.textBaseline = "middle";
// ctx.fillText("R2", 730, 280)


// function resistance2Display(res){
//   let text = `${res} Ω`;
//   ctx.fillStyle = "white";
//   ctx.fillRect(715,300,100,25);
//   ctx.fillStyle = "black";
//   ctx.font = "small-caps 20px Arial";
//   ctx.textBaseline = "middle";
//   ctx.fillText(text, 730, 310)
//   ctx.fillStyle = "black";
// }

// function resistance1Display(res){
//   let text = `${res} Ω`;
//   ctx.fillStyle = "white";
//   ctx.fillRect(155,90,100,25);
//   ctx.fillStyle = "black";
//   ctx.font = "small-caps 20px Arial";
//   ctx.textBaseline = "middle";
//   ctx.fillText(text, 158, 100)
//   ctx.fillStyle = "black";
// }

// function resistance3Display(res){
//   let text = `${res} Ω`;
//   ctx.fillStyle = "white";
//   ctx.fillRect(415,300,100,25);
//   ctx.fillStyle = "black";
//   ctx.font = "small-caps 20px Arial";
//   ctx.textBaseline = "middle";
//   ctx.fillText(text, 418, 310);
//   ctx.fillStyle = "black";
// }

// function voltmeter3display(cur) {
//   let text = `${cur} mA`;
//   ctx.fillStyle = "white";
//   ctx.fillRect(425,200,100,25);
//   ctx.fillStyle = "black";
//   ctx.font = "20px Arial";
//   ctx.textBaseline = "middle";
//   ctx.fillText(text, 430, 210);
//   ctx.fillStyle = "black";
// }

// function voltmeter2display(cur){
//   let text = `${cur} mA`;
//   ctx.fillStyle = "white";
//   ctx.fillRect(510,90,100,25);
//   ctx.fillStyle = "black";
//   ctx.font = "20px Arial";
//   ctx.textBaseline = "middle";
//   ctx.fillText(text, 515, 105);
//   ctx.fillStyle = "black";
// }


// function voltmeter1display(cur) {
//   let text = `${cur} mA`;
//   ctx.fillStyle = "white";
//   ctx.fillRect(280,115,100,25);
//   ctx.fillStyle = "black";
//   ctx.font = "20px Arial";
//   ctx.textBaseline = "middle";
//   ctx.fillText(text, 285, 128);
//   ctx.fillStyle = "black";
// }
// function batteryDisplay(volt){
//   let text = `${volt} V`;
//   ctx.fillStyle = "white";
//   ctx.fillRect(150,270,100,25);
//   ctx.fillStyle = "black";
//   ctx.font = "small-caps 20px Arial";
//   ctx.textBaseline = "middle";
//   ctx.fillText(text, 153, 280)
//   ctx.fillStyle = "black";
// }

// ctx.fillStyle = "black";

// // resistor 3 naming
// ctx.font = "bold small-caps 15px Arial";
// ctx.textBaseline = "middle";
// ctx.fillText("R3", 425, 280)

// //ammeter naming

// ctx.font = "bold small-caps 15px Arial";
// ctx.textBaseline = "middle";
// ctx.fillText("ammeter 1", 130, 30)

// ctx.font = "bold small-caps 15px Arial";
// ctx.textBaseline = "middle";
// ctx.fillText("ammeter 2", 500, 30)

// ctx.font = "bold small-caps 15px Arial";
// ctx.textBaseline = "middle";
// ctx.fillText("ammeter 3", 425, 180)




// // ctx.beginPath();io
// // ctx.moveTo(705, 345);
// // ctx.lineTo(630, 345);
// // ctx.stroke();
      
// // ctx.beginPath();
// // ctx.moveTo(630, 345);
// // ctx.lineTo(630, 215);
// // ctx.stroke();

// // ctx.beginPath();
// // ctx.moveTo(700, 215);
// // ctx.lineTo(630, 215);
// // ctx.stroke();


// //ground
// ctx.beginPath();  
// ctx.moveTo(420, 450);
// ctx.lineTo(380, 450);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(410, 455);
// ctx.lineTo(390, 455);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(395, 460);
// ctx.lineTo(405, 460);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(400, 430);
// ctx.lineTo(400, 450);
// ctx.stroke();



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
function roundRect(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.arcTo(x + width, y, x + width, y + radius, radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arcTo(x + width, y + height, x + width - radius, y + height, radius);
  ctx.lineTo(x + radius, y + height);
  ctx.arcTo(x, y + height, x, y + height - radius, radius);
  ctx.lineTo(x, y + radius);
  ctx.arcTo(x, y, x + radius, y, radius);
  ctx.closePath();
}
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
// GND terminal naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("GND", 410, 415)
// gnd terminal
ctx.fillStyle = "black";
roundRect(395, 425, 10, 10, 6);
ctx.fill();
ctx.fillStyle = "black";
roundRect(395, 58, 10, 10, 6);
ctx.fill();
//resistor terminals
ctx.fillStyle = "red";
roundRect(165, 58, 10, 10, 6);
ctx.fill();
ctx.fillStyle = "red";
roundRect(335, 58, 10, 10, 6);
ctx.fill();
//v2
ctx.fillStyle = "red";
roundRect(546, 58, 10, 10, 6);
ctx.fill();
ctx.fillStyle = "red";
roundRect(715, 58, 10, 10, 6);
ctx.fill();
//v3
ctx.fillStyle = "red";
roundRect(395, 245, 10, 10, 6);
ctx.fill();
ctx.fillStyle = "red";
roundRect(395, 385, 10, 10, 6);
ctx.fill();
//end
ctx.strokeStyle = "black";
ctx.lineWidth = 2;
// Vertical lines
ctx.beginPath();
ctx.moveTo(400, 62);
ctx.lineTo(400, 271);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(100, 62);
ctx.lineTo(100, 235);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(400, 345);
ctx.lineTo(400, 430);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(750, 62);
ctx.lineTo(750, 430);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(100, 265);
ctx.lineTo(100, 430);
ctx.stroke();
// Horizontal lines
ctx.beginPath();
ctx.moveTo(100, 430);
ctx.lineTo(750, 430);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(100, 62);
ctx.lineTo(218, 62);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(290, 62);
ctx.lineTo(400, 62);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(400, 62);
ctx.lineTo(610, 62);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(680, 62);
ctx.lineTo(750, 62);
ctx.stroke();
//power supply
ctx.beginPath();
ctx.moveTo(75, 235);
ctx.lineTo(125, 235);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(85, 245);
ctx.lineTo(115, 245);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(75, 255);
ctx.lineTo(125, 255);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(85, 265);
ctx.lineTo(115, 265);
ctx.stroke();
// power supply  naming
ctx.fillStyle = "black";
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("+ve", 55, 210)

// negeative terminal naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("-ve", 60, 290)
// ctx.beginPath();
// ctx.moveTo(690, 340);
// ctx.lineTo(700, 346);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(690, 340);
// ctx.lineTo(710, 328);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(710, 328);
// ctx.lineTo(690, 316);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(690, 316);
// ctx.lineTo(710, 302);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(710, 302);
// ctx.lineTo(690, 290);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(690, 290);
// ctx.lineTo(710, 278);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(710, 278);
// ctx.lineTo(698, 271);
// ctx.stroke();

// resistor 1

ctx.beginPath();
ctx.moveTo(218, 62);
ctx.lineTo(230,48);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(230, 48);
ctx.lineTo(240,72);
ctx.stroke()

ctx.beginPath();
ctx.moveTo(240, 72);
ctx.lineTo(250,48);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 48);
ctx.lineTo(260,72);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(260, 72);
ctx.lineTo(270,48);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(270, 48);
ctx.lineTo(280,72);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(280, 72);
ctx.lineTo(290,61);
ctx.stroke();

// resistor 1 end

// resistor 2
ctx.beginPath();
ctx.moveTo(610, 62);
ctx.lineTo(620,48);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(620, 48);
ctx.lineTo(630,72);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(630, 72);
ctx.lineTo(640,48);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(640, 48);
ctx.lineTo(650,72);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(650, 72);
ctx.lineTo(660,48);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(660, 48);
ctx.lineTo(670,72);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(670, 72);
ctx.lineTo(680,61);
ctx.stroke();

// resistor 2 end

//resistor 3
ctx.beginPath();
ctx.moveTo(390, 340);
ctx.lineTo(400, 346);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(390, 340);
ctx.lineTo(410, 328);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(410, 328);
ctx.lineTo(390, 316);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(390, 316);
ctx.lineTo(410, 302);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(410, 302);
ctx.lineTo(390, 290);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(390, 290);
ctx.lineTo(410, 278);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(410, 278);
ctx.lineTo(398, 271);
ctx.stroke();
//resistor3 end

//voltmeter1
//ver
ctx.strokeStyle = "red"
ctx.beginPath();
ctx.moveTo(170, 62);
ctx.lineTo(170, 120);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(340, 62);
ctx.lineTo(340, 120);
ctx.stroke();
//hor
ctx.beginPath();
ctx.moveTo(170, 120);
ctx.lineTo(230, 120);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(260, 120);
ctx.lineTo(340, 120);
ctx.stroke();

//voltmeter2
//ver
ctx.beginPath();
ctx.moveTo(550, 62);
ctx.lineTo(550, 120);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(720, 62);
ctx.lineTo(720, 120);
ctx.stroke();
//hor
ctx.beginPath();
ctx.moveTo(720, 120);
ctx.lineTo(550, 120);
ctx.stroke();

//voltmeter3
//ver
ctx.beginPath();
ctx.moveTo(480, 250);
ctx.lineTo(400, 250);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(480, 390);
ctx.lineTo(400, 390);
ctx.stroke();

//hor
ctx.beginPath();
ctx.moveTo(480, 390);
ctx.lineTo(480, 250);
ctx.stroke();

// resister 1 Voltmeter
ctx.strokeStyle = "black";
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(250, 120, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// resistor 1 Voltmeter symbol naming
ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("V1", 237, 123)

// resister 2 Voltmeter
ctx.strokeStyle = "black";
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(630, 120, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// Voltmeter symbol naming
ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("V2", 617, 122)

// resister 3 Voltmeter
ctx.strokeStyle = "black";
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(480, 318, 20, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// resistor 3 Voltmeter symbol naming
ctx.fillStyle = "black"
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("V3", 469, 320)

// resistor 1 naming
ctx.font = "bold small-caps 15px Arial";
ctx.textBaseline = "middle";
ctx.fillText("R1", 220, 30)

// resistor 2 naming
ctx.font = "bold small-caps 15px Arial";
ctx.textBaseline = "middle";
ctx.fillText("R2", 600, 33)

// resistor 3 naming
ctx.font = "bold small-caps 15px Arial";
ctx.textBaseline = "middle";
ctx.fillText("R3", 330, 290)

//Voltmeter naming

ctx.font = "bold small-caps 15px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Voltmeter 1",210, 149)

ctx.font = "bold small-caps 15px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Voltmeter 2", 590, 149)

ctx.font = "bold small-caps 15px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Voltmeter 3", 510, 320)

//battery naming
ctx.font = "bold small-caps 15px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Supply Voltage", 153, 240)

// ctx.beginPath();io
// ctx.moveTo(705, 345);
// ctx.lineTo(630, 345);
// ctx.stroke();
      
// ctx.beginPath();
// ctx.moveTo(630, 345);
// ctx.lineTo(630, 215);
// ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(700, 215);
// ctx.lineTo(630, 215);
// ctx.stroke();


//ground
ctx.strokeStyle = "black";
ctx.beginPath();  
ctx.moveTo(420, 450);
ctx.lineTo(380, 450);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(410, 455);
ctx.lineTo(390, 455);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(395, 460);
ctx.lineTo(405, 460);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(400, 430);
ctx.lineTo(400, 450);
ctx.stroke();
function resistance2Display(res){
  let text = `${res} Ω`;
  ctx.fillStyle = "white";
  ctx.fillRect(640,20,100,25);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 650, 33)
  ctx.fillStyle = "black";
}
function resistance1Display(res){
  let text = `${res} Ω`;
  ctx.fillStyle = "white";
  ctx.fillRect(250,20,70,20);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 253,30)
  ctx.fillStyle = "white";
}
function resistance3Display(res){
  let text = `${res} Ω`;
  ctx.fillStyle = "white";
  ctx.fillRect(310,300,70,25);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 320, 310);
  ctx.fillStyle = "black";
}
function voltmeter3display(V3) {
  let text = `${v3} V`;
  ctx.fillStyle = "white";
  ctx.fillRect(510,330,100,25);
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 520, 340);
  ctx.fillStyle = "black";
}
function voltmeter2display(v2){
  let text = `${v2} V`;
  ctx.fillStyle = "white";
  ctx.fillRect(590,160,100,25);
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 600, 170);
  ctx.fillStyle = "black";
}
function voltmeter1display(cur) {
  let text = `${cur} V`;
  ctx.fillStyle = "white";
  ctx.fillRect(200,160,100,25);
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 210, 170);
  ctx.fillStyle = "black";
}
function batteryDisplay(volt){
  let text = `${volt} V`;
  ctx.fillStyle = "white";
  ctx.fillRect(150,258,100,25);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text, 160, 268)
  ctx.fillStyle = "black";
}
//Initialise system parameters here
function varinit() {
  varchange();
  //Variable slider and number input types
  $("#voltageSlider").slider("value", 0.05); // slider initialisation : jQuery widget
  $("#voltageSpinner").spinner("value", 0.05); // number initialisation : jQuery widget
  //resistor 1
  $("#resistor1Slider").slider("value", 0.01);
  $("#resistor1Spinner").spinner("value", 0.01);
  //resistor 2
  $("#resistor2Slider").slider("value", 0.01);
  $("#resistor2Spinner").spinner("value", 0.01);
  //resistor 3
  $("#resistor3Slider").slider("value", 0.01);
  $("#resistor3Spinner").spinner("value", 0.01);
  // $("#CsArea").spinner("value", 0.01);
  // $("#Ivalue").spinner("value", 0.01);
  $('#voltageSlider').slider("disable"); 
  $('#resistor1Slider').slider("disable"); 
  $('#resistor2Slider').slider("disable"); 
  $('#resistor3Slider').slider("disable"); 

  $('#voltageSpinner').spinner("disable"); 
  $('#resistor1Spinner').spinner("disable"); 
  $('#resistor2Spinner').spinner("disable"); 
  $('#resistor3Spinner').spinner("disable"); 

  $("#add-to-table-btn").prop("disabled", true);
  $("#calcV-btn").prop("disabled", true);
  $("#calcV2-btn").prop("disabled", true);

  $("#result-btn").prop("disabled", true);

  document.getElementById("resultdisplay").style.display='none';
  $("#message").text("Click on Start Simulation");
}

function varchange() {
  $("#voltageSlider").slider({ max: 300, min: 0, step: 1 });
  $("#voltageSpinner").spinner({ max: 300, min: 0, step: 1 });

  $("#voltageSlider").on("slide", function (e, ui) {
    $("#voltageSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltageSpinner").on("spin", function (e, ui) {
    $("#voltageSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltageSpinner").on("change", function () {
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
  $("#resistor3Slider").slider({ max: 200, min: 0, step: 1 });
  $("#resistor3Spinner").spinner({ max: 200, min: 0, step: 1 });

  $("#resistor3Slider").on("slide", function (e, ui) {
    $("#resistorSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor3Spinner").on("spin", function (e, ui) {
    $("#resistor3Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor3Spinner").on("change", function () {
    varchange();
  });
  $("#resistor3Spinner").on("touch-start", function () {
    varchange();
  });
  //
  $("#CsArea").spinner({ max: 1, min: 0.01, step: 0.0001 });
  $("#Ivalue").spinner({ max: 1, min: 0.01, step: 0.0001 });
}
function varupdate() {
  $("#voltageSpinner").spinner("value", $("#voltageSlider").slider("value")); //updating slider location with change in spinner(debug)
  $("#resistor1Spinner").spinner("value", $("#resistor1Slider").slider("value"));
  $("#resistor2Spinner").spinner("value", $("#resistor2Slider").slider("value"));
  $("#resistor3Spinner").spinner("value", $("#resistor3Slider").slider("value"));
  volt = $("#voltageSpinner").spinner("value"); //Updating variables
  res1 = $("#resistor1Spinner").spinner("value");
  res2 = $("#resistor2Spinner").spinner("value");
  res3 = $("#resistor3Spinner").spinner("value");

  resistance2Display(res2);
  resistance1Display(res1);
  resistance3Display(res3);
  voltmeter1display(0.0);
  voltmeter2display(0.0);
  voltmeter3display(0.0); 
  batteryDisplay(volt);
  voltageassign(volt);

  const numerator = volt * (res3 + res2);
  const denominator = (res1 * res3) + (res1 * res2) + (res2 * res3);

  const I1 = denominator === 0 ? Infinity : numerator / denominator;
  const I2 = denominator === 0 ? Infinity : (volt * res3) / denominator;
  const I3 = denominator === 0 ? Infinity : (volt * res2) / denominator;
  V1=I1*res1;
  V2=I2*res2;
  V3=I3*res3;
  if (volt === 0 && res1 === 0 && res2 === 0 && res3 === 0) {
    v1assign(0.0);
    v2assign(0.0);
    v3assign(0.0);
  } else if (isNaN(V1) || !isFinite(V1)) {
    v1assign(0.0);
  } else if (isNaN(V2) || !isFinite(V2)) {
    v2assign(0.0);
  } else if (isNaN(V3) || !isFinite(V3)) {
    v3assign(0.0);
  } else {
    v1assign(V1);
    v2assign(V2);
    v3assign(V3);
  }
    // i1assign((volt*(res3+res2))/((res1*res3)+(res1*res2)+(res2*res3)));
    // i2assign((volt*res3)/((res1*res3)+(res1*res2)+(res2*res3)));
    // i3assign((volt*res2)/((res1*res2)+(res1*res2)+(res2*res3)));

};

function voltageassign(volt){
  voltage = volt;
  batteryDisplay(voltage);
}
function v1assign(vol1){
  v1 = vol1.toFixed(2);
  voltmeter1display(vol1.toFixed(2));
  console.log("v1 =" + v1);
}
function v2assign(vol2){
  v2 = vol2.toFixed(2);
  voltmeter2display(vol2.toFixed(2));
  console.log("v2 =" + v2);
}
function v3assign(vol3){
  v3 = vol3.toFixed(2);
  voltmeter3display(vol3.toFixed(2));
  console.log("v3 =" + v3);
}

// console.log(res1)





function startSimulation(){
  $('#voltageSlider').slider("enable"); 
  $('#resistor1Slider').slider("enable"); 
  $('#resistor2Slider').slider("enable"); 
  $('#resistor3Slider').slider("enable"); 

  $('#voltageSpinner').spinner("enable"); 
  $('#resistor1Spinner').spinner("enable"); 
  $('#resistor2Spinner').spinner("enable"); 
  $('#resistor3Spinner').spinner("enable"); 

  $("#simulate-btn").prop("disabled", true);
  $("#add-to-table-btn").prop("disabled", false);
  $("#calcV-btn").prop("disabled", false);
  $("#calcV2-btn").prop("disabled", false);
  $("#result-btn").prop("disabled", false);
  $("#message").text("Set the voltage and resistor values and click on Add to Table button to note them down.");
  resistance1Display(0);
  resistance1Display(0);
  resistance2Display(0);
  batteryDisplay(0);
  voltageassign(0);
  v1assign(0);
  v2assign(0);
  v3assign(0);

};

 //adding table
function addtable(){
  var table=document.getElementById("mytable");
  var row=table.insertRow(-1);
  var cell1=row.insertCell(0);
  var cell2=row.insertCell(1);
  var cell3=row.insertCell(2);
  var cell4=row.insertCell(3);
  var cell5=row.insertCell(4);
  var cell6=row.insertCell(5);
  // console.log(typeof(V1));
  cell1.innerHTML=voltage;
  cell2.innerHTML=v1;
  cell3.innerHTML=v2;
  cell4.innerHTML=v3;
  // 
  v_1=parseFloat(v1)+parseFloat(v2);
  v_1 = Number(v_1);
  v_2=parseFloat(v2)-parseFloat(v3);
  v_2=Number(v_2);
  
  cell5.innerHTML=v_1;
  cell5.classList.add("column1-font");
  cell6.innerHTML=v_2;
  cell6.classList.add("column-font");
  $("#message").text("Click on Calculate V' to calculate and note down the value.");
}

//show hidden values

function showvalue1(){
  var hiddenCells = document.querySelectorAll(".column1-font");
  hiddenCells.forEach(function(cell) {
    cell.style.display = 'table-cell';

  });
  $("#message").text("Click on Calculate V\" to calculate and note down the value.");
}
function showvalue2(){
  var hiddenCells = document.querySelectorAll(".column-font");
  hiddenCells.forEach(function(cell) {
    cell.style.display = 'table-cell';
  });
  $("#message").text("Click on Result.");
}
function showresult(){
  document.getElementById("resultdisplay").style.display='block';
  $("#message").text(" ");
}
window.addEventListener("load", varinit);
