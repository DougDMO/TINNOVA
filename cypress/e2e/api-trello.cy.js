describe('Crud API Trello', () => {
  it('Criar novo board', () => {
    cy.CriarBoard()
  })
  it('Criar uma Lista', () => {
    cy.CriarLista()
  })

  it('Criar um card', () => {
    cy.CriarCard()
  })

  it('Excluir um card', () => {
    cy.deleteApi('cards',Cypress.env('card_id'))
  })
  it('Excluir um board', () => {
    cy.deleteApi('boards',Cypress.env('board_id'))
  })
})