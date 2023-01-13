let reverseInput = document.getElementById("reverseInput");
let reverseReturn = document.getElementById("reverseReturn");
let helloSubBtn = document.getElementById("helloSubBtn");

//console.log(nameInput, helloReturn, helloSubBtn);
let savedInput = "";
let sayHelloUrl = "";

// helloSubBtn.addEventListener("click", function () {
// helloApi(nameInput);
// })

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    // code for enter
    helloApi(reverseInput);
  }
});

function urlCall(url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      reverseReturn.textContent = data;
      console.log(data);
    });
}

function helloApi(reverseInput) {
  savedInput = reverseInput.value;
  sayHelloUrl =
    "https://rodriguezmallforonecontrollers.azurewebsites.net/Endpoint/miniCh7/" +
    savedInput;
  urlCall(sayHelloUrl);
}
