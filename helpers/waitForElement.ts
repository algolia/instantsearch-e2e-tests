declare namespace WebdriverIO {
  interface Browser {
    waitForElement(selector: string | Function): Promise<boolean>;
  }
}

browser.addCommand('waitForElement', (selector: string) =>
  browser.waitUntil(async () => (await browser.$$(selector)).length > 0, {
    timeoutMsg: `Element matching selector "${selector}" wasn't found`,
  })
);
