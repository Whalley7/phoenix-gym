document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // stop the form from submitting
  
    // Get form values
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('message').value;
  
    // Save to localStorage
    localStorage.setItem('contactName', name);
    localStorage.setItem('contactEmail', email);
    localStorage.setItem('contactMessage', message);
  
    // Display the data
    displaySubmittedData();
  });
  
  // Function to display data
  function displaySubmittedData() {
    const name = localStorage.getItem('contactName');
    const email = localStorage.getItem('contactEmail');
    const message = localStorage.getItem('contactMessage');
  
    if (name && email && message) {
      document.getElementById('display-name').textContent = name;
      document.getElementById('display-email').textContent = email;
      document.getElementById('display-message').textContent = message;
    }
  }
  
  // Load any existing data on page load
  window.addEventListener('DOMContentLoaded', displaySubmittedData);