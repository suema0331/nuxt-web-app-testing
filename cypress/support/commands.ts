/// <reference types="cypress" />

Cypress.Commands.add('login', (email, password) => {
  cy.visit('http://localhost:3000/')
  // e.g.
  // cy.get('input[id=email]').type(email).should('have.value', email);
  // cy.get('input[id=password]').type(password).should('have.value', password)
  // cy.get('[data-test="login-btn"]').click();
  return cy
})

Cypress.Commands.add('loginPostApi', (email, password) => {
  cy.request({
    method: 'POST',
    url: 'action of form',
    failOnStatusCode: false,
    form: true, // // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
    body: {
      email: email,
      password: password,
    },
  })
  return cy
})

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
