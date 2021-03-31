var injection = document.getElementById('injection');
var injectionDisplay = document.getElementById('injection_display');

function renderInjection() {
  injectionDisplay.innerHTML = injection.value;
}

injection.addEventListener('blur', renderInjection);
injection.addEventListener('click', (evt) => {
  switch(evt.key) {
    case 'Enter':
      renderInjection();
      break;
  }
});
