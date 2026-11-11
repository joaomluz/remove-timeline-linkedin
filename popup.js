const t = document.getElementById("t");
chrome.storage.sync.get({ enabled: true }, (r) => (t.checked = r.enabled));
t.addEventListener("change", () => chrome.storage.sync.set({ enabled: t.checked }));
