 function getFormvalue() {
            let firstName = document.getElementById("fname").value.trim();
            let lastName = document.getElementById("lname").value.trim();

            let fullName = firstName + " " + lastName;

            alert(fullName);
            return false;
        }