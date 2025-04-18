export function handleSignUpSubmit(e) {
    e.preventDefault();
  
    const form = e.target;
    const username = form[0].value;
    const password = form[1].value;
    const confirmPassword = form[2].value;
    const email = form[3].value;
    const confirmEmail = form[4].value;

    const emailHandle = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
    /* Need to also check that username doesnt already exist in data base */
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!emailHandle.test(email)) {
        alert("Invalid email format.");
        return "Invalid email format.";
      }
  
    if (email !== confirmEmail) {
      alert("Emails do not match.");
      return;
    }
    
    /* Everything worked, either log them in and move to the map page or move them to log in page */
    alert("Not Built Yet...");
}