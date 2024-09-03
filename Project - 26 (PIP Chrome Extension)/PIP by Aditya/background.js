chrome.action.onClicked.addListener((tab) => {
    console.log("Working!!");
    const files = ["script.js"];
    chrome.scripting.executeScript({
        target: { tabId: tab.id, allFrames: true },
        files: files
    });
});