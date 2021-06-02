/// <reference types="cypress" />

// Testing the Home Page -- group of related specs
context('Home Page', () => {

  beforeEach(()=>{
    cy.visit('http://localhost:3001');
  });

  // spec
  it('should have h1', () => {
    
    cy.get("h1").should('exist');
  });

  it('should have success in h1', () => {
    
    cy.findByText('Success');
  });

  it('should have form elements and perform submit', () => {
    
    cy.get('#input1').type('Arun');
    cy.get('#input2').type('Chennai');
    cy.get("button[type='submit']").click();

  });


});