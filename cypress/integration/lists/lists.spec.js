/// <reference types="cypress" />

// TODO: Make the URL configurable

context("Lists", () => {
  it("should link to app home page from marketing page", () => {
    cy.visit("http://localhost:3000/");
    cy.findByText(/get started/i).click();
    cy.location().should((location) => {
      expect(location.href).to.eq("http://localhost:3000/home");
    });
  });

  it("should create a new list", () => {
    cy.visit("http://localhost:3000/home");
    cy.findByText(/create todo list/i).click();
    cy.location().should((location) => {
      const listUrlRegex = /http:\/\/localhost:3000\/lists\/c[a-z0-9]+/i;
      expect(location.href).to.match(listUrlRegex);
    });
  });

  it("should add items to the list and mark them complete", () => {
    cy.visit("http://localhost:3000/home");
    cy.findByText(/create todo list/i).click();

    cy.findByLabelText("Task description").type("Mow the lawn");
    cy.findByText(/add new task/i).click();

    cy.findByLabelText("Task description").type("Bathe the dog");
    cy.findByText(/add new task/i).click();

    cy.findAllByText(/mark done/i).should((doneButtons) => {
      expect(doneButtons).to.have.length(2);
    });

    cy.findAllByText(/mark done/i)
      .last()
      .click();

    cy.findAllByText(/mark done/i).should((doneButtons) => {
      expect(doneButtons).to.have.length(1);
    });
  });
});
