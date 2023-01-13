let oddInput = document.getElementById("oddInput");
let oddInput2 = document.getElementById("oddInput2");
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
      helloApi(oddInput,oddInput2);
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

function helloApi(oddInput,oddInput2){
    var reg = /^-?\d+\.?\d*$/
    // var letters = /^[A-Za-z]+$/;
    if(oddInput.value.match(reg) && oddInput.value.match(reg) ){
        savedInput = oddInput.value;
        savedInput2 = oddInput2.value;
        sayHelloUrl = "https://rodriguezmallforonecontrollers.azurewebsites.net/Endpoint/miniCh4/" + savedInput + "/" + savedInput2;
        urlCall(sayHelloUrl);
    }else{
        askingReturn.textContent = "Enter a valid respsonse";
    }
}