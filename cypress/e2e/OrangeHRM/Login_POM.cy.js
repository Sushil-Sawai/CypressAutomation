//import Homepage from "../PageObjects/HomePage.cy"
import {LoginPage} from "../PageObjects/Loginfunction.cy"
describe('Verfy Orange HRM portal', function()
{
    it('Verfiy Login functionality', function()
    {
        const homepage=new LoginPage();
        homepage.navigate();
        homepage.enterUserName();
        homepage.enterPassword();
        homepage.clickOnSubmit();
    })
})