API Testing Tool - Chrome Extension

Overview

The API Testing Tool is a simple Chrome extension designed to help developers test APIs directly from their browser. The tool provides an easy-to-use interface for making API requests, selecting HTTP methods, setting headers, and handling request bodies, all within the Chrome browser.

With this extension, users can:

Test APIs in a new tab or directly within the extension popup.

Use common HTTP methods like GET, POST, PUT, and DELETE.

Customize requests with headers, body, and authorization.

Features

Popup or Full-Page Mode:

Use the extension within a small popup.

Switch to a full-page view for a larger workspace.

API Request Options:

Select HTTP methods (GET, POST, PUT, DELETE).

Input the endpoint URL.

Add headers and authorization.

Include a request body (if required).

Dynamic Navigation:

Easily toggle between the popup interface and the API testing tool.

Future-Proof Design:

Built with a modular architecture to support future feature enhancements.

Setup Instructions

1. Download the Repository

Clone the repository using:

git clone https://github.com/your-username/api-testing-tool-extension.git

2. Load the Extension in Chrome

Open Chrome and navigate to chrome://extensions/.

Enable Developer Mode using the toggle in the top-right corner.

Click Load unpacked and select the folder where the repository was cloned.

3. Verify the Extension

The extension should now appear in your Chrome toolbar with the name "API Testing Tool".

Click the extension icon to open the popup interface.

How to Use

1. Open the Extension

Click on the "API Testing Tool" icon in the Chrome toolbar to open the popup interface.

2. Choose an Option

Open in New Tab: Launches the API testing interface in a new browser tab.

Use Here: Loads the API testing tool within the popup interface.

3. Test an API

Select the HTTP method (GET, POST, PUT, DELETE).

Enter the API endpoint URL.

Add headers, authorization, and request body (if required).

Click the Fetch button to send the request.

4. View the Response

View the response directly in the popup or new tab.

For "Use Here" mode, you can switch to a full-page view to see the response.

Target Audience

This tool is designed for:

Developers who frequently test APIs during development.

QA engineers testing REST APIs.

Anyone looking for a lightweight API testing solution integrated into the Chrome browser.

Future Plans

The project is designed to be modular, enabling easy feature enhancements. Future updates may include:

Support for additional HTTP methods (e.g., PATCH, OPTIONS).

Request History: Save and reuse previous API requests.

Environment Variables: Manage and switch between different API environments (e.g., Development, Staging, Production).

Response Formatting: Pretty-print JSON responses for better readability.

Error Handling Improvements: Detailed error messages for failed requests.

Export Requests: Export and import API requests for sharing.

Contributing

We welcome contributions! To contribute:

Fork the repository.

Create a feature branch:

git checkout -b feature-name

Commit your changes:

git commit -m "Add feature-name"

Push the branch:

git push origin feature-name

Open a Pull Request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Contact

For feedback, feature requests, or support, feel free to create an issue on the GitHub repository.
