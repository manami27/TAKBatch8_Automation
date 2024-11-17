const loginPage = require("../../support/pageObject/loginPage");
const userData = require("../../fixtures/login.json");
const userArray = require("../../fixtures/login-array.json");

describe("Login Scenario Saucedemo", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    //cy.viewport(320, 480);
  });

  it("Success Login", () => {
    cy.get(loginPage.username).type(userData.validUser); //pom only + login fixture
    cy.get(loginPage.password).type(userData.validPass);
    cy.get(loginPage.login_btn).click();
    //cy.get('[data-test="title"]').should("be.visible");
    cy.verifyVisible('[data-test="title"]');
    cy.url().should("include", "/inventory.html");
  });

  it("Failed Login - Wrong User", () => {
    //cy.get("#user-name").type("standard");
    cy.ketik(loginPage.username, "standard"); //command + pom
    cy.get("#password").type("secret_sauce");
    cy.get(".submit-button.btn_action").click();
    cy.get('[data-test="error"]').should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("Failed Login - Locked User POM", () => {
    //cy.get("#user-name").type("locked_out_user");
    loginPage.inputUsername("locked_out_user");
    //cy.get("#password").type("secret_sauce");
    loginPage.inputPassword("secret_sauce"); // pom + function
    cy.get(".submit-button.btn_action").click();
    cy.get('[data-test="error"]').should(
      "contain",
      "Sorry, this user has been locked out"
    );
  });

  it.only("Failed Login - Locked User POM with fixture Array", () => {
    loginPage.inputUsername(userArray.invalidUser[0].usernm);
    loginPage.inputPassword(userArray.invalidUser[0].passw);
    cy.get(loginPage.login_btn).click();
    cy.verifyContain(loginPage.error_msg, userArray.invalidUser[0].error_msg);
  });

  it.only("Failed Login - Wrong User POM with fixture Array", () => {
    loginPage.inputUsername(userArray.invalidUser[1].usernm);
    loginPage.inputPassword(userArray.invalidUser[1].passw);
    cy.get(loginPage.login_btn).click();
    cy.verifyContain(loginPage.error_msg, userArray.invalidUser[1].error_msg);
  });

  it("Failed Login - Empty User", () => {
    cy.get("#password").type("secret_sauce");
    cy.get(".submit-button.btn_action").click();
    //cy.get('[data-test="error"]').should("be.visible");
    cy.verifyVisible('[data-test="error"]');
  });
});
