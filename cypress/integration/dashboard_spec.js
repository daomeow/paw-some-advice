import { isElementOfType } from "react-dom/cjs/react-dom-test-utils.production.min";
import singleAdvice from "../fixtures/singleAdvice";

describe('Dashboard', () => {
  beforeEach(() => {
    cy.interceptAdvice()
    cy.visit('/')
  });

  it('should render a header component containing the app\'s name and a nav bar', () => {
    cy.get('.header > h1').contains('Paw-some')
    cy.get('.header > h1').contains('Advice')
    cy.get('.to-favorites').contains('View Favorites')
  });

  it('should render the dashboard component\'s default view on inital load',() => {
    cy.get('.advice').should('have.value', '')
    cy.get('.default-cat').should('have.attr', 'src').should('include', 'cat')
    cy.get('.advice-button').should('be.visible')
    cy.get('.add-favorite').should('be.visible')
  })

  it('should intercept the advice network request', () => {
    // cy.wait('@getAdviceStub')
    // .its('response.statusCode')
    // .should('eq', 200)
    cy.intercept('https://api.adviceslip.com/advice', {
      fixtures: 'advice.json',
    })
  });

})

