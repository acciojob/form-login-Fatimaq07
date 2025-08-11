function getFormvalue(event) {
      event.preventDefault(); 

      let firstName = document.forms["nameForm"]["fname"].value.trim();
      let lastName = document.forms["nameForm"]["lname"].value.trim();

      if (!firstName && !lastName) {
        alert("Please enter your first and last name.");
        return;
      }

      if (!firstName) {
        alert("Please enter your first name.");
        return;
      }

      if (!lastName) {
        alert("Please enter your last name.");
        return;
      }

      alert(`${firstName} ${lastName}`);
    }