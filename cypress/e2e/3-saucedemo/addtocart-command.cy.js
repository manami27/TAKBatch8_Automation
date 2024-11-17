describe("Add to Cart Saucedemo", () => {
  beforeEach(() => {
    //cy.visit("https://www.saucedemo.com/");
    //memanggil baseUrl
    cy.visit(Cypress.config("baseUrl"));
    //Command login
    cy.login("standard_user", "secret_sauce");
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
