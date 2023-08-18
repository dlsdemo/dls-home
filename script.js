const worker1Route = "/getcolo-workers"; // Regional Services set to Earth
const worker2Route = "/getcolo-pages"; // Regional Services set to Earth
const worker3Route = "https://workers.dlsdemo.com/getcolo-usa"; // Regional Services set to USA

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

// Fetch the Cloudflare Worker 3 response and update the code snippet section
fetch(worker3Route)
  .then((response) => response.text())
  .then((data) => {
    const codeSection = document.getElementById("box-3-code");
    //codeSection.innerHTML = `<pre><code>${data}</code></pre>`;
    codeSection.innerHTML = `<pre><code>$ url -s https://workers.dlsdemo.com/ | grep -o '"colo": *"[^"]*"' <br><br>${data}<br><br></code></pre>`;
  })
  .catch((error) => console.log(error));

// Fetch the Cloudflare Worker 3 response and update the code snippet section
fetch(worker3Route)
.then((response) => response.text())
.then((data) => {
  const codeSection = document.getElementById("box-4-code");
  //codeSection.innerHTML = `<pre><code>${data}</code></pre>`;
  codeSection.innerHTML = `<pre><code>$ curl -sI https://landing.dlsdemo.com/ | grep -oE 'cf-ray: [^[:space:]]+' | grep -oE '[^-]+$' | awk '{print "\"colo\":\""$0"\""}'<br><br>${data}<br><br></code></pre>`;
})
.catch((error) => console.log(error));
