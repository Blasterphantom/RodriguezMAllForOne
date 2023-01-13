let restaurantInput = document.getElementById("restaurantInput");
let restaurantReturn = document.getElementById("restaurantReturn");
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
      helloApi(restaurantInput);
    }
});

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            restaurantReturn.textContent = data;
            console.log(data);
        }
    )
}

function helloApi(restaurantInput){
    var letters = /^[A-Za-z]+$/;
    if(restaurantInput.value.match(letters) && restaurantInput.value == "Mexican" || restaurantInput.value == "mexican" || restaurantInput.value == "Chinese" || restaurantInput.value == "chinese" || restaurantInput.value == "American" || restaurantInput.value == "american"){
        savedInput = restaurantInput.value;
        sayHelloUrl = "https://rodriguezmallforonecontrollers.azurewebsites.net/Endpoint/miniChRestaurant/" + savedInput.toLowerCase();
        urlCall(sayHelloUrl);
    }else{
        restaurantReturn.textContent = "Enter a valid respsonse";
    }
}