/// <reference types="cypress" />
context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://adrigom.github.io/weather-app/')
    })

describe('Button shows correct information when clicked', () => {
  it('Type Barcelona, shows main correct information', () => {
    cy.get('input.search-input').type('Barcelona');
    cy.get('button.search-button').click();
    cy.contains("h2", "º");     
    }),
  it('Type random place, shows 404 error', () => {
      cy.get('input.search-input').type('dummyplace');
      cy.get('button.search-button').click();
      cy.contains("h2", "404");     
      })
})
})