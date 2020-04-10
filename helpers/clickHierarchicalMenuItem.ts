declare namespace WebdriverIO {
  interface Browser {
    clickHierarchicalMenuItem(label: string): Promise<void>;
  }
}

browser.addCommand('clickHierarchicalMenuItem', async (label: string) => {
  const oldUrl = await browser.getUrl();
  const item = await browser.$(`.ais-HierarchicalMenu-label=${label}`);
  // Assures us that the element is in the viewport
  await item.scrollIntoView();

  await item.click();

  // Changing the URL will also change the page element IDs in Internet Explorer
  // Not waiting for the URL to be properly updated before continuing can make the next tests fail
  await browser.waitUntil(async () => (await browser.getUrl()) !== oldUrl, {
    timeoutMsg: `URL was not updated after click on "${label}" in hierarchical menu`,
  });
});
