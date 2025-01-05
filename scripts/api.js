$(document).ready(function () {
  // Enable/Disable Authorization Token Input
  $("#authType").on("change", function () {
      const authType = $(this).val();
      $("#authToken").prop("disabled", authType === "none");
  });

  // Enable/Disable Request Body Input
  $("input[name='bodyType']").on("change", function () {
      const bodyType = $(this).val();
      $("#requestBody").prop("disabled", bodyType === "none");
  });

  // Handle Form Submission
  $("#apiForm").on("submit", function (e) {
      e.preventDefault();

      const method = $("input[name='method']:checked").val();
      const url = $("#url").val();
      const authType = $("#authType").val();
      const authToken = $("#authToken").val();
      const bodyType = $("input[name='bodyType']:checked").val();
      const bodyContent = $("#requestBody").val();

      // Validate URL
      if (!url) {
          $("#responseOutput").text("Error: URL is required.");
          return;
      }

      // Validate Token if required
      if ((authType === "Bearer" || authType === "Basic") && !authToken) {
          $("#responseOutput").text("Error: Authorization token is required.");
          return;
      }

      // Validate Body Content if needed
      if (bodyType !== "none" && !bodyContent) {
          $("#responseOutput").text("Error: Request body is required.");
          return;
      }

      const headers = {};
      if (authType !== "none") {
          headers["Authorization"] = authType + " " + authToken;
      }

      let options = {
          method,
          headers,
      };

      if (method !== "GET" && bodyType !== "none") {
          headers["Content-Type"] = bodyType === "json" ? "application/json" : "text/plain";

          // Validate JSON format if bodyType is JSON
          if (bodyType === "json") {
              try {
                  options.body = JSON.stringify(JSON.parse(bodyContent));
              } catch (error) {
                  $("#responseOutput").text("Error: Invalid JSON format.");
                  return;
              }
          } else {
              options.body = bodyContent;
          }
      }

      // Show the loading spinner
      $("#loadingSpinner").show();
      $("#responseOutput").text(""); // Clear previous response

      // Send API request
      fetch(url, options)
          .then((response) => {
              if (!response.ok) {
                  throw new Error("API request failed with status: " + response.status);
              }
              return response.text();
          })
          .then((data) => {
              // Hide the spinner
              $("#loadingSpinner").hide();

              // Check if the response is JSON
              let formattedResponse = data;
              try {
                  formattedResponse = JSON.parse(data);
                  formattedResponse = JSON.stringify(formattedResponse, null, 2); // Pretty print JSON
              } catch (error) {
                  // If not valid JSON, just return the raw response
                  formattedResponse = data;
              }

              $("#responseOutput").text(formattedResponse);
              $("#openResponseTab").show();
          })
          .catch((error) => {
              // Hide the spinner and show error
              $("#loadingSpinner").hide();
              $("#responseOutput").text("Error: " + error.message);
              $("#openResponseTab").hide();
          });
  });

  // Handle "Open in New Tab" for Response
  $("#openResponseTab").on("click", function () {
      const responseText = $("#responseOutput").text();
      const blob = new Blob([responseText], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      chrome.tabs.create({ url });
  });
});
