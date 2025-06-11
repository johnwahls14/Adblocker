// Adblocker.js
// This code was made with AI, so it may not be correct. If so, make an issue. Issues will be appreciated!!!
// WARNING: IF YOU WOULD LIKE TO COPY THIS CODE, PLEASE MAKE A PULL REQUEST. NO  ONE MAY COPY, SKID, OR PLAGARIZE ANY PART OF THIS CODE WITHOUT EXPLICIT PERMISSION FROM ME, johnwahls14. 
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

    console.log("Adblocker.js running...");
})();
