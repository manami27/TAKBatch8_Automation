describe("template spec", () => {
  beforeEach(() => {
    // root-level hook
    // runs before every test block
    cy.visit("https://example.cypress.io");
    //login
  });

  it("passes", () => {
    //add to cart 1 p
  });

  it("passes", () => {
    //remove from cart
  });

  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });

  after(() => {
    // runs once all tests are done
    //logout
  });

  afterEach(() => {
    // runs after each test block
    //verifikasi cartnya tidak 0
    //verifikasi footer
    //verifikasi current url
  });
});
