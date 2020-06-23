window.addEventListener('load', () => {
  window.display = document.getElementById('displaymessage');

  function receiveMessage(event)
  {
    // Do we trust the sender of this message?
    if (event.origin !== "https://danielta323.github.io")
      return;

    // event.source is window.opener
    // event.data is "hello there!"

    // Assuming you've verified the origin of the received message (which
    // you must do in any case), a convenient idiom for replying to a
    // message is to call postMessage on event.source and provide
    // event.origin as the targetOrigin.
    event.source.postMessage(
      "hi there yourself!  the secret response is: rheeeeet!",
      event.origin
    );
    console.log('event', event);
    // display.innerText = event.detail.message;
  }

  window.addEventListener("message", receiveMessage, false);
  console.log('ready to receive msg......');
});
