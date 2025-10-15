  function sendMail() {
      var params = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          phone:document.getElementById("phone").value,
          subject:document.getElementById("subject").value,
          problem:document.getElementById("problem").value     
      }; 
      console.log("Data being sent:", params);
      emailjs.send("service_lsbgdsx", "template_9ez6i19", params)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email sent successfully!');
        }, function(error) {
          console.log('FAILED...', error);
          alert('Failed to send email.');
        });
  };
function sendMail2() {
    const rawDateValue = document.getElementById("dot").value; 
    if (!rawDateValue) {
        alert('Please select a date and time.');
        return; 
    }
    const dateObject = new Date(rawDateValue);
    const readableDate = dateObject.toLocaleString('en-US', {
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit'
    });

    var params2 = {
        name: document.getElementById("name2").value,
        email: document.getElementById("email2").value,
        phone: document.getElementById("phone2").value,
        dob: readableDate, 
    }; 
    console.log("Data being sent:", params2);
    emailjs.send("service_lsbgdsx", "template_a4msl63", params2)
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
function openMenu() {
    const navLinks = document.querySelector('.booking');
    navLinks.style.display='flex';
}

function closeMenu_book() {
    const navLinks = document.querySelector('.booking');
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
function up(){
     const btn = document.getElementById("to-top");
     btn.addEventListener("click", () => {
            window.location.href ='#home';
        });
};
function down(){
     const btn = document.getElementById("to-bottom");
     btn.addEventListener("click", () => {
            window.location.href ='#footer';
        });
};

/*document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit-btn');
    submitButton.disabled = true;
function validateForm() {
        if (form.checkValidity()) {
            submitButton.disabled = false; 
        } else {
            submitButton.disabled = true; 
        }
    } 
    form.addEventListener('input', validateForm);
    form.addEventListener('change', validateForm);
    validateForm(); 
});*/