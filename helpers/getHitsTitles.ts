declare namespace WebdriverIO {
  interface Browser {
    getHitsTitles(): Promise<string[]>;
  }
}

browser.addCommand('getHitsTitles', () =>
  browser.getTextFromSelector('.hit h1')
);
