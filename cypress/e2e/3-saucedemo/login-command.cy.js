describe("Login Scenario Saucedemo", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    //cy.viewport(320, 480);
  });

  it("Success Login", () => {
    //cy.get("#user-name").type("standard_user");
    cy.ketik("#user-name", "standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get(".submit-button.btn_action").click();
    //cy.get('[data-test="title"]').should("be.visible");
    cy.verifyVisible('[data-test="title"]');
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
    //cy.get('[data-test="error"]').should("be.visible");
    cy.verifyVisible('[data-test="error"]');
  });
});
