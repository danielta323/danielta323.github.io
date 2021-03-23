var noOpenerBtn = document.getElementById('no_opener_btn');
noOpenerBtn.addEventListener('click', () => {
  var popup = window.open('https://danielta323.github.io/recursive_opener.html', '_blank');
  popup.postMessage("aaaaaaaaaaaaaaaaaaaaaaaaaaa", "https://danielta323.github.io");
});

window.addEventListener("message", (event) => {
  if (event.origin !== "https://danielta323.github.io")
    return;

  console.log('event.source', event.source);
  console.log('event.data', event.data);
}, false);
