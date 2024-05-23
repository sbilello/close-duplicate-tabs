document.getElementById('close-duplicates').addEventListener('click', () => {
  chrome.tabs.query({}, (tabs) => {
    const tabUrls = new Set();
    tabs.forEach((tab) => {
      if (tabUrls.has(tab.url)) {
        chrome.tabs.remove(tab.id);
      } else {
        tabUrls.add(tab.url);
      }
    });
  });
});