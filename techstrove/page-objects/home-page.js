const Common = require('./common.js');

class Homepage extends Common {
    constructor() {
            super();
            this.$colloection = () => $colloection(`//li[contains(@class,"site-nav__item site-nav__expanded-item s")]`);
            this.$headPhones = () => this.$headPhones(`(//ul[@class="site-nav__dropdown text-left"]//child::a)[1]`);
        }
        /**
         * Hover Over the collection elemnt in the page and click on headphone
         */
    async hoverOverTheCollection() {
        await this.$colloection().moveTo();
        await this.$headPhones().click();
        await this.$header2().waitForDisplayed({ timeout: 5000 });
    }
}
module.exports = new Homepage();