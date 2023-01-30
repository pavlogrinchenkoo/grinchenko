function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let whatsNeed = document.getElementById("whatsNeed").value;
  let learnAboutUs = document.getElementById("learnAboutUs").value;

  let errorLine = document.getElementById("inputError");
  let loadingButtom = document.getElementById("loadingButton");

  if (name === "") {
    errorLine.innerHTML = "The name field cannot be empty!";
  } else if (name.length < 2) {
    errorLine.innerHTML = "The name cannot be less than 2 letters!";
  } else if (!validateEmail(email)) {
    errorLine.innerHTML = "Invalid email address!";
  } else if (whatsNeed === "") {
    errorLine.innerHTML = "Be sure to let me know how I can help.";
  } else {
    loadingButtom.classList.add("button--sending");
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "pablooeescobaro@gmail.com",
      Password: "B8D997D8EE74481CC40C0BC15C0F5A9A20F7",
      To: "pablooeescobaro@gmail.com",
      From: "kvartalshow@gmail.com",
      Subject: "Order",
      Body: `
      Name: ${name} \n
      Email: ${email} \n
      Number: ${number} \n
      How can we help: ${whatsNeed} \n
      How did you learn about us?: ${learnAboutUs}
      `,
    }).then(function (message) {
      if (message == "OK") {
        errorLine.classList.add("input__error--green")
        errorLine.innerHTML = "Message sent"
      }
      loadingButtom.classList.remove("button--sending");
    });
  }
}

function validateEmail(email) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}
