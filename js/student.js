let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let slackName = document.getElementById("slackName");
let email = document.getElementById("email");
let hobbies = document.getElementById("hobbies");
let students = document.getElementById("students");

let studentBtns = document.getElementsByClassName("studentGroup");
// console.log(studentBtns)

let selectedName = "";
let studentNames = [];


    students.addEventListener('change', function(){
        selectedName = students.value;
        displayStudentData(selectedName);
        console.log(selectedName);
    })


// function getJson(){
//     fetch('https://rodriguezmallforonecontrollers.azurewebsites.net/Endpoint/GetStudentByFirstName').then(
//         response => response.json()
//     ).then(
//         //Forgot to data to the Array we declared
//         data => studentNames = data.studentNames
//     )
// }

function urlCall(url) {
    fetch(url).then(
        response => response.json()
    ).then(
        // data => studentNames = data.studentNames
        data => {
            firstName.textContent = data.firstName;
            lastName.textContent = data.lastName;
            slackName.textContent = data.slackName;
            email.textContent = data.email;
            hobbies.textContent = data.hobbies;
            console.log(data);
            console.log(data.firstName);
        }
    ).then(
        console.log(studentNames)
    )
}

function displayStudentData(name){
    savedInput = name.value;
    studentUrl = "https://rodriguezmallforonecontrollers.azurewebsites.net/Endpoint/GetStudentByFirstName/" + name;
    urlCall(studentUrl);
    
    // for(let person of studentNames){
   
    //     if(person.firstName  == name){
    //         firstName.textContent = person.firstName;
    //         lastName.textContent = person.lastName;
    //         slackName.textContent = person.slackName;
    //         email.textContent = person.email;
    //         hobbies.textContent = person.hobbies;
    //     }

    // }

    
}

// getJson();