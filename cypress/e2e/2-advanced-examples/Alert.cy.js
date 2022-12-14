//const { expect } = require("chai");

describe ('Verify alert on web page', function()
{

    it('Verify alert popup',function()
    {
        cy.visit("https://testautomationpractice.blogspot.com/");
      //  cy.get('#alertButton').click();
        cy.get('#HTML9 > div.widget-content > button').click();

        cy.on('window:confirm',(str) =>
        {
            expect(str).to.equal('Press a button!');
        })
    })
 
})