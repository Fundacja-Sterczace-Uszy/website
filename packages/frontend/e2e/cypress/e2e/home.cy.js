describe("Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  }); 

  it(`should be accessible`, () => {
    cy.injectAxe();
    cy.checkA11y();
  });

  it(`renders the main heading`, () => {
    cy.get("h1").contains("Strona w budowie");
  });
  
  it("find the link with href attribute", () => {
    cy.get("a").should("have.attr", "href");
  });
});
