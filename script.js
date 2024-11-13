const URLS = [
  {
    name: "Verification of Kirchoff’s Current law",
    url: "assets/verification-of-kirchoffs-current-law/index.html",
  },
  {
    name: "Working of Fuse",
    url: "assets/working-of-fuse/index.html",
  },
  {
    name: "Characteristics of Photodiode",
    url: "assets/characteristics-of-photodiode/index.html",
  },
  {
    name: "Study of Adder and Subtractor using Operational Amplifier",
    url: "assets/opam-combo/index.html",
  },
  {
    name: "Familiarization of transistors",
    url: "assets/exp-thermal-conductivity/simulation/index.html",
  },
  {
    name: "Familiarization of Meters",
    url: "assets/slab/index.html",
  },
  {
    name: "Verification of Kirchoff’s Voltage law",
    url: "assets/heat/index.html",
  },
  {
    name: "Study of Voltage divider and Current divider Rule",
    url: "assets/exp-coupled-pendulum/simulation/angular.html",
  },
  {
    name: "Input-Output Characteristics of FET",
    url: "assets/cart/index.html",
  },
  {
    name: "Familiarization of switching devices",
    url: "assets/utslayer1/index.html",
  },
];

function displayExperiment(element) {
  console.log(element.textContent.trim());
  URLS.map((ele) => {
    if (ele.name == element.textContent.trim()) {
      document.getElementById("frame").src = ele.url;
    }
  });
}
