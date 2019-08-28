import { URLSearchParams } from 'url';

describe('InstantSearch - Initialize state from the route', () => {
  it('navigates to the e-commerce demo with refinements set in route', async () => {
    const params = new URLSearchParams({
      query: 'mixer',
      page: '2',
      brands: 'KitchenAid',
      rating: '4',
      price: '50:350',
      free_shipping: 'true', // eslint-disable-line @typescript-eslint/camelcase
      sortBy: 'instant_search_price_desc',
      hitsPerPage: '32',
    });
    await browser.url(
      `examples/e-commerce/search/Appliances%2FSmall+Kitchen+Appliances/?${params.toString()}`
    );
  });

  it('must have "mixer" set as initial search box value', async () => {
    const searchBoxValue = await browser.getSearchBoxValue();

    expect(searchBoxValue).toEqual('mixer');
  });

  it('must have "Appliances" and "Small Kitchen Appliances" items selected in the category menu', async () => {
    const items = await browser.getSelectedHierarchicalMenuItems();

    expect(items).toEqual(['Appliances', 'Small Kitchen Appliances']);
  });

  it('must have "KitchenAid" brand selected in the brands menu', async () => {
    const brand = await browser.getSelectedRefinementListItem();

    expect(brand).toEqual('KitchenAid');
  });

  it('must have lower price set to $50 and the upper price set to $350 in the price range', async () => {
    const lowerPrice = await browser.getRangeSliderLowerBound();
    const upperPrice = await browser.getRangeSliderUpperBound();

    expect(lowerPrice).toEqual(50);
    expect(upperPrice).toEqual(350);
  });

  it('must have free shipping box checked', async () => {
    const freeShipping = await browser.getToggleRefinementStatus();

    expect(freeShipping).toEqual(true);
  });

  it('must have rating "4 & up" selected in the rating menu', async () => {
    const rating = await browser.getRatingMenuValue();

    expect(rating).toEqual('4 & up');
  });

  it('must have "Price descending" selected in the sort select', async () => {
    const sortBy = await browser.getSortByValue();

    expect(sortBy).toEqual('instant_search_price_desc');
  });

  it('must have "32 hits per page" selected in the hits per page select', async () => {
    const hitsPerPage = await browser.getHitsPerPage();

    expect(hitsPerPage).toEqual(32);
  });

  it('must have page 2 selected in the pagination', async () => {
    const page = await browser.getPage();

    expect(page).toEqual(2);
  });

  it('must have the expected results', async () => {
    const hitsTitles = await browser.getHitsTitles();

    expect(hitsTitles).toEqual([
      'KitchenAid - 9-Speed Hand Mixer - Onyx Black',
      'KitchenAid - Attachment Pack with Citrus Juicer for Most KitchenAid Stand Mixers - White',
      'KitchenAid - Ice Cream Maker for Most KitchenAid Stand Mixers - White',
      'KitchenAid - Pasta Sheet Roller for Most KitchenAid Stand Mixers - Silver',
      'KitchenAid - 7-Speed Hand Mixer - Contour Silver',
      'KitchenAid - 7-Speed Hand Mixer - Onyx Black',
      'KitchenAid - 7-Speed Hand Mixer - White',
      'KitchenAid - 5-Quart Glass Mixing Bowl - Frosted Glass',
      'KitchenAid - 3-Speed Hand Mixer - Contour Silver',
      'KitchenAid - 3-Speed Hand Mixer - Onyx Black',
    ]);
  });
});
