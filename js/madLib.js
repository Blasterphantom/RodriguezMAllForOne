let madInput1 = document.getElementById("madInput1");
let madInput2 = document.getElementById("madInput2");
let madInput3 = document.getElementById("madInput3");
let madInput4 = document.getElementById("madInput4");
let madInput5 = document.getElementById("madInput5");
let madInput6 = document.getElementById("madInput6");
let madInput7 = document.getElementById("madInput7");
let madInput8 = document.getElementById("madInput8");
let madInput9 = document.getElementById("madInput9");
let madInput10 = document.getElementById("madInput10");
let madInput11 = document.getElementById("madInput11");
let madReturn = document.getElementById("madReturn");
let submitButtonId = document.getElementById("submitButtonId");

//console.log(nameInput, helloReturn, helloSubBtn);
let savedInput = "";
let sayHelloUrl = "";



submitButtonId.addEventListener("click", function () {
helloApi(madInput1, madInput2, madInput3, madInput4, madInput5, madInput6, madInput7, madInput8, madInput9, madInput10, madInput11);
})

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
      helloApi(madInput1, madInput2, madInput3, madInput4, madInput5, madInput6, madInput7, madInput8, madInput9, madInput10, madInput11);
    }
});

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            madReturn.textContent = data;
            console.log(data);
        }
    )
}

function helloApi(madInput1, madInput2, madInput3, madInput4, madInput5, madInput6, madInput7, madInput8, madInput9, madInput10, madInput11){
    var letters = /^[A-Za-z]+$/;
    if(madInput1.value.match(letters)  && madInput2.value.match(letters) && madInput3.value.match(letters) && madInput4.value.match(letters) && madInput5.value.match(letters) && madInput6.value.match(letters) && madInput7.value.match(letters) && madInput8.value.match(letters) && madInput9.value.match(letters) && madInput10.value.match(letters) && madInput11.value.match(letters)){
        savedInput = madInput1.value;
        savedInput2 = madInput2.value;
        savedInput3 = madInput3.value;
        savedInput4 = madInput4.value;
        savedInput5 = madInput5.value;
        savedInput6 = madInput6.value;
        savedInput7 = madInput7.value;
        savedInput8 = madInput8.value;
        savedInput9 = madInput9.value;
        savedInput10 = madInput10.value;
        savedInput11 = madInput11.value;
        sayHelloUrl = "https://rodriguezmallforonecontrollers.azurewebsites.net/Endpoint/miniCh5/" + savedInput + "/" + savedInput2 + "/" + savedInput3 + "/" + savedInput4 + "/" + savedInput5 + "/" + savedInput6 + "/" + savedInput7 + "/" + savedInput8 + "/" + savedInput9 + "/" + savedInput10 + "/" + savedInput11;
        urlCall(sayHelloUrl);
    }else{
        madReturn.textContent = "Enter a valid respsonse";
    }
}