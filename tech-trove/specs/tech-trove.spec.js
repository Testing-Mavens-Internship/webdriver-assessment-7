const {homePage} = require("../page-objects/home-page"); 
const {productPage} = require("../page-objects/product-page");
const {cartPage} = require("../page-objects/cart-page");
const data = require("../test-data/data.json");
let product;
let price;
describe("Tech trove headphone purchase flow automation",() => {
    it("Launch url",async()=>{
        await homePage.launchUrl();
        expect(await homePage.$header().isDisplayed()).withContext("Expect header to be displayed").toBe(true);
        expect(await homePage.$logo().isDisplayed()).withContext("Expect logo to be displayed").toBe(true);
    });
    
    it("Select headphones and verify navigation",async()=>{
        await homePage.selectItem(data.itemName);
        expect(await productPage.$header().isDisplayed()).withContext("Expect product page header to be displayed").toBe(true);
        expect(await productPage.$productName().isDisplayed()).withContext("Expect product to be displayed").toBe(true);
    });
    
    it("Select product and verify price and name",async()=>{
        product = await productPage.getProductName();
        price = await productPage.getProductPrice();
        expect(await productPage.selectProduct()).withContext("Expect the product price and name to be same").toBe(true);
    });

    it("Select color,quantity and add to cart", async()=>{
        await productPage.selectColor(data.itemColour);
        await productPage.selectQuantity(data.quantity);
        await productPage.addToCart();
        expect(await cartPage.$header().isDisplayed()).withContext("Expect cart page header to be displayed").toBe(true);
        expect(await cartPage.verifyProductNameAndColour(product,data.itemColour)).withContext("Expect product name and colour to be same as selected").toBe(true);
        expect(await cartPage.verifyTotalPrice(price,data.quantity)).withContext("Expect total price to be product of count and price of each").toBe(true);
    })
})