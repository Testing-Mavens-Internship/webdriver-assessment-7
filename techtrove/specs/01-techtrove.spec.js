const homePage = require('../page-objects/home-page.js');
const headphonePage = require('../page-objects/headphone-page.js');
const cartPage = require(`../page-objects/cart-page.js`);
const testData = require('../test-data/testData.json');

let productPrice;

describe('End to End Automation of Techtrove Application', () => {
	it('Load URL of Techtrove application', async () => {
		await homePage.openUrl();
		expect(await homePage.$logo().isDisplayed())
			.withContext('Expect Logo to be displayed')
			.toBe(true);
	});

	it('Hover on Collections', async () => {
		await homePage.hoverOnNavigation('Collections');
		expect(await homePage.$dropDownlist().isDisplayed())
			.withContext('Expect dropdownlist to be displayed')
			.toBe(true);
	});

	it('Hover and click on headphone', async () => {
		await homePage.hoverOnNavigation('Headphone');
		await homePage.clickOnNavigation('Headphone');
		expect(await headphonePage.$header('Headphone').isDisplayed())
			.withContext('Expect headphone header to be displayed')
			.toBe(true);
	});

	it(`Click on ${testData.product}`, async () => {
		await headphonePage.clickOnProduct(testData.product);

		expect(await headphonePage.$productTitle(testData.product).isDisplayed())
			.withContext(`Expect ${testData.product} Popup page to be dispalyed`)
			.toBe(true);
	});

	it('Set Colour,Quantity and click Add to Cart', async () => {
		let price = await headphonePage.$productPrice(testData.product).getText();
		productPrice = await parseFloat(price.slice(1));
        
		await headphonePage.setColorAndQuantity(
            testData.product,
            testData.color,
            testData.quantity,
            cartPage.$cartHeader('Cart')
        );
        expect(await cartPage.$cartHeader('Cart').isDisplayed())
        .withContext('Expect cart header to be displayed')
        .toBe(true);
	});
    it('Verify Color of product', async() => {
        let displayedColor = await cartPage.$displayedColor().getText();
        expect(await displayedColor.includes(testData.color))
        .withContext(`Expect colour equal to ${testData.color}`)
        .toBe(true);
    })
    it('Validate total Price', async() => {
        let itemPrice = await cartPage.$unitPrice().getText();
        let unitPrice = await parseFloat(itemPrice.slice(1));
        let total = await cartPage.$totalPrice().getText();
        let totalPrice = await parseFloat(total.slice(1));

        expect(await cartPage.verifyTotal(unitPrice, totalPrice, testData.quantity))
        .withContext('Verify Total Price')
        .toBe(true);
    });
});
