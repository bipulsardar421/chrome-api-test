// Function to change the iframe's source
function changeIframeSource(page) {
    console.log("skjfha");
    const iframe = document.getElementById("contentFrame");

    // Set the iframe source based on the selected page
    if (iframe) {
        iframe.src = page;
    }
}

// Listen for messages to switch between pages (e.g., popup.html and api.html)
window.addEventListener("message", function (event) {
    if (event.data && event.data.page) {
        if (event.data.page === "api") {
            changeIframeSource("api.html");
        } else if (event.data.page === "popup") {
            changeIframeSource("popup.html");
        }
    }
});
