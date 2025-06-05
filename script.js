window.onload = function () {
    AOS.init();

    // Initialize Typed.js
    var typedOptions = {
        strings: ['ASP.NET Core Developer', 'Angular Front-End Developer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
    };
    var typed = new Typed('.typed', typedOptions);

    // Event listener for color picker
    document.getElementById('colorPicker').addEventListener('input', function(event) {
        const selectedColor = event.target.value;
        document.querySelectorAll('.dynamic-color').forEach(function(element) {
            element.style.color = selectedColor;
        });
    });
};
const navOffset = 100;
function sendMail(event) {
    event.preventDefault(); // Prevent form from reloading the page

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };


    //readMore
 
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', function() {
            const remainingContent = this.previousElementSibling.querySelector('.remaining-content');
            if (remainingContent.classList.contains('d-none')) {
                remainingContent.classList.remove('d-none');
                this.textContent = 'Read Less'; // Change button text to 'Read Less'
            } else {
                remainingContent.classList.add('d-none');
                this.textContent = 'Read More'; // Change button text back to 'Read More'
            }
        });
    });
 


    const serviceId = "service_su7ck5e";
    const templateId = "template_rp7twzf";
    
    emailjs.send(serviceId, templateId, params)
    .then(res => {
        // Clear the input fields only after a successful send
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        
        console.log(res);
        alert("Your message was successfully sent!");
    }).catch(err => {
        console.log("Error details:", err);
        alert("There was an error sending your message.");
    });
}
