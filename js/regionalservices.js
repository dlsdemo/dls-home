const worker1Route = "/getcolo-workers"; // Regional Services set to Earth
const worker2Route = "https://usworkers.dlsdemo.com/"; // Regional Services set to USA
const worker3Route = "https://euworkers.dlsdemo.com/"; // Regional Services set to EU
const worker4Route = "/getcolo-pages"; // Regional Services set to Earth
const worker5Route = "https://us.dlsdemo.com/getcolo-pages"; // Regional Services set to USA
const worker6Route = "https://eu.dlsdemo.com/getcolo-pages"; // Regional Services set to EU

// WORKERS 1 == EARTH
fetch(worker1Route)
    .then((response) => response.text())
    .then((data) => {
        const codeSection = document.getElementById("box-1-code");
        codeSection.innerHTML = `<pre><span codeblock>${data}</span></pre>`;
        // codeSection.innerHTML = `<pre><code>$ curl -s https://headers.dlsdemo.com/ | grep -o '"colo": *"[^"]*"' <br><br>${data}<br><br></code></pre>`;
    })
    .catch((error) => console.log(error));

// WORKERS 2 == USA
fetch(worker2Route)
    .then((response) => response.text())
    .then((data) => {
        const codeSection = document.getElementById("box-2-code");
        codeSection.innerHTML = `<pre><span codeblock>${data}</span></pre>`;
        // codeSection.innerHTML = `<pre><code>$ curl -s https://usworkers.dlsdemo.com/ | grep -o '"colo": *"[^"]*"' <br><br>${data}<br><br></code></pre>`;
    })
    .catch((error) => console.log(error));

// WORKERS 3 == EU
fetch(worker3Route)
    .then((response) => response.text())
    .then((data) => {
        const codeSection = document.getElementById("box-3-code");
        codeSection.innerHTML = `<pre><span codeblock>${data}</span></pre>`;
        // codeSection.innerHTML = `<pre><code>$ curl -s https://euworkers.dlsdemo.com/ | grep -o '"colo": *"[^"]*"' <br><br>${data}<br><br></code></pre>`;
    })
    .catch((error) => console.log(error));

// PAGES 4 == EARTH
fetch(worker4Route)
    .then((response) => response.text())
    .then((data) => {
        const codeSection = document.getElementById("box-4-code");
        codeSection.innerHTML = `<pre><span codeblock>${data}</span></pre>`;
        // codeSection.innerHTML = `<pre><code>$ curl -sI https://bootstrap.dlsdemo.com/ | grep -oE 'cf-ray: [^[:space:]]+' | grep -oE '[^-]+$' | awk '{print "\"colo\":\""$0"\""}'<br><br>${data}<br><br></code></pre>`;
    })
    .catch((error) => console.log(error));

// PAGES 5 == USA
fetch(worker5Route)
    .then((response) => response.text())
    .then((data) => {
        const codeSection = document.getElementById("box-5-code");
        codeSection.innerHTML = `<pre><span codeblock>${data}</span></pre>`;
        // codeSection.innerHTML = `<pre><code>$ curl -sI https://us.dlsdemo.com/ | grep -oE 'cf-ray: [^[:space:]]+' | grep -oE '[^-]+$' | awk '{print "\"colo\":\""$0"\""}'<br><br>${data}<br><br></code></pre>`;
    })
    .catch((error) => console.log(error));

// PAGES 6 == EU
fetch(worker6Route)
    .then((response) => response.text())
    .then((data) => {
        const codeSection = document.getElementById("box-6-code");
        codeSection.innerHTML = `<pre><span codeblock>${data}</span></pre>`;
        // codeSection.innerHTML = `<pre><code>$ curl -sI https://eu.dlsdemo.com/ | grep -oE 'cf-ray: [^[:space:]]+' | grep -oE '[^-]+$' | awk '{print "\"colo\":\""$0"\""}'<br><br>${data}<br><br></code></pre>`;
    })
    .catch((error) => console.log(error));