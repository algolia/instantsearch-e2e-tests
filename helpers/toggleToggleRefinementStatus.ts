declare namespace WebdriverIOAsync {
  interface Browser {
    toggleToggleRefinementStatus(): Promise<boolean>;
  }
}

browser.addCommand('toggleToggleRefinementStatus', async () => {
  const checkbox = await browser.$('.ais-ToggleRefinement-checkbox');

  return checkbox.click();
});
