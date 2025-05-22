// You can add interactivity here
console.log("SmartSave site loaded successfully!");

// Example: basic form validation placeholder
document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (e) => {
    alert("Form submitted!");
    e.preventDefault(); // prevent default form submission
  });
});
