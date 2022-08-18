// step:1 add click even handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function(){
    const emailFiel = document.getElementById("user-email");
    const email = emailFiel.value;
    const passwordFiel = document.getElementById("user-password");
    const password = passwordFiel.value;

    if (email === "iqrabd64@gmail.com" && password === "123456"){
        window.location.href = "bank.html";
    }
    else{
        alert ("password not right")
    }
})

