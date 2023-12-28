var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/biel.jpg") {
    myImage.setAttribute("src", "images/biel2.jpg");
  } else {
    myImage.setAttribute("src", "images/biel.jpg");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Як до тебе звертатися?");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Біль - чудове місто, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Біль - чудове місто, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
