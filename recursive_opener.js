document.querySelectorAll('.opener').forEach((btn => {
  btn.addEventListener('click', (evt) => {
    const targetId = `${evt.target.dataset.target}`;
    window.popupWindow = window.open('recursive_opener.html', targetId);
    window.popupWindow.postMessage("aaaaaaaaaaaaaaaaaaaaaaaaaaa", location.origin);
  });
}));

document.querySelectorAll('.noopener').forEach((btn => {
  btn.addEventListener('click', (evt) => {
    const targetId = `${evt.target.dataset.target}`;
    window.popupWindow = window.open('recursive_opener.html', targetId, 'noopener');
    window.popupWindow.postMessage("aaaaaaaaaaaaaaaaaaaaaaaaaaa", location.origin);
  });
}));

window.addEventListener('message', (event) => {
  console.log(`Received message: ${event.data}`);
});
