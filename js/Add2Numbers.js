let addInput = document.getElementById("addInput");
let addInput2 = document.getElementById("addInput2");
let addReturn = document.getElementById("addReturn");
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
      helloApi(addInput,addInput2);
    }
});

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            addReturn.textContent = data;
            console.log(data);
        }
    )
}

function helloApi(addInput,addInput2){
    var reg = /^-?\d+\.?\d*$/
    if(addInput.value.match(reg) && addInput2.value.match(reg) ){
        savedInput = addInput.value;
        savedInput2 = addInput2.value;
        sayHelloUrl = "https://rodriguezmallforonecontrollers.azurewebsites.net/Endpoint/miniCh2/" + savedInput + "/" + savedInput2;
        urlCall(sayHelloUrl);
    }else{
        addReturn.textContent = "Enter a valid respsonse";
    }
}