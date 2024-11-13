
// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// const img=new Image();

//Initialise system parameters here
// function varinit() {
//   varchange();
//   //Variable slider and number input types
//   $("#massSlider").slider("value", 25); // slider initialisation : jQuery widget
//   $("#massSpinner").spinner("value", 25); // number initialisation : jQuery widget
//   $("#lengthSlider").slider("value", 1500);
//   $("#lengthSpinner").spinner("value", 1500);
//   $("#dampSlider").slider("value", 0.05);
//   $("#dampSpinner").spinner("value", 0.05);
//   $("#CsArea").spinner("value", 0.01);
//   $("#Ivalue").spinner("value", 0.01);
// }
// function varchange() {
//   $("#massSlider").slider({ max: 200, min: 0, step: 0.5 });
//   $("#massSpinner").spinner({ max: 200, min: 0, step: 0.5 });

//   $("#massSlider").on("slide", function (e, ui) {
//     $("#massSpinner").spinner("value", ui.value);
//     time = 0;
//     varupdate();
//   });
//   $("#massSpinner").on("spin", function (e, ui) {
//     $("#massSlider").slider("value", ui.value);
//     time = 0;
//     varupdate();
//   });
//   $("#massSpinner").on("change", function () {
//     varchange();
//   });

//   $("#lengthSlider").slider({ max: 3000, min: 1000, step: 10 });
//   $("#lengthSpinner").spinner({ max: 3000, min: 1000, step: 10 });

//   $("#lengthSlider").on("slide", function (e, ui) {
//     $("#lengthSpinner").spinner("value", ui.value);
//     time = 0;
//     varupdate();
//   });
//   $("#lengthSpinner").on("spin", function (e, ui) {
//     $("#lengthSlider").slider("value", ui.value);
//     time = 0;
//     varupdate();
//   });
//   $("#lengthSpinner").on("change", function () {
//     varchange();
//   });
//   $("#lengthSpinner").on("touch-start", function () {
//     varchange();
//   });

//   $("#dampSlider").slider({ max: 0.99, min: 0, step: 0.01 });
//   $("#dampSpinner").spinner({ max: 0.99, min: 0, step: 0.01 });

//   $("#dampSlider").on("slide", function (e, ui) {
//     $("#dampSpinner").spinner("value", ui.value);
//     time = 0;
//     varupdate();
//   });
//   $("#dampSpinner").on("spin", function (e, ui) {
//     $("#dampSlider").slider("value", ui.value);
//     time = 0;
//     varupdate();
//   });
//   $("#dampSpinner").on("change", function () {
//     varchange();
//   });
//   $("#CsArea").spinner({ max: 1, min: 0.01, step: 0.0001 });
//   $("#Ivalue").spinner({ max: 1, min: 0.01, step: 0.0001 });
// }
// function varupdate() {
//   $("#massSpinner").spinner("value", $("#massSlider").slider("value")); //updating slider location with change in spinner(debug)
//   $("#lengthSpinner").spinner("value", $("#lengthSlider").slider("value"));
//   $("#dampSpinner").spinner("value", $("#dampSlider").slider("value"));
//   endmass = $("#massSpinner").spinner("value"); //Updating variables
//   beamlength = $("#lengthSpinner").spinner("value");
//   dampingratio = $("#dampSpinner").spinner("value");

//  };



 //drag and drop
function allowDrop(event) {
  event.preventDefault();
}
function drag(event) {
  event.dataTransfer.setData("imageId", event.target.id);
}
function drop(event) {
  event.preventDefault();
  var imageId = event.dataTransfer.getData("imageId");
  // console.log(event.target.id);
  var placeholderId = event.currentTarget.id;
 
  
  // console.log(imageId);
  // console.log(placeholderId);
  var expectedPlaceholder = document.getElementById(imageId).getAttribute("data-placeholder");
  // console.log(expectedPlaceholder);
  if (placeholderId === expectedPlaceholder) {
      event.target.appendChild(document.getElementById(imageId));
  } else {
      alert("Please try again!");
  }
  
}


// function touchStart(event) {
//   var touch = event.targetTouches[0];
//   var draggableElement = document.elementFromPoint(touch.clientX, touch.clientY);

//   if (draggableElement && draggableElement.draggable) {
//     event.preventDefault();
//     drag(event);
//   }
// }

// function touchMove(event) {
//   event.preventDefault();
// }

// function touchEnd(event) {
//   var touch = event.changedTouches[0];
//   var dropzone = document.elementFromPoint(touch.clientX, touch.clientY);

//   if (dropzone && dropzone.classList.contains("dropzone")) {
//     dropzone.dispatchEvent(new Event("drop", { bubbles: true }));
//   }
// }

// // Add event listeners
// document.addEventListener("DOMContentLoaded", function () {
//   var draggableElements = document.querySelectorAll(".draggable");
//   draggableElements.forEach(function (element) {
//     element.addEventListener("dragstart", drag);
//     element.addEventListener("touchstart", touchStart);
//     element.addEventListener("touchmove", touchMove);
//     element.addEventListener("touchend", touchEnd);
//   });

//   var dropzones = document.querySelectorAll(".dropzone");
//   dropzones.forEach(function (dropzone) {
//     dropzone.addEventListener("dragover", allowDrop);
//     dropzone.addEventListener("drop", drop);
//   });
// });
// var images = document.querySelectorAll('img');
// images.forEach(function (image) {
//   image.addEventListener('touchstart', function (e) {
//     e.preventDefault();
//     drag(e);
//   });
// });

// var containers = document.querySelectorAll('.placeholder');
// containers.forEach(function (container) {
//   container.addEventListener('touchmove', function (e) {
//     e.preventDefault();
//   });
//   container.addEventListener('touchend', function (e) {
//     e.preventDefault();
//     drop(e);
//   });
// });
// document.getElementById(complete).innerHTML.value="Success!!";
//next page function
// from 2nd to 3rd
// function refresh(){
//   // const loadbutt=document.getElementById("nextpage");
//   const contentarea=document.getElementById("refresh");
//   contentarea.innerHTML="";
//   fetch('third_pg.html')
//     .then(response => response.text())
//     .then(data => {
//       contentarea.innerHTML=data;
//     })
//     .catch(error =>{
//       console.error('Error loading new page:',error);
//     })

// }
//from 2nd to 1st 
// function prev_pg(){
//   const contentarea=document.getElementById("refresh");
//   contentarea.innerHTML="";
//   fetch('first_pg.html')
//     .then(response => response.text())
//     .then(data => {
//       contentarea.innerHTML=data;
//     })
//     .catch(error =>{
//       console.error('Error loading new page:',error);
//     })
// }
//from 3rd page to 2nd
// function prev_pg3(){
//   const contentarea=document.getElementById("refresh");
//   contentarea.innerHTML="";
//   fetch('second_pg.html')
//     .then(response => response.text())
//     .then(data => {
//       contentarea.innerHTML=data;
//     })
//     .catch(error =>{
//       console.error('Error loading new page:',error);
//     })
// }





//from 1st to 2nd
function next_pg(){
  // const loadbutt=document.getElementById("nextpage");
  const contentarea=document.getElementById("refresh");
  contentarea.innerHTML="";
  // fetch('second_pg.html')
  fetch('home_pg.html')
    .then(response => response.text())
    .then(data => {
      contentarea.innerHTML=data;
    })
    .catch(error =>{
      console.error('Error loading new page:',error);
    })

}
//from 3rd to 4th
// function next_pg4(){
//   // const loadbutt=document.getElementById("nextpage");
//   const contentarea=document.getElementById("refresh");
//   contentarea.innerHTML="";
//   fetch('fourth_pg.html')
//     .then(response => response.text())
//     .then(data => {
//       contentarea.innerHTML=data;
//     })
//     .catch(error =>{
//       console.error('Error loading new page:',error);
//     })

// }
//from 4th to 3rd
function prev_pg4(){
  const contentarea=document.getElementById("refresh");
  contentarea.innerHTML="";
  fetch('trans_pg1.html')
    .then(response => response.text())
    .then(data => {
      contentarea.innerHTML=data;
    })
    .catch(error =>{
      console.error('Error loading new page:',error);
    })
}

//from 4th to 5th
function next_pg5(){
  // const loadbutt=document.getElementById("nextpage");
  const contentarea=document.getElementById("refresh");
  contentarea.innerHTML="";
  fetch('fifth_pg.html')
    .then(response => response.text())
    .then(data => {
      contentarea.innerHTML=data;
    })
    .catch(error =>{
      console.error('Error loading new page:',error);
    })

}
//from 5th to 4th
function prev_pg5(){
  // const loadbutt=document.getElementById("nextpage");
  const contentarea=document.getElementById("refresh");
  contentarea.innerHTML="";
  fetch('fourth_pg.html')
    .then(response => response.text())
    .then(data => {
      contentarea.innerHTML=data;
    })
    .catch(error =>{
      console.error('Error loading new page:',error);
    })

}
//home to relay1
function home_to_relay1(){
  // const loadbutt=document.getElementById("nextpage");
  const contentarea=document.getElementById("refresh");
  contentarea.innerHTML="";
  fetch('relay_pg1.html')
    .then(response => response.text())
    .then(data => {
      contentarea.innerHTML=data;
    })
    .catch(error =>{
      console.error('Error loading new page:',error);
    })

}
function relay1_to_relay2(){
  const contentarea=document.getElementById("refresh");
  contentarea.innerHTML="";
  fetch('third_pg.html')
    .then(response => response.text())
    .then(data => {
      contentarea.innerHTML=data;
    })
    .catch(error =>{
      console.error('Error loading new page:',error);
    })
}

function relay2_to_home(){
  const contentarea=document.getElementById("refresh");
  contentarea.innerHTML="";
  fetch('home_pg.html')
    .then(response => response.text())
    .then(data => {
      contentarea.innerHTML=data;
    })
    .catch(error =>{
      console.error('Error loading new page:',error);
    })
}

function home_to_transistor1(){
  const contentarea=document.getElementById("refresh");
  contentarea.innerHTML="";
  fetch('trans_pg1.html')
    .then(response => response.text())
    .then(data => {
      contentarea.innerHTML=data;
    })
    .catch(error =>{
      console.error('Error loading new page:',error);
    })
}
function trans1_to_trans2(){
  const contentarea=document.getElementById("refresh");
  contentarea.innerHTML="";
  fetch('fourth_pg.html')
    .then(response => response.text())
    .then(data => {
      contentarea.innerHTML=data;
    })
    .catch(error =>{
      console.error('Error loading new page:',error);
    })
}

function trans3_to_home(){
  const contentarea=document.getElementById("refresh");
  contentarea.innerHTML="";
  fetch('home_pg.html')
    .then(response => response.text())
    .then(data => {
      contentarea.innerHTML=data;
    })
    .catch(error =>{
      console.error('Error loading new page:',error);
    })
}
window.addEventListener("load", varinit);
