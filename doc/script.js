function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phoneno:document.getElementById("phoneno").value,
        subject:document.getElementById("subject").value,
        problem:document.getElementById("problem").value     
    };  
    emailjs.send("service_lsbgdsx", "template_rhpyevm", params)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully!');
      }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send email.');
      });
  };
function toggleMenu() {
    const navLinks = document.querySelector('.side-nav-links');
    navLinks.style.display='flex';
}
function closeMenu() {
    const navLinks = document.querySelector('.side-nav-links');
    navLinks.style.display='none';
} 
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    nav.style.background = "#00000082";  
  } else {
    nav.style.background = "rgba(21, 21, 21, 1)";  
  }
});