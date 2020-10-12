let checked = document.getElementById('termbox')
let submitButton = document.getElementById('submitbutton')
let passwordCount = 10;


submitButton.addEventListener("click", function(){
    if (checked.checked){
//do nothing
    }else{
        window.alert("You must agree to the terms and conditions before moving forward")
    }
})

function checkPass(){
    //https://stackoverflow.com/questions/39740832/password-validation-is-at-least-6-character/39877688
    let firstPassword = document.getElementById('firstPass')
    let secondPassword = document.getElementById('secondPass')
    let errorMessage = document.getElementById('errormessage')
    let messagebox = document.createElement("p")
    errorMessage.appendChild.messagebox

    if (firstPassword.value.length > 10){
        // messagebox.innerHTML ="Number count ok"
        // errorMessage.style.display= "inline"

    }else{
        errorMessage.style.display= "block"

    }
    if(firstPassword.value == secondPassword.value){
        // if they match do this 
        secondPassword.style.border ="thick solid blue"


    }else{
        secondPassword.style.border ="thick solid red"



    }
    
}

