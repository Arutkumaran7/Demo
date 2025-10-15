// --- Select elements once, right after the page loads ---
let contactForm, submitButton, requiredFields;

document.addEventListener('DOMContentLoaded', function() {
  // Now we assign the elements to our variables
  contactForm = document.getElementById('contact-form');
  submitButton = document.getElementById('submit-btn');
  requiredFields = contactForm.querySelectorAll('input[required], textarea[required]');

  // --- FORM VALIDATION LOGIC ---
  function validateForm() {
    let allFieldsFilled = true;
    requiredFields.forEach(function(field) {
      if (field.value.trim() === '') {
        allFieldsFilled = false;
      }
    });
    // Use the variable instead of searching the DOM again
    submitButton.disabled = !allFieldsFilled;
  }

  requiredFields.forEach(function(field) {
    field.addEventListener('input', validateForm);
  });

  // Initially disable the button
  validateForm();
});


// --- EMAIL SENDING FUNCTION ---
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    subject: document.getElementById("subject").value,
    problem: document.getElementById("problem").value
  };

  const serviceID = "service_s2b2yag";
  const templateID = "template_9ez6i19";

  emailjs.send(serviceID, templateID, params)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
      
      // ✅ Now using the reliable variables
      contactForm.reset(); 
      submitButton.disabled = true;

    })
    .catch(function(error) {
      console.log('FAILED...', error);
      alert('Failed to send email. Check console for details.');
    });
}

document.addEventListener('DOMContentLoaded', function() {
  // Now we assign the elements to our variables
  contactForm = document.getElementById('booking-form');
  submitButton = document.getElementById('submit-btn2');
  requiredFields = contactForm.querySelectorAll('input[required], textarea[required]');

  // --- FORM VALIDATION LOGIC ---
  function validateForm() {
    let allFieldsFilled = true;
    requiredFields.forEach(function(field) {
      if (field.value.trim() === '') {
        allFieldsFilled = false;
      }
    });
    // Use the variable instead of searching the DOM again
    submitButton.disabled = !allFieldsFilled;
  }

  requiredFields.forEach(function(field) {
    field.addEventListener('input', validateForm);
  });

  // Initially disable the button
  validateForm();
});


// --- EMAIL SENDING FUNCTION ---
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

  const serviceID = "service_s2b2yag";
  const templateID = "template_9ez6i19";

  emailjs.send(serviceID, templateID, params2)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Email sent successfully!');
      
      // ✅ Now using the reliable variables
      contactForm.reset(); 
      submitButton.disabled = true;

    })
    .catch(function(error) {
      console.log('FAILED...', error);
      alert('Failed to send email. Check console for details.');
    });
}


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