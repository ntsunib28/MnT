// Ambil Form dari HTML
document.getElementById("subscription").
addEventListener("submit", (e) => {
    e.preventDefault()

    //ambil data
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let number = document.getElementById("number").value
    let country = document.getElementById("country").value
    let password = document.getElementById("password").value
    let conPassword = document.getElementById("conPassword").value
    let terms = document.getElementById("terms")
    let error = document.getElementById("error")
    // error.innerHTML = ""

    //Validate Username
    if(name.length == 0){
        // error.innerHTML = "Username cannot be empty"
        alert("Username cannot be empty")
        return
    }

    //Email hrs .com dan @
    if(!validateEmail(email)){
        // error.innerHTML = "Invalid email"
        alert("Invalid Email")
        return
    }

    //Validate phone number
    if(!validateNumber(number)){
        // error.innerHTML = "Invalid phone number"
        alert("Invalid phone number")
        return
    }

    //Validate country ada atau tidak
    if(!country){
        // error.innerHTML = "Please select a country"
        alert("Please select a country")
        return
    }

    // password:alphanumeric(angka and huruf)
    if(!validatePassword(password)){
        // error.innerHTML = "Invalid password"
        alert("Invalid password")
        return
    }

    //Confirm Password
    if(!confirmPassword(password, conPassword)){
        // error.innerHTML = "Password doesn't match"
        alert("Password doesn't match")
        return
    }

    //Validate Terms
    if(!terms.checked){
        // error.innerHTML = "Agree to our terms"
        alert("Please agree to our terms")
        return
    }

    //
    let confirmResult= confirm("Are you sure you want to submit?")

    if(confirmResult){
        console.log("submitted")
        alert("Your response has been submitted, Thank You!")
    }else{
        console.log("cancel")
    }
})

function validateEmail(email){
    // return email.endsWith(".com") && email.contains("@")
    return email.endsWith(".com") && email.indexOf("@") != -1
}

function validateNumber(number){
    let length = number.length
    let allNum = false
    for(let i = 0; i < length; i++){
        const numCode = number.charCodeAt(i)
        
        if(checkAllNum(numCode)){
            allNum = true
        }
        else{
            allNum = false
            break
        }
    }
    if(allNum == true){
        return true
    }else{
        return false
    }
}

function checkAllNum(numCode){
    return (numCode >= 48 && numCode <=57)
}

function validatePassword(password){
    let length = password.length
    //flag variabel
    let isAlpha = false
    let isNum = false
    for (let i = 0; i < length; i++) {
        //cek ascii huruf
        const charCode = password.charCodeAt(i);
        //validasi angka
        if(!isNaN(password[i])){
            isNum = true
        }
        //validasi huruf
        if(validateAlpha(charCode)){
            isAlpha = true
        }
        
    }
    if(isAlpha && isNum){
       return true
    }
    else{
        return false
    }
}

function validateAlpha(charCode){
    return (charCode >= 65 && charCode <= 90) || (charCode>=97 && charCode<=122)
}

function confirmPassword(password, conPassword){
    if(password.localeCompare(conPassword) == 0){
        return true
    }else{
        return false
    }
}