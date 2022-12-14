describe ('Verify Radio and checkbox on web page', function()
{

    it('Verify Radio and checkbox',function()
    {
        cy.visit('http://demo.automationtesting.in/Register.html');
        cy.title().should('eq','Register');

        cy.get('[placeholder=First Name]').type('sushil');
        cy.get('[placeholder=Last Name]').type('sawai');

        cy.get('[value=Male]').check().should('be.checked');

        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket' );
        cy.get('#checkbox1').uncheck();

        cy.get('#checkbox2').check()



    })

   
})