document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        // Optional settings (defaults are usually fine for basic setup):
        // offset: 120, // offset (in px) from the original trigger point
        // delay: 0, // values from 0 to 3000, with step 50ms
        // duration: 400, // values from 0 to 3000, with step 50ms
        // easing: 'ease-in-out', // default easing for AOS animations
        // once: false, // whether animation should happen only once - while scrolling down
        // mirror: false, // whether elements should animate out while scrolling past them
        // anchorPlacement: 'top-bottom', // defines which position of the element should trigger the animation
    });
    
    
    // Get the input textfield element
    const messageInput = document.getElementById('footertextarea');
    const sendEmailButton = document.getElementById('sendemailbutton');

    sendEmailButton.addEventListener('click', function(event) {
        // Prevent the default link behavior (e.g., navigating to #)
        event.preventDefault();

        const recipientEmail = 'inkslingerswritingco@gmail.com'; // Replace with the actual recipient email
        const defaultSubject = 'Message from User'; // A default subject if you only use the textfield for body

        // Get the text from the textfield
        const messageBody = messageInput.value;

        // You might use the textfield content *as* the subject if it's meant to be short.
        // Or, use it as the body, as shown below.
        // If you want the textfield to be the subject:
        // const subject = messageInput.value;
        // const body = ''; // Or some other fixed body

        // For this example, we'll use it as part of the body, combined with a default subject.
        const combinedSubject = defaultSubject; // Use the default subject
        const combinedBody = messageBody;       // Use the textfield content as the body

        // Encode the subject and message body for URL safety
        const encodedSubject = encodeURIComponent(combinedSubject);
        const encodedBody = encodeURIComponent(combinedBody);

        // Construct the mailto: URL
        // ?subject= for the email subject
        // &body= for the email body
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}&body=${encodedBody}`;

        // Set the href of the link button and trigger the click
        // This will open the user's default email client
        window.location.href = mailtoLink;
    });
});


