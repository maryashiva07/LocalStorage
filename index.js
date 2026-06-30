// Write your code below

function handleFormSubmit(event) {
    event.preventDefault();

    let userName = event.target.username.value;
    let email = event.target.email.value;
    let ph = event.target.phone.value;

    localStorage.setItem("username", userName);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", ph);
}

module.exports = handleFormSubmit;
