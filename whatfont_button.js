browser.browserAction.onClicked.addListener(event => {
  browser.tabs.query({active: true}).then(tabs => {
    const curTab = tabs.find(tab => tab.windowId === event.windowId);
    if (curTab)
      browser.tabs.sendMessage(curTab.id, 'whatfontActivate');
  });
});
