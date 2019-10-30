chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "https://www.google.com/search?q=video&oq=video&aqs=chrome..69i57j0l2j69i61l3.2519j0j7&sourceid=chrome&ie=UTF-8/";
    chrome.tabs.create({ url: newURL });
  });