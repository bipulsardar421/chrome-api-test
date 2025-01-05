$(document).ready(function () {
  console.log("popup");
    // Handle "Open in New Tab" button click
    $("#openNewTab").on("click", function () {
      chrome.tabs.create({ url: chrome.runtime.getURL("api.html") });
    });
  
    // Handle "Use Here" button click
    $("#useHere").on("click", function () {
      window.location.href = chrome.runtime.getURL("api.html");
    });
  });
  