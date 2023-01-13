let oddInput = document.getElementById("oddInput");
let oddReturn = document.getElementById("oddReturn");
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
      helloApi(oddInput);
    }
});

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            oddReturn.textContent = data;
            console.log(data);
        }
    )
}

function helloApi(oddInput){
    var reg = /^-?\d+\.?\d*$/

    // var letters = /^[A-Za-z]+$/;
    if(oddInput.value.match(reg)){
        savedInput = oddInput.value;
        sayHelloUrl = "https://rodriguezmallforonecontrollers.azurewebsites.net/Endpoint/miniCh6/" + savedInput;
        urlCall(sayHelloUrl);
    }else{
        oddReturn.textContent = "Enter a valid respsonse";
    }
}