const worker1Route = "/getcolo";
const worker2Route = "/getcolo-url";

// Fetch the Cloudflare Worker 1 response and update the code snippet section
fetch(worker1Route)
  .then((response) => response.text())
  .then((data) => {
    const codeSection = document.getElementById("box-1-code");
    //codeSection.innerHTML = `<pre><code>${data}</code></pre>`;
    codeSection.innerHTML = `<pre><code>$ curl -s https://headers.dlsdemo.com/ | grep -o '"colo": *"[^"]*"' <br><br>${data}<br><br></code></pre>`;
  })
  .catch((error) => console.log(error));

// Fetch the Cloudflare Worker 2 response and update the code snippet section
fetch(worker2Route)
  .then((response) => response.text())
  .then((data) => {
    const codeSection = document.getElementById("box-2-code");
    //codeSection.innerHTML = `<pre><code>${data}</code></pre>`;
    codeSection.innerHTML = `<pre><code>$ curl -sI https://bootstrap.dlsdemo.com/ | grep -oE 'cf-ray: [^[:space:]]+' | grep -oE '[^-]+$' | awk '{print "\"colo\":\""$0"\""}'<br><br>${data}<br><br></code></pre>`;
  })
  .catch((error) => console.log(error));
