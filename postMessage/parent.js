window.addEventListener('load', () => {
  window.popup = window.open("https://danielta323.github.io/postMessage/child.html");

  window.popup.postMessage("The user is 'bob' and the password is 'secret'",
                    "https://danielta323.github.io");

  window.popup.postMessage("hello there!", "https://danielta323.github.io");

  function receiveMessage(event)
  {
    if (event.origin !== "https://danielta323.github.io")
      return;
  }
  window.addEventListener("message", receiveMessage, false);
});
