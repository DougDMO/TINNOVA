describe('Crud API Trello', () => {
  it('Criar novo board', () => {
    cy.request({
      method: 'GET',
      url: `https://api.trello.com/1/members/me/boards?fields=name,url&key=${Cypress.env('apiKey')}&token=${Cypress.env('Token')}`,
    })
  })

  it('Criar um card', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Excluir um card', () => {
    cy.visit('https://example.cypress.io')
  })

  it('Excluir um board', () => {
    cy.visit('https://example.cypress.io')
  })
})