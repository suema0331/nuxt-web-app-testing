/// <reference types="cypress" />
describe('The top page', () => {
  it('should access and login the top page', () => {
    cy.fixture('testUser.json').then((loginInfo) => {
      console.log(loginInfo)
      cy.login(loginInfo.email, loginInfo.password)
      // we shold be redorected to /
      cy.url().should('include', 'http://localhost:3000/')

      // our auth cookies should be present
      // cy.getCookie('session-cookie').should('exist')

      cy.get('.title').should('contain', 'Welcome to Fictional Company!')
    })
  })
})
