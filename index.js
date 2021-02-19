document.getElementById("button").addEventListener("click", (e) => {
  const value = document.getElementById("crsdevName").value;
  const reviewer = document.getElementById("reviewer").value;
  chrome.tabs.executeScript({
    code: `localStorage.setItem('crsdevName', '${value}');` + `localStorage.setItem('reviewer', '${reviewer}');`,
  });
});
