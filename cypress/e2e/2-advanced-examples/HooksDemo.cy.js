//const { describe } = require("mocha");

//const cypress = require("cypress")

describe('test hooks in cypress', function(){

    before(function()
    {
        cy.log("************Before_Block***************");
    })
    after(function()
    {
        cy.log("************Terminate_Block***************");
    })
    beforeEach(function()
    {
        cy.log("************Before_Each TC Block***************");
    })
    afterEach(function()
    {
        cy.log("************after_Each Block***************");
    })


    it('Verify Search', function()
    {
        cy.log("************TC:1 Search Block***************");
    })
    it('Verify Advance Search', function()
    {
        cy.log("************TC:2 Advance Search Block***************");
    })
    it('Verify product availability', function()
    {
        cy.log("************TC:3 Search Product***************");
    })
})