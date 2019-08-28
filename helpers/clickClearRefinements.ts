declare namespace WebdriverIOAsync {
  interface Browser {
    clickClearRefinements(): Promise<boolean>;
  }
}

browser.addCommand('clickClearRefinements', async () => {
  const clearButton = await browser.$(`.ais-ClearRefinements-button`);

  await clearButton.click();

  return browser.waitForElement(`.ais-ClearRefinements-button--disabled`);
});
