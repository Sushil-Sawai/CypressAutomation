describe('Verify table value',function()
{
    it('Verify nth column valude from table',function()
    {
        cy.visit('https://trytestingthis.netlify.app/');
        cy.contains('This is your Sample Table:').should('be.visible');

        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
            const text=$e1.text();
           // cy.log(text);
            if(text.includes("Tribbiani")) // search python text value in column
            {
                 //Perform promising
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(gen)
                {
                 const genText= gen.text()
                 expect(genText).to.equal('M') // value compare
                })
            }

        })

    })
})