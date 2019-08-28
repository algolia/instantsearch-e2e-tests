declare namespace WebdriverIOAsync {
  interface Browser {
    clickNextPage(): Promise<boolean>;
  }
}

browser.addCommand('clickNextPage', async () => {
  const pageNumber = await browser.getCurrentPage();
  const page = await browser.$(
    `.ais-Pagination-item--nextPage .ais-Pagination-link`
  );

  await page.click();

  return browser.waitForElement(
    `.ais-Pagination-item--selected=${pageNumber + 1}`
  );
});
