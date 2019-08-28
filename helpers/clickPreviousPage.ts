declare namespace WebdriverIOAsync {
  interface Browser {
    clickPreviousPage(): Promise<boolean>;
  }
}

browser.addCommand('clickPreviousPage', async () => {
  const pageNumber = await browser.getCurrentPage();
  const page = await browser.$(
    `.ais-Pagination-item--previousPage .ais-Pagination-link`
  );

  await page.click();

  return browser.waitForElement(
    `.ais-Pagination-item--selected=${pageNumber - 1}`
  );
});
