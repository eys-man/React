/// <reference types="cypress" />

describe('About page', () => {
  beforeEach(() => {
    cy.visit('/about');
  });

  it('renders page content', () => {
    cy.contains('eys-man 2023');
  });
});

describe('Not found page', () => {
  beforeEach(() => {
    cy.visit('*');
  });

  it('page not found', () => {
    cy.contains(`This page doesn't exist`);
  });
});

describe('Form page', () => {
  beforeEach(() => {
    cy.visit('/forms');
  });

  it('renders validation alert', () => {
    cy.get('form').submit();
    cy.contains('Choose city');
  });

  it('created a product card', () => {
    cy.get('input').eq(0).type('Qwerty');
    cy.get('input').eq(1).type('2000-01-01');
    cy.get('select').select('Minsk');
    cy.get('input').eq(2).click();
    cy.get('input').eq(4).selectFile('cypress/fixtures/pugna.jpg');
    cy.get('input').eq(5).check();
    cy.get('form').submit();
    cy.get('img').should('have.length', 1);
  });
});

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders cards', () => {
    cy.get('img').should('have.length', 20);
  });

  it('renders modal with image', () => {
    cy.get('img').eq(0).click();
    cy.get('.full-card-image').should('have.length', 1);
  });

  it('renders error alert after bad search request', () => {
    cy.get('input').type('фигня{enter}');
    cy.get('div').contains('Error!');
  });

  it('renders cards after correct search request', () => {
    cy.get('input').type('flor{enter}');
    cy.wait(1000);
    cy.get('.card-wrapper').should('have.length', 4);
  });
});
