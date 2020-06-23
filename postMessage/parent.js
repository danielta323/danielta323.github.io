/*
 * A窗口的域名是<http://example.com:8080>，以下是A窗口的script标签下的代码：
 */

var popup = window.open("https://danielta323.github.io/postMessage/child.html");

popup.postMessage("The user is 'bob' and the password is 'secret'",
                  "https://danielta323.github.io");

popup.postMessage("hello there!", "https://danielta323.github.io");

function receiveMessage(event)
{
  if (event.origin !== "https://danielta323.github.io")
    return;

}
window.addEventListener("message", receiveMessage, false);