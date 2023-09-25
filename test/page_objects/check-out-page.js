const Common = require("./common");

class CheckOutPage extends Common{
    constructor(){
        super();
    }
    /**
     * Method to fill details
     */
    async fillDetails(){
        await this.fillField().setValue();
    }
}
module.exports= new CheckOutPage();