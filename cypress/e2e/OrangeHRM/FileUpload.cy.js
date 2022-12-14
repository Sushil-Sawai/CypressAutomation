describe('Upload download file', function()
{
    it('Verify upload functonality', function()
    {
        cy.visit('https://trytestingthis.netlify.app/');
        cy.get('#myfile').attachFile('example.json');
    })

    it('Verify file download', function()
    {
        //cy.downloadFile('')
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
    })
})