declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Ligin via UI
     */
    login(email: string, password: string): Chainable<any>
    /**
     * Ligin via API
     */
    loginPostApi(email: string, password: string): Chainable<any>
  }
}
