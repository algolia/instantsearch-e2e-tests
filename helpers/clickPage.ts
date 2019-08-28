declare namespace WebdriverIOAsync {
  interface Browser {
    clickPage(number: number): Promise<boolean>;
  }
}

browser.addCommand('clickPage', async (number: number) => {
  const page = await browser.$(`.ais-Pagination-link=${number}`);

  await page.click();

  return browser.waitForElement(`.ais-Pagination-item--selected=${number}`);
});
