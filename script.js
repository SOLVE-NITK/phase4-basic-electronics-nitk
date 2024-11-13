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
    name: "Number System Conversion",
    url: "assets/number-system/index.html",
  },
  {
    name: "Verification of Kirchoff’s Voltage law",
    url: "assets/verification-of-kirchoffs-voltage-law/index.html",
  },
  {
    name: "Study of Voltage divider Rule",
    url: "assets/divider-combo/voltage-divider-rule/index.html",
  },
  {
    name: "Study of Current divider Rule",
    url: "assets/divider-combo/current-divider-rule/index.html",
  },
  {
    name: "Input-Output Characteristics of FET",
    url: "assets/jfet/index.html",
  },
  {
    name: "Verification of DeMorgan's Theorem",
    url: "assets/demorgan/index.html",
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
