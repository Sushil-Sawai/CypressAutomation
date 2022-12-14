//const cypress = require("cypress")
describe ('Verify dropdown on web page', function()
{

    it('Verify dropdown',function()
    {
        cy.visit("https://demo.nopcommerce.com/");
        cy.get('#customerCurrency').select('Euro');
        

    })

   
})