const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const saveFormData = () => {
  formData.email = emailInput.value;
  formData.message = messageInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

form.addEventListener('input', saveFormData);

const loadFormData = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email;
    formData.message = parsedData.message;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
};

loadFormData();

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});
