function submitForm() {
    try{
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    if(firstName=== "" || lastName ==="" || dob === "" || country === "" || gender === undefined || profession === "" || email === "" || mobile === ""){
        throw error;
    }
    document.getElementById("error").textContent = ""
    document.getElementById("popupFirstName").textContent = firstName;
    document.getElementById("popupLastName").textContent = lastName;
    document.getElementById("popupDob").textContent = dob;
    document.getElementById("popupCountry").textContent = country;
    document.getElementById("popupGender").textContent = gender;
    document.getElementById("popupProfession").textContent = profession;
    document.getElementById("popupEmail").textContent = email;
    document.getElementById("popupMobile").textContent = mobile;

    document.getElementById("popup").style.display = "block";
        
    resetForm();
    }
    catch(error){
        document.getElementById("error").textContent = "All fields are mandatory"
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function resetForm() {
    document.getElementById("error").textContent = ""
    document.getElementById("surveyForm").reset();
}
