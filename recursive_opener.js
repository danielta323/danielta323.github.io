var noOpenerBtn = document.getElementById('no_opener_btn');
noOpenerBtn.addEventListener('click', () => {
  window.popupWindow = window.open('https://danielta323.github.io/recursive_opener.html', '_blank');
  window.popupWindow.postMessage("aaaaaaaaaaaaaaaaaaaaaaaaaaa", "https://danielta323.github.io");
});

window.addEventListener("message", (event) => {
  console.log('message', event);
  console.log('event.source', event.source);
  console.log('event.data', event.data);
}, false);

if (window.opener) {
  window.opener.postMessage('yes! I have a window.opener!!!');
}