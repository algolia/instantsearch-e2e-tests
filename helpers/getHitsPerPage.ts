declare namespace WebdriverIO {
  interface Browser {
    getHitsPerPage(): Promise<number>;
  }
}

browser.addCommand('getHitsPerPage', async () => {
  const hitsPerPage = await browser.$('.ais-HitsPerPage-select');

  return Number(await hitsPerPage.getValue());
});
