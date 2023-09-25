const headphonePage = require('../page-objects/headphone-page.js');
const homePage = require('../page-objects/home-page.js');
const testData = require('../test-data/data.json');

describe('Techstrove web page automation', () => {
    it('load the techstrove url', async() => {
        await homePage.loadUrl();
        expect(await homePage.$header().isDisplayed())
            .withContext('Expect header to be displayed')
            .toBe(true);
    });

    it('Hover Over the collection and click on headphone', async() => {
        await homePage.hoverOverTheCollection();
        expect(await homePage.$header2().isDisplayed())
            .withContext('Expected header to be displayed')
            .toBe(true);
        expect(await headphonePage.$verifyPrice(testData.productName, testData.price).isDisplayed())
            .withContext('Expected product and price should be displayed')
            .toBe(true);
    });

    it('Select a product from the Headphone page and view the details', async() => {
        await headphonePage.$viewHeadPhone();
        expect(await headphonePage.$productHeader().isDisplayed())
            .withContext()
            .toBe(true);
    });
    it('Cuztomize the seectedv headphone', async() => {
        await headphonePage.customizeproduct();
        expect(await headphonePage.$cartHeader().isDisplayed())
            .withContext('Expected header to be displayed')
            .toBe(true);
    });
});