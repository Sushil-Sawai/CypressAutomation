describe('Verfy Orange HRM portal', function()
{
    it('Verfiy Login functionality', function()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        
        cy.get('[name=username]').type('Admin');
        cy.get('[name=password]').type('admin123');

        cy.get('[type=submit]').should('contain','Login').should('have.class','oxd-button');
        cy.get('[type=submit]').click();
        cy.url().should('include','viewEmployeeList');

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click({force: true});
        cy.contains('Full-Time Contract').click({force: true});
        cy.wait(5000);
    })
})