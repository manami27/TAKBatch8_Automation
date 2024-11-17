describe("Add to Cart Saucedemo", () => {
  beforeEach(() => {
    //cy.visit("https://www.saucedemo.com/");
    //memanggil baseUrl
    cy.visit(Cypress.config("baseUrl"));
    //login
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get(".submit-button.btn_action").click();
    cy.get('[data-test="title"]').should("be.visible");
    cy.url().should("include", "/inventory.html");
  });

  it("Success Add to cart", () => {
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get(".shopping_cart_badge").should("have.text", "1");
    cy.get(".shopping_cart_badge").click();
    cy.url().should("include", "/cart.html");
    cy.get("#checkout").click();
    cy.url().should("include", "/checkout-step-one.html");
  });
});
