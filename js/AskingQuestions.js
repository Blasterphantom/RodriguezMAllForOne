let askingInput = document.getElementById("askingInput");
let askingInput2 = document.getElementById("askingInput2");
let askingReturn = document.getElementById("askingReturn");
let helloSubBtn = document.getElementById("helloSubBtn");

//console.log(nameInput, helloReturn, helloSubBtn);
let savedInput = "";
let sayHelloUrl = "";



// helloSubBtn.addEventListener("click", function () {
// helloApi(nameInput);
// })

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      // code for enter
      helloApi(askingInput,askingInput2);
    }
});

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            askingReturn.textContent = data;
            console.log(data);
        }
    )
}

function helloApi(askingInput,askingInput2){
    // var reg = new RegExp('^[0-9]$');
    var letters = /^[A-Za-z]+$/;
    if(askingInput.value.match(letters)){
        savedInput = askingInput.value;
        savedInput2 = askingInput2.value;
        sayHelloUrl = "https://rodriguezmallforonecontrollers.azurewebsites.net/Endpoint/miniCh3/" + savedInput + "/" + savedInput2;
        urlCall(sayHelloUrl);
    }else{
        askingReturn.textContent = "Enter a valid respsonse";
    }
}