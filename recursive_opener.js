document.querySelectorAll('button').forEach((btn => {
  btn.addEventListener('click', (evt) => {
    const targetId = `${evt.target.id.replace('open_btn', '')}`;
    window.popupWindow = window.open('recursive_opener.html', targetId);
    window.popupWindow.postMessage("aaaaaaaaaaaaaaaaaaaaaaaaaaa", "https://danielta323.github.io");
  });
}));
