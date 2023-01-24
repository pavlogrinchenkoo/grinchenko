function sendEmail() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let whatsNeed = document.getElementById("whatsNeed").value;
  let learnAboutUs = document.getElementById("learnAboutUs").value;

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
    alert(message);
  });
}
