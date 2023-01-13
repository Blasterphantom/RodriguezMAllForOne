let nameInput = document.getElementById("nameInput");
let helloReturn = document.getElementById("helloReturn");
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
      helloApi(nameInput);
    }
});

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            helloReturn.textContent = data;
            console.log(data);
        }
    )
}

function helloApi(nameInput){
    var letters = /^[A-Za-z]+$/;
    if(nameInput.value.match(letters)){
        savedInput = nameInput.value;
        sayHelloUrl = "https://rodriguezmallforonecontrollers.azurewebsites.net/Endpoint/miniCh1/" + savedInput;
        urlCall(sayHelloUrl);
    }else{
        helloReturn.textContent = "Enter a valid respsonse";
    }
}