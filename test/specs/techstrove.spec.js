const homePage = require ("../page_objects/homePage.js")
const data = require ('../../test-data/testData.json')
const productPage = require("../page_objects/product-page.js")
const detailsPage = require("../page_objects/details-page.js")
const cartPage = require("../page_objects/cart-page.js")
const checkOutPage = require("../page_objects/check-out-page.js")


describe('End to end automation of application techstrove', () => {
    it('should be able to launch url', async () => {
        await homePage.openUrl();
        await expect(browser).toHaveUrl('https://techstrove.com/');
        expect(await homePage.$pageHeader().isDisplayed()).toBe(true);
        expect(await homePage.$secondHeader(data.second).isDisplayed()).toBe(true);
    });
    
    it('hover the sub heading and click on the option and verify navigation', async () => {
        await homePage.clickSubHeader(data.second,data.dropDown);
        expect(await productPage.$subMainHeader(data.dropDown).isDisplayed()).toBe(true);
    })
    
    it('select product and verify navigation', async () => {
        await productPage.selectProduct(data.product);
        expect(await detailsPage.$verifyProduct(data.product).isDisplayed()).toBe(true);
    })

    it('select color, count and click on add to cart',async () => {
        await detailsPage.addToCart(data.color,data.count);
        expect(await cartPage.$verifyCart().isDisplayed()).toBe(true);
    })

    it('verify the count and price of the product',async () => {
        let price = await cartPage.checkPrice();
        expect(await price).toBe(true);
    })

    it('click checkout',async () => {
        await cartPage.clickCheckout();
        expect(await cartPage.$pageHeader().isDisplayed()).toBe(true);
    })

    it('Fill details',async () => {
        await checkOutPage.fillDetails();
        expect
    })
});