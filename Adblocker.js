(function removeAds() {
    const adSelectors = [
        '[id^="ad-"]',
        '[class*="ad-"]',
        '[class^="ads"]',
        '[id*="ads"]',
        '[class*="sponsor"]',
        '[id*="sponsor"]',
        '[class*="banner"]',
        '[id*="banner"]',
        'iframe[src*="ads"]',
        'iframe[src*="doubleclick"]',
        'iframe[src*="googlesyndication"]'
    ];

    function blockAds() {
        adSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
                el.remove();
            });
        });
    }

    // Initial cleanup
    blockAds();

    // Re-run every 2 seconds to catch dynamically loaded ads
    setInterval(blockAds, 2000);

    console.log("Basic JS ad blocker running...");
})();
