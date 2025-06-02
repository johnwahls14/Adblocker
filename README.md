# Adblocker

A lightweight, open-source JavaScript-based ad blocker designed to enhance your browsing experience by removing unwanted advertisements from web pages. This project demonstrates the core concepts behind ad blocking and can be used as a foundation for building more advanced browser extensions.

## Features

- Blocks most common ad banners, pop-ups, and overlays
- Simple and easy to integrate into existing projects
- Customizable filter lists for specific ad domains or elements
- Minimal footprint and fast performance
- No external dependencies

## How It Works

The ad blocker scans the web page for known ad elements and removes them using DOM manipulation. It utilizes a set of configurable selectors and patterns to identify and block ads. The script can be run as a userscript, browser extension, or included directly in your web project.

## Usage

### As a Userscript

You can use tools like [Tampermonkey](https://www.tampermonkey.net/) or [Greasemonkey](https://www.greasespot.net/) to run the script on your browser:

1. Install Tampermonkey/Greasemonkey.
2. Create a new script and paste the contents of `adblocker.js`.
3. Save and enable the script.

### As a Browser Extension

You can package this script as a Chrome or Firefox extension. See the respective browser documentation for creating extensions.

### Direct Integration

Simply include the `adblocker.js` file at the end of your HTML file before the closing `</body>` tag:

```html
<script src="adblocker.js"></script>
```

## Example

```js
// adblocker.js
(function() {
  const adSelectors = [
    'iframe[src*="ads"]',
    '[class*="ad-"]',
    '[id*="ad-"]',
    '[class*="banner"]',
    '[id*="sponsor"]',
    // Add more selectors as needed
  ];

  function removeAds() {
    adSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(ad => ad.remove());
    });
  }

  // Run initially and on DOM changes
  removeAds();
  const observer = new MutationObserver(removeAds);
  observer.observe(document.body, { childList: true, subtree: true });
})();
```

## Customization

- **Add Selectors**: Add more CSS selectors to the `adSelectors` array for more comprehensive blocking.
- **Whitelist Sites**: Add logic to skip blocking on specific domains.
- **Performance**: For large pages, consider throttling the observer or optimizing selectors.

## Disclaimer

This ad blocker is for educational purposes and may not block all ads. Use responsibly and consider supporting sites you love by whitelisting them.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Contributions are welcome!** Feel free to open issues or submit pull requests to improve this project.
