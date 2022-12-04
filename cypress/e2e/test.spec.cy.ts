/// <reference types="cypress" />
describe('example shap shot', () => {
  it('should take a screenshot', () => {
    cy.viewport('macbook-13')
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
    cy.screenshot('test1')
    expect(1).equal(1)
  })
})
