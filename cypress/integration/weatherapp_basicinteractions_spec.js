/// <reference types="cypress" />
context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://adrigom.github.io/weather-app/')
    })

describe('Basic interaction with the application', () => {
  it('Application does not crash', () => {   
    cy.contains("h2", "Search for a weather update!");     
    })
  it('Type Barcelona, shows main correct information', () => {
    cy.get('input.search-input').type('Barcelona');
    cy.get('button.search-button').click();
    cy.contains("h2", "º");     
    })  
})
})