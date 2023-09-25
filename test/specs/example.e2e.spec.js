const {homePage} = require('../page_objects/homePage.js');
const env = require('../../test-data/url.json');
const testData = require('../../test-data/testData.json');
const {itemDetailsPage} = require('../page_objects/item-details.js');
const {productPage} = require('../page_objects/product-page.js');
const {cartPage} = require('../page_objects/cart-page.js');

describe('Buy a product from techtrover page:', () => {
	it('launch the tech trover website', async () => {
		await homePage.openUrl();
		expect(await homePage.$pageHeader('TechTrove').isDisplayed())
		.withContext('Expect the logo to be displayed')
		.toBe(true);
	});

	it('Hover on collection option', async () => {
		await homePage.hoverCollection("Collections");
		expect(await homePage.$headPhones().isDisplayed())
		.withContext('Expect the dropdown to be displayed')
		.toBe(true);
	});

	it('click on headphones from the dropdown', async () => {
		await homePage.clickOnHeadphones();
		expect(await itemDetailsPage.$sideTitle('Headphone').isDisplayed())
		.withContext('Expect the header to be displayed')
		.toBe(true);
	});

	it('click on the item required', async () => {
		await itemDetailsPage.clickOnItemName(testData.item);
		expect(await productPage.$sideTitle('P9 Air Max Wireless Stereo Headphone').isDisplayed())
		.withContext('Expect the header to be displayed')
		.toBe(true);
	});

	it('verify the item names shown are same ', async () => {
		await productPage.verifyName();
		expect(await productPage.$verify().isDisplayed())
		.withContext('Expect the item prices displayed is same')
		.toBe(true);
	});

	it('verify the item prices shown are same ', async () => {
		await productPage.verifyPrice();
		expect(await productPage.$sideTitle().isDisplayed())
		.withContext('Expect the item names displayed is same')
		.toBe(true);
	});

	it('click on the colour button', async () => {
		await productPage.clickOnColour();
		expect(await productPage.$colourDropdown().isDisplayed())
		.withContext('Expect the dropdown list to be displayed')
		.toBe(true);
	});

	it('select the required colour from dropdown', async () => {
		await productPage.selectColour(testData.itemColour);
		expect(await productPage.$imageVerify().isDisplayed())
		.withContext('Expect the item in white colour is to be displayed as the image')
		.toBe(true);
	});

	it('click on add button to increase the quantity of the item', async () => {
		await productPage.clickOnQuantity(testData.add);
		expect(await productPage.$verifyQuantity().isDisplayed())
		.withContext('Expect the item quantity to be displayed')
		.toBe(true);
	});

	it('click on add to cart button', async () => {
		await productPage.clickOnAddToCart(testData.buyOption);
		expect(await cartPage.$cartHeader().isDisplayed())
		.withContext('Expect the cart side bar to be displayed')
		.toBe(true);
	});

	it('click on reduce button to decrease the quantity of the item by one', async () => {
		await cartPage.clickOnReduce(testData.reduce);
		expect(await cartPage.$verifyReduce().isDisplayed())
		.withContext('Expect the reduced item quantity to be displayed')
		.toBe(true);
	});

	it('verify the item prices shown are same ', async () => {
		await cartPage.verifyPriceOnCartPage();
		expect(await cartPage.$verifyPriceOnCartPage('£45.82').isDisplayed())
		.withContext('Expect the item names displayed is same')
		.toBe(true);
	});

	it('click on checkout button', async () => {
		await cartPage.clickOnCheckOut();
		expect(await cartPage.$verifyCheckout("Contact").isDisplayed())
		.withContext('Expect the reduced item quantity to be displayed')
		.toBe(true);
	});

	
});
