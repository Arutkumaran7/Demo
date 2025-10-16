document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const submitButton = document.getElementById('submit-btn');
    if (!contactForm) return;
    const requiredFields = contactForm.querySelectorAll('input[required], textarea[required]');
    function validateForm() {
        let allFieldsFilled = true;
        requiredFields.forEach(function(field) {
            if (field.value.trim() === '') {
                allFieldsFilled = false;
            }
        });
        submitButton.disabled = !allFieldsFilled;
    }

    requiredFields.forEach(function(field) {
        field.addEventListener('input', validateForm);
    });
    validateForm();
});
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
            document.getElementById('contact-form').reset();
            document.getElementById('submit-btn').disabled = true;
        })
        .catch(function(error) {
            console.log('FAILED...', error);
            alert('Failed to send email. Check console for details.');
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');
    const bookingSubmitButton = document.getElementById('submit-btn2');
    if (!bookingForm) return;
    const bookingRequiredFields = bookingForm.querySelectorAll('input[required], textarea[required]');
    function validateBookingForm() {
        let allFieldsFilled = true;
        bookingRequiredFields.forEach(function(field) {
            if (field.value.trim() === '') {
                allFieldsFilled = false;
            }
        });
        bookingSubmitButton.disabled = !allFieldsFilled;
    }

    bookingRequiredFields.forEach(function(field) {
        field.addEventListener('input', validateBookingForm);
    });
    validateBookingForm();
});
function sendMail2() {
    const rawDateValue = document.getElementById("dot").value;
    if (!rawDateValue) {
        alert('Please select a date and time.');
        return;
    }
    const dateObject = new Date(rawDateValue);
    const readableDate = dateObject.toLocaleString('en-US', {
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });
    var params2 = {
        name: document.getElementById("name2").value,
        email: document.getElementById("email2").value,
        phone: document.getElementById("phone2").value,
        dob: readableDate,
    };
    const serviceID = "service_s2b2yag";
    const templateID = "template_a4msl63";
    emailjs.send(serviceID, templateID, params2)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email sent successfully!');
            document.getElementById('booking-form').reset();
            document.getElementById('submit-btn2').disabled = true;
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
    nav.style.background = "rgba(0, 0, 0, 0.89)";  
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