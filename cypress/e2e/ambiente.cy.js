
it('Validar a presença do bit 0501 na trasação', () => {
  cy.readFile('cypress/fixtures/log.txt', 'utf8').then((data) => {
    const cleanedData = data.trim().toString();
    expect(cleanedData).to.contain('0501');
  });
})