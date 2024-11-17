describe("Login Scenario Saucedemo", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    //cy.viewport(320, 480);
  });

  it("Success Login", () => {
    //get element ID
    //cy.get("#user-name");
    //get element Class Name
    //cy.get(".user-name");
    //get by CSS Selector
    //cy.get('[data-test="username"]');
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get(".submit-button.btn_action").click();
    cy.get('[data-test="title"]').should("be.visible");
    cy.url().should("include", "/inventory.html");
  });

  it("Failed Login - Wrong User", () => {
    cy.get("#user-name").type("standard");
    cy.get("#password").type("secret_sauce");
    cy.get(".submit-button.btn_action").click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Failed Login - Locked User", () => {
    cy.get("#user-name").type("locked_out_user");
    cy.get("#password").type("secret_sauce");
    cy.get(".submit-button.btn_action").click();
    cy.get('[data-test="error"]').should(
      "contain",
      "Sorry, this user has been locked out"
    );
  });

  it("Failed Login - Empty User", () => {
    cy.get("#password").type("secret_sauce");
    cy.get(".submit-button.btn_action").click();
    cy.get('[data-test="error"]').should("be.visible");
  });
});
