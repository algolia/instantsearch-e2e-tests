declare namespace WebdriverIOAsync {
  interface Browser {
    clickRatingMenuItem(label: string): Promise<boolean>;
  }
}

browser.addCommand('clickRatingMenuItem', async (label: string) => {
  const rating = await browser.$(`.ais-RatingMenu-link[aria-label="${label}"]`);

  await rating.click();

  return browser.waitForElement(
    `.ais-RatingMenu-item--selected .ais-RatingMenu-link[aria-label="${label}"]`
  );
});
