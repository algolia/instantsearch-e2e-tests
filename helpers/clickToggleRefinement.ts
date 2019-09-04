declare namespace WebdriverIOAsync {
  interface Browser {
    clickToggleRefinement(): Promise<boolean>;
  }
}

browser.addCommand('clickToggleRefinement', async () => {
  const checkbox = await browser.$('.ais-ToggleRefinement-checkbox');

  return checkbox.click();
});
