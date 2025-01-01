# Leads Tracker Chrome Extension

A Chrome extension that allows users to save and organize URLs with custom tags. Perfect for bookmarking and managing web links with additional context.

## Features

- 🔖 Save current tab URL
- ✍️ Manually input and save URLs
- 🏷️ Add custom tags to saved URLs
- 🗑️ Delete individual URLs or all saved data
- 💾 Persistent storage using Chrome's local storage
- 🎯 Individual tag deletion
- 🔗 Direct URL opening in new tabs

## Installation

1. Clone this repository or download the source code
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

## Usage

### Saving URLs

- Click "SAVE TAB" to save the current tab's URL
- Enter a URL in the input field and click "SAVE INPUT" to manually save a link
- URLs are automatically formatted with `https://` if not included

### Managing Tags

1. For any saved URL, use the tag input field next to it
2. Enter your tag text
3. Click the "TAG" button to add the tag
4. Delete individual tags using the red delete button (×) next to each tag

### Deleting Items

- Double-click "DELETE ALL" to remove all saved URLs and tags
- Use individual delete buttons (🗑️) to remove specific URLs

## File Structure
Chrome_URL_Extension/
├── index.html # Main popup interface
├── index.css # Styles for the popup
├── index.js # Core functionality
├── background.js # Background service worker
└── manifest.json # Extension configuration


## Technical Details

- Built with vanilla JavaScript
- Uses Chrome Extension Manifest V3
- Requires `tabs` and `storage` permissions
- Implements Font Awesome icons for better UI
- Responsive design with minimum width of 600px

## Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## License

This project is open source and available under the [MIT License](LICENSE).
