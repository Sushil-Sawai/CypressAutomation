export class LoginPage{

    navigate()
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  
    }
    enterUserName()
    {
        cy.get('[name=username]').type('Admin');
    }

    enterPassword()
    {
        cy.get('[name=password]').type('admin123');
    }

    clickOnSubmit()
    {
        cy.get('[type=submit]').click();
    }
}