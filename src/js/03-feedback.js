import throttle from 'lodash.throttle';
const emailContainer = document.getElementById("emailContainer")
const messageContainer  = document.getElementById("MessageContainer")

// Cargar los valores almacenados en el almacenamiento local cuando se carga la página
emailContainer.value = localStorage.getItem("email") || '';
messageContainer.value = localStorage.getItem("message") || '';

// Función para guardar en local storage
const saveToLocalStorage = throttle(() => {
  localStorage.setItem("email", emailContainer.value);
  localStorage.setItem("message", messageContainer.value);
}, 500);

// Escuchar eventos de entrada en los campos de formulario y guardar en local storage
emailContainer.addEventListener('input', () => {
  saveToLocalStorage();
});

messageContainer.addEventListener('input', () => {
  saveToLocalStorage();
});

// Manejar el envío del formulario
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener('click', () => {
  // Obtener los valores actuales de email y message
  const emailValue = emailContainer.value;
  const messageValue = messageContainer.value;

  // Limpiar los campos del formulario
  emailContainer.value = '';
  messageContainer.value = '';

  // Borrar los datos del almacenamiento local
  localStorage.removeItem("email");
  localStorage.removeItem("message");

  // Emitir un objeto con los valores actuales a la consola
  console.log({ email: emailValue, message: messageValue });
});