import Homepage from '../PageObjects/HomePage.cy'
describe('verify env variable', function()
{
    before(function()
    {
        cy.fixture('example').then(function(data)
        {
         this.data=data //data avaialble globally
        })
    })

    it('verify user is able to access variable', function()
    {
        const homePage =new Homepage();  //create object
        
        cy.visit(Cypress.env('url'));
        homePage.getRadiobutton1().check();
        homePage.getDropDownOption().select('option1');
        cy.get('#name').type(this.data.name);
    })
})