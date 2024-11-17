// ***********************************************
// This example commands.js shows you how to
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

Cypress.Commands.add("login", (username, password) => {
  //login
  cy.get("#user-name").type(username);
  cy.get("#password").type(password);
  cy.get(".submit-button.btn_action").click();
  cy.get('[data-test="title"]').should("be.visible");
  cy.url().should("include", "/inventory.html");
});

Cypress.Commands.add("verifyVisible", (locator) => {
  cy.get(locator).should("be.visible");
});

Cypress.Commands.add("verifyContain", (locator, text) => {
  cy.get(locator).should("contain", text);
});

Cypress.Commands.add("verifyHaveText", (locator, text) => {
  cy.get(locator).should("have.text", text);
});

Cypress.Commands.add("ketik", (locator, value) => {
  cy.get(locator).should("be.visible").type(value);
});
