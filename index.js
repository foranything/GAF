document.getElementById("button").addEventListener("click", (e) => {
  const value = document.getElementById("crsdevName").value;
  chrome.tabs.executeScript({
    code: `localStorage.setItem('crsdevName', '${value}')`,
  });
});
