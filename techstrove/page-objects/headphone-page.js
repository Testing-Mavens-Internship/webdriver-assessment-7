class HeadphonePage {
    constructor() {
        this.$viewHeadPhone = () => $selectHeadPhone(`(//div[contains(text(),"P9 Air Max Wireless Stereo Headphone")])[1]`);
        this.$verifyProductAndPrice = (name, price) => $verifyPrice(`//div[contains(text(),"${name}")]/..//div[contains(text(),"${price}")]`);
        this.$productHeader = () => $productHeader(`//h1[contains(text(),"P9 Air")]`);
        this.$selectColorDropdown = () => $selectColorDropdown(`//select[@data-index="option1"]`);
        this.$selectColor = colorName => $selectColor(`//option[@name="Color" and text()="${colorName}"]`);
        this.$productNumber = plus => $productNumber(`(//span[text()="${plus}"])[1]`);
        this.$addToCart = () => $addToCart(`//span[@id="AddToCartText-8378768654650"]`);
        this.$cartHeader = () => $cartHeader(`//div[text()="Cart"]`);
    }

    /**
     *  select a headphone and view it
     */
    async viewHeadphone() {
            await this.$viewHeadPhone().click();
            await this.$productHeader().waitForDisplayed({ timeout: 5000 });
        }
        /**
         * customize the color and number of the selected headphone
         */
    async customizeproduct() {
        await this.$selectColorDropdown().click();
        await this.$selectColor(testData.colorName).click();
        await this.$productHeader(testData.number).doubleClick();
        await this.$addToCart().click();
        await this.$cartHeader().waitForDisplayed({ timeout: 5000 });
    }
}
module.exports = new HeadphonePage();