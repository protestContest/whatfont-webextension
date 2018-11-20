browser.browserAction.onClicked.addListener(() => {
  browser.tabs.query({active: true}).then(tabs => {
    if (tabs.length > 0)
      browser.tabs.sendMessage(tabs[0].id, 'whatfontActivate');
  });
});
