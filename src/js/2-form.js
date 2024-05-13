document.addEventListener('DOMContentLoaded', function () {
  const formData = {
    email: '',
    message: '',
  };

  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');
  const form = document.querySelector('.feedback-form');

  function saveFormData() {
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }

  function restoreFormData() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      emailInput.value = parsedData.email;
      messageInput.value = parsedData.message;
      formData.email = parsedData.email;
      formData.message = parsedData.message;
    }
  }

  restoreFormData();

  form.addEventListener('input', function (event) {
    const { name, value } = event.target;
    formData[name] = value.trim();
    saveFormData();
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!formData.email || !formData.message) {
      alert('Fill please all fields');
    } else {
      console.log('Form data:', formData);
      localStorage.removeItem('feedback-form-state');
      emailInput.value = '';
      messageInput.value = '';
      formData.email = '';
      formData.message = '';
    }
  });
});
