describe('UI Element', function() {
    it('Handle UI element present on the page', function() {
    //Visit the Demo QA Website
    cy.visit("https://demo.guru99.com/test/newtours/reservation.php");
    cy.title().should('eq','Find a Flight: Mercury Tours:');

    cy.get('input[value=roundtrip]').should('be.visible').should('be.checked');
    cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click();


    cy.get('input[name=findFlights]').should('be.visible').click();
    cy.wait(5000);
})
})