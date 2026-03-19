document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let whatsappMessage = `New Lead:%0AName: ${name}%0APhone: ${phone}%0AMessage: ${message}`;

    let whatsappURL = `https://wa.me/9680262606?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
  });

});