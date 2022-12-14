//const cypress = require("cypress")
/// <reference  types="cypress" />
describe ('My first Script', function()
{

    it('Verify title of the page',function()
    {
        cy.visit('https://demo.nopcommerce.com/');
        cy.title().should('eq','nopCommerce demo store');
    })

    it('Verify product is available on the page',function()
    {
        cy.visit('https://demo.nopcommerce.com/');
        cy.get("#small-searchterms").type('Apple MacBook Pro 13-inch');
        cy.get(".search-box-button[type='submit']").click();

        //cy.get("#product_enteredQuantity_4").clear().type('1');
       // cy.get("#add-to-cart-button-4").click();
        //cy.wait(5000);
        //#topcartlink > a > span.cart-label

       // cy.get("#topcartlink > a > span.cart-label").click();
       // cy.wait(5000);

       
        
    })
})