import throttle from 'lodash.throttle';
const emailContainer = document.getElementById("emailContainer")
const messageContainer  = document.getElementById("MessageContainer")

emailContainer.addEventListener("input", (e) =>{
    localStorage.getItem("feedback-form-state", valueEmail)
    const valueEmail = emailContainer.value
    localStorage.setItem("feedback-form-state",valueEmail )
  });
localStorage.setItem("message", )
messageContainer.addEventListener("input", (e) => {
    localStorage.getItem("feedback-form-state", valueMessage)
    const valueMessage = messageContainer.value
    localStorage.setItem("feedback-form-state",valueMessage )
  });
