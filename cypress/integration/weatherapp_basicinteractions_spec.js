/// <reference types="cypress" />
context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

describe('Button shows correct information when clicked', () => {
    it('Click on the button without location and get a 400 message status', () => {
        cy.get('button.search-button').click();
        cy.contains("h2", "Request failed with status code 400");     
    })
  })
})