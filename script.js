//Author: Ivan Salinas//
//Date Created: 1/27/25//
//Edited Date: 3/24/25//

// Date/Time function
function updateDateTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString();
    document.getElementById("currentDateTime").textContent = formattedDateTime;
}

// Run the function immediately and update every second
setInterval(updateDateTime, 1000);
updateDateTime();

var slider = document.getElementById("painscale");
var output = document.getElementById("rangedisplay");
if (slider && output) {
    output.innerHTML = slider.value;
    slider.oninput = function() {
        output.innerHTML = this.value;
    };
}

//start of all validation checks

function setup()
  {
    var error_flag = 0;
    console.log(error_flag);
  }

//start of password validation checks

function checkMatch() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var message = document.getElementById("passwordMessage");
    
    if (confirmPassword === "") {
        message.textContent = "";
    } else if (password === confirmPassword) {
        message.textContent = "Passwords match!";
        message.style.color = "green";
    } else {
        message.textContent = "Passwords do not match!";
        message.style.color = "red";
    }
}

function validatePassword() {
    var password = document.getElementById("password").value;
    var message = document.getElementById("passwordMessage");
    var username = document.getElementById("userName").value; 

    
    // At least 8 chars, 1 uppercase, 1 lowercase, and 1 number
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    
    if (password === "") {
        message.textContent = "";
        return false;
    } else if (password === username){
        message.textContent = "Password cannot be the same as the username!";
        message.style.color = "red";
        return false;

    } else if (strongRegex.test(password)) {
        message.textContent = "Strong password!";
        message.style.color = "green";
        return true;
    } 
    else {
        message.textContent = "Password must be at least 8 characters with uppercase, lowercase, and numbers";
        message.style.color = "red";
        return false;
    }
}


document.addEventListener("DOMContentLoaded", function() {
    var passwordField = document.getElementById("password");
    var checklist = document.getElementById("passwordChecklist");
    
    var lengthCheck = document.getElementById("lengthCheck");
    var uppercaseCheck = document.getElementById("uppercaseCheck");
    var lowercaseCheck = document.getElementById("lowercaseCheck");
    var numberCheck = document.getElementById("numberCheck");


    passwordField.addEventListener("focus", function() {
        checklist.style.display = "block"; // Shows up as the checklist when user focuses on the pasword box not the confirm password
    });

    passwordField.addEventListener("blur", function() {
        if (passwordField.value === "") {
            checklist.style.display = "none"; // Hides it if password field is empty
        }
    });

    passwordField.addEventListener("input", function() {
        var password = passwordField.value;

        // Checks password conditions dynamically
        lengthCheck.style.color = password.length >= 8 ? "green" : "red";
        uppercaseCheck.style.color = /[A-Z]/.test(password) ? "green" : "red";
        lowercaseCheck.style.color = /[a-z]/.test(password) ? "green" : "red";
        numberCheck.style.color = /\d/.test(password) ? "green" : "red";
    });
});

//end of password validation checks

//start of userName checks
function checkUserName(){
    var x= document.getElementById("userName").value;
    var x= userNameMessage = document.getElementById("userNameMessage");

    if(x.match(/^[A-Za-z][A-Za-z0-9]{4,19}$/)){
        userNameMessage.innerHTML=" ";
    }
    else{
        userNameMessage.innerHTML="User name must start with a letter and be at least 5 characters long but not longer than 20"
    }
}
//end of userName checks

//start of check for city
function checkcity() {
    if (document.getElementById("city").value.match(/^[ a-zA-Z3-5'-]+$/)) {
         document.getElementById("city_message").innerHTML = "";  
       }
       else  {
         document.getElementById("city_message").innerHTML = "Invalid characters in City name.";
         error_flag = 1;
         }
        }

//end of check for city 

//start of check for address1
function checkAddressOne() 
{
    x = document.getElementById("addressOne").value;
    console.log(x.value);
    console.log(x.length);
    if (x.length < 2 ) {  
      document.getElementById("addressMessage").innerHTML = "Enter at least two characters on address line One";  
      error_flag = 1; 
      console.log(error_flag);
      }
      else { 
          document.getElementById("addressMessage").innerHTML = "";  
      }
      console.log(addressOne_message);
    
}
//end of check for address1 

//start of check for address2
function checkAddressTwo() 
{
    x = document.getElementById("addressTwo").value;
    console.log(x.value);
    console.log(x.length);
    if (x.length < 2 ) {  
      document.getElementById("addressTwoMessage").innerHTML = "Enter at least two characters on address line Two";  
      error_flag = 1; 
      console.log(error_flag);
      }
      else { 
          document.getElementById("addressTwoMessage").innerHTML = "";  
      }
      console.log(addressOne_message);
    
}
//end of check for address2

//start of check for first name
    function checkFirstName() {
        var x = document.getElementById("firstName").value;
        if (x.length < 2) { 
            document.getElementById("firstNameMessage").innerHTML = "Invalid first name too short.";  
            error_flag = 1;
        }
        else {
            if (x.match(/^[a-zA-Z\s'-]+$/)) {
                document.getElementById("firstNameMessage").innerHTML = "";  
            }
            else {
                document.getElementById("firstNameMessage").innerHTML = "Invalid characters in name.";
                error_flag = 1;
            }
        }
    }
// end of check for first name

//start of check of middle name
function checkMiddle()
    {
        x = document.getElementById("middleInitial").value;
        if( x.length>0) { 
              if (x.match(/[a-zA-Z ]/)) {
              document.getElementById("middleNameMessage").innerHTML = "";  
            }
            else  {
              document.getElementById("middleNameMessage").innerHTML = "Invalid characters in middle name.";
              error_flag = 1;
              }
        }
    }
//end of middle name check

//start of check of lastname
function checkLastName()
    {
        x = document.getElementById("lastName").value;
        if( x.length<2) { 
              document.getElementById("lastNameMessage").innerHTML = "Invalid last name too short.";
              error_flag = 1;  
        }
        else {
            if (x.match(/[a-zA-Z3-5'-]+$/)) {
              document.getElementById("lastNameMessage").innerHTML = "";  
            }
            else  {
              document.getElementById("lastNameMessage").innerHTML = "Invalid characters in last name.";
              error_flag = 1;
              }
        }
    }
//end of lastname check

//start of dob check
function checkDOB() {
    var input = document.getElementById("dob").value;
    var errorMessage = document.getElementById("dobErrorMessage");

    if (!input) {
        errorMessage.innerHTML = "Please enter your date of birth.";
        error_flag = 1;
        return;
    }

    var dob = new Date(input);
    var today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today's date

    var age = today.getFullYear() - dob.getFullYear();
    var month = today.getMonth() - dob.getMonth();
    
    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
        age--; // Adjust if the birthday hasn't happened yet this year
    }

    if (dob > today) {
        errorMessage.innerHTML = "Date of birth cannot be in the future.";
        error_flag = 1;
    } else if (age > 130) {
        errorMessage.innerHTML = "You cannot be older than 130 years.";
        error_flag = 1;
    } else {
        errorMessage.innerHTML = ""; // Clears message if DOB is valid
    }
}
//end of dob check













// this will be the end of validation checks
function showPassword() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


  function getdata1() {
    console.log("Get Data button clicked!"); 

    var formcontents = document.getElementById("myForm");
    
    var formoutput = "<table border='1'><tr><th>Name of Data</th><th>Type</th><th>Current Value</th></tr>"; 
    
    var datatype;
    var i;

    if (!formcontents) {
        console.error("Form not found!");
        return;
    }

    // Loop through form contents
    for (i = 0; i < formcontents.elements.length; i++) {
        console.log("item: "+i+" "+formcontents.elements[i].name+" = "+formcontents.elements[i].value);

        // If input has value (and it's not empty)
        if (formcontents.elements[i].value !== "") {
            datatype = formcontents.elements[i].type;

            switch (datatype) {
                case "checkbox":
                    if (formcontents.elements[i].checked) {
                        let label = document.querySelector(`label[for="${formcontents.elements[i].id}"]`);
                        let labelText = label ? label.textContent.trim() : formcontents.elements[i].value;
                        
                        formoutput += `<tr><td>${formcontents.elements[i].name}</td>`;
                        formoutput += `<td>${datatype}</td>`;
                        formoutput += `<td>${labelText} (Checked)</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontents.elements[i].checked) {
                        formoutput += "<tr><td>" + formcontents.elements[i].name + "</td>";
                        formoutput += "<td>" + datatype + "</td>";
                        formoutput += "<td>" + formcontents.elements[i].value + "</td></tr>";
                    }
                    break;
                case "button":
                case "submit":
                case "reset":     
                break;
                
                default:
                    formoutput += "<tr><td>" + formcontents.elements[i].name + "</td>";
                    formoutput += "<td>" + datatype + "</td>";
                    formoutput += "<td>" + formcontents.elements[i].value + "</td></tr>";
            }
        }
    }

    // Close the table
    formoutput += "</table>";

    var outputDiv = document.getElementById("outputformdata");
    
    if (outputDiv) {
        outputDiv.innerHTML = formoutput;
    } else {
        console.error("Output div not found!");
    }
}

window.getdata1 = getdata1;

document.addEventListener("DOMContentLoaded", function() {
    var getDataButton = document.getElementById("getdata");
    if (getDataButton) {
        getDataButton.addEventListener("click", getdata1);
    } else {
        console.error("Get Data button not found!");
    }
});

