let wf = _whatFont();
wf.setCSSURL(browser.extension.getURL("") + "/wf.css");

browser.runtime.onMessage.addListener(message => {
  if (message === 'whatfontActivate') {
    if (window._WHATFONT) {
      wf.restore();
      isActive = false;
    } else {
      wf.init();
      isActive = true;
    }
  }
});
