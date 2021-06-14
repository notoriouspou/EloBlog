const form = document.getElementById('contato');

function handleChange(event) {
  const camp = event.target;
  if(!camp.checkValidity()) {
    camp.classList.add('invalido');
  }
}

form.addEventListener('change', handleChange);