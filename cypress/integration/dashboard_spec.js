import { isElementOfType } from "react-dom/cjs/react-dom-test-utils.production.min";
import singleAdvice from "../fixtures/singleAdvice";

describe('Dashboard', () => {
  beforeEach(() => {
    // cy.interceptAdvice()
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
  });

  it('should intercept the advice network request', () => {
    // cy.interceptAdvice()
    // cy.wait('@getAdviceStub')
    // .its('response.statusCode')
    // .should('eq', 200)
    cy.intercept('https://api.adviceslip.com/advice', {
      fixtures: 'advice.json',
    })
  });

  it('should intercept the cat network request', () => {
    cy.intercept('https://thatcopy.pw/catapi/rest/', {
      fixtures: 'cat.json',
    })
  });

  it('should redirect the user when they access an invalid URL', () => {
    cy.intercept('https://api.adviceslip.com/advice', {
      statusCode: 200
    })
      .visit('http://localhost:3000/stay-PAWsitive')
      cy.url().should('eq', 'http://localhost:3000/' )
  });

  it('should display a specific error message when fetch yields a 500 status', () => {
    cy.intercept('https://api.adviceslip.com/advice', {
      statusCode: 500
    })
      .visit('http://localhost:3000/')
      .get('h2')
      .contains('Something went wrong')
  });

})

