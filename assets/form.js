document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const userMessage = document.getElementById('message').value;
   
    localStorage.setItem('storedMessage', userMessage);
    localStorage.setItem('storedEmail', email);
    localStorage.setItem('storedUsername', username);
  
   
    // Show locally stored data
    displayStoredData();
  });
  
  function openCustomModal() {
    // Retrieve values from localStorage
    var storedUsername = localStorage.getItem("storedUsername") || "Guest";
    var storedEmail = localStorage.getItem("storedEmail") || "Not provided";
    var message = localStorage.getItem("storedMessage") || "No message found";
  
    // Create the dynamic content using the retrieved values
  // Create the dynamic content using the retrieved values
  var dynamicContent = "<h4>Hello, " + storedUsername + "</h4>" 
    + "<p>Thank you for your message. One of our team will get back to you as soon as we can.</p>";
  
      
  
    // Set the content in the modal body
    $("#customModalBody").html(dynamicContent);
  
    // Show the modal
    $("#customModal").modal("show");
    $('#customModal').on('hidden.bs.modal', function () {
      $('form')[0].reset(); // This resets the form fields
  });
  
  }
  
  // Display stored data
  function displayStoredData() {
    openCustomModal();
    window.addEventListener('DOMContentLoaded', displayStoredData);
  }