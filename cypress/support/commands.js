import {
    faker
  } from '@faker-js/faker'

Cypress.Commands.add('CriarBoard', () => {
    cy.request({
        method: 'POST',
        url: '/boards/',
        qs: {
            "name": `Board ${faker.random.numeric(10)}`,
            "key": Cypress.env('apiKey'),
            "token": Cypress.env('Token')
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        Cypress.env('board_id', response.body.id)
    })
})

Cypress.Commands.add('CriarLista', () => {
    cy.request({
        method: 'POST',
        url: '/lists/',
        qs: {
            "name": `Lista ${faker.random.numeric(10)}`,
            "idBoard": Cypress.env('board_id'),
            "key": Cypress.env('apiKey'),
            "token": Cypress.env('Token')
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        Cypress.env('list_id', response.body.id)
    })
})

Cypress.Commands.add('CriarCard', () => {
    cy.request({
        method: 'POST',
        url: '/cards/',
        qs: {
            "idList": Cypress.env('list_id'),
            "key": Cypress.env('apiKey'),
            "token": Cypress.env('Token')
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
        Cypress.env('card_id', response.body.id)
    })
})

Cypress.Commands.add('deleteApi', (endpoint,id) => {
    cy.request({
        method: 'DELETE',
        url: `/${endpoint}/${id}`,
        qs: {
            "key": Cypress.env('apiKey'),
            "token": Cypress.env('Token')
        }
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
})