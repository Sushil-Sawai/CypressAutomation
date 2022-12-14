describe('verify basic testing for site', function()
{
    it('verify site test', function()
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('input[name=name]:nth-child(2)').type('sushil');
        cy.get('[name=email]').type('sushil@test.com');
        cy.get('#exampleCheck1').check();

        cy.get('Select').select('Female')

        cy.wait(5000);

        cy.get(':nth-child(2) > .nav-link').click();



    })
})