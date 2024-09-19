const majorButton = document.getElementById("major-button");
if (majorButton) {
  majorButton.addEventListener("click", function () {
    window.location.href = "major_keys.html";
  });
}
const IButton = document.getElementById("I-button");
if (IButton) {
  IButton.addEventListener("click", function () {
    window.location.href = "tonic_triad.html";
  });
}

const iiButton = document.getElementById("ii-button");
if (iiButton) {
  iiButton.addEventListener("click", function () {
    window.location.href = "supertonic_triad.html";
  });
}

const iiiButton = document.getElementById("iii-button");
if (iiiButton) {
  iiiButton.addEventListener("click", function () {
    window.location.href = "mediant_triad.html";
  });
}

const IVButton = document.getElementById("IV-button");
if (IVButton) {
  IVButton.addEventListener("click", function () {
    window.location.href = "subdominant_triad.html";
  });
}

const VButton = document.getElementById("V-button");
if (VButton) {
  VButton.addEventListener("click", function () {
    window.location.href = "dominant_triad.html";
  });
}

const viButton = document.getElementById("vi-button");
if (viButton) {
  viButton.addEventListener("click", function () {
    window.location.href = "submediant_triad.html";
  });
}

const viiButton = document.getElementById("vii-button");
if (viiButton) {
  viiButton.addEventListener("click", function () {
    window.location.href = "leading_tone_triad.html";
  });
}
