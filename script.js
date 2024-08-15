document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:gourv6268@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
    window.location.href = mailtoLink;
});
