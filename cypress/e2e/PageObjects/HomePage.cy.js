class Homepage{

    getDropDownOption()
    {
        return cy.get('select')
    }

    getRadiobutton1()
    {
        return cy.get('#checkBoxOption1')
    }
}

export default Homepage;