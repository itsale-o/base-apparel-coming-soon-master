const emailIntput = document.getElementById("email");
const confirmButton = document.getElementById("confirm-button");
const errorSpan = document.getElementById("error-span");
const form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault

    var emailValue = emailIntput.value.trim();
    var regexPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(emailValue === ""){
        errorFunc("Email cannot be empty")
    }else if(!emailValue.match(regexPattern)){
        errorFunc("Please provide a valid email");
    }
    else{
        alert("Form submitted successfully !");
        window.location.reload();
    };
});

function errorFunc(message){
    errorSpan.style.display = "block";
    emailIntput.className += "error";
    errorSpan.innerText = message;
};

function typing(){
    errorSpan.style.display = "none";
    if(emailIntput.classList.contains("error")){
        emailIntput.classList.remove("error");
    };
};