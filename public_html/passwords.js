function validate() {
    var pass1 = document.getElementById("password1").value;
    var pass2 = document.getElementById("password2").value;


    if (pass1.length < 8) {
        alert("The length of the your password is less than 8 letters.")
    } else if (pass1 != pass2) {
        alert("Two passwords don't match.")
    } else {
        alert("Everything is good!")
    }
}
