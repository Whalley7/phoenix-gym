// Handle form submission and store data locally
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const userMessage = document.getElementById('message').value;

  localStorage.setItem('storedMessage', userMessage);
  localStorage.setItem('storedEmail', email);
  localStorage.setItem('storedUsername', username);

  displayStoredData(); // show the modal after submission
});

// Show the modal with stored data
function openCustomModal(username, email, message) {
  const dynamicContent = `
    <h4>Hello, ${username}</h4>
    <p>Thank you for your message. One of our team will get back to you as soon as we can.</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  $("#customModalBody").html(dynamicContent);
  $("#customModal").modal("show");

  $('#customModal').on('hidden.bs.modal', function () {
    document.getElementById('contact-form').reset();
  });
}

// Display stored data (after form submit)
function displayStoredData() {
  const storedUsername = localStorage.getItem("storedUsername") || "Guest";
  const storedEmail = localStorage.getItem("storedEmail") || "Not provided";
  const storedMessage = localStorage.getItem("storedMessage") || "No message found";

  openCustomModal(storedUsername, storedEmail, storedMessage);
}

// Display modal if URL has query parameters
function displayModalFromQuery() {
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get("contact-name");
  const email = urlParams.get("contact-email");
  const message = urlParams.get("message");

  if (name && email && message) {
    openCustomModal(decodeURIComponent(name), decodeURIComponent(email), decodeURIComponent(message));
  }
}

// Run this only when the page loads
window.addEventListener('DOMContentLoaded', function () {
  displayModalFromQuery(); // check URL query params
});
