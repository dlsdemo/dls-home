// Fetch the Cloudflare Worker response and update the code snippet section
fetch("/getcolo")
  .then((response) => response.text())
  .then((data) => {
    const codeSection = document.getElementById("box-1-code");
    //codeSection.innerHTML = `<pre><code>${data}</code></pre>`;
    codeSection.innerHTML = `<pre><code>$ curl -k -s https://workers.dlsdemo.com/ | grep -o '"colo": *"[^"]*"' <br><br>${data}<br><br></code></pre>`;
  })
  .catch((error) => console.log(error));
