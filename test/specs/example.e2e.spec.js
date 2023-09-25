const homePage = require('../page_objects/homePage');
const env = require('../../test-data/url.json')
const testData = require('../../test-data/testData.json');
const productsPage = require('../page_objects/products-page');

describe('QaWolf.com  ', () => {
		it('should be able to launch url', async () => {
			await homePage.openUrl(env.baseUrl);
			await expect(browser).toHaveUrl('https://techstrove.com/');
		});
		it("Hover over collections and click on headphones",async ()=>{
			await homePage.clickOnHeadPhone();
			expect(await homePage.$sectionHeader().isDisplayed())
				.withContext("Expecting header of headphone is displayed")
				.toBe(true)
		})
		it("Click on the product and verify navigation",async ()=>{
			let productName = await productsPage.$productHover().getText()
			await productsPage.clickOnAirMax(productName)
			expect(await productsPage.$verifyProductPopUp(productName).isDisplayed())
				.withContext("Expecting same product name on pop up")
				.toBe(true)
		})
		it("Change product quantity, color and add to cart",async ()=>{
			await productsPage.addProductToCart()
			expect(await productsPage.$productNameInCart(testData.product).isDisplayed())
				.withContext("Expecting product name to be displayed")
				.toBe(true)
		})
});

