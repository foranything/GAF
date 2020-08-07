chrome.webNavigation.onCompleted.addListener(
  function (details) {
    if (/merge_requests.*edit/.test(details.url)) {
      chrome.tabs.executeScript({
        file: 'contents.js',
      });
    }
  },
  {
    url: [
      {
        hostContains: ".crsdev.",
      },
    ],
  }
);
