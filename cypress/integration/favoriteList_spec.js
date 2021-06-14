import catPicture from '../fixtures/cat.json';
import advice from '../fixtures/advice.json'
console.log(advice)
describe('FavoriteList component', () => {
  beforeEach(() => {
    cy.interceptAdvice()
    cy.interceptCatPicture()
    cy.visit('/')
  })
  
  it('should render a header component containing the app\'s name', () => {
    cy.get('.to-favorites').click()
    cy.get('.header > h1').contains('Paw-some')
    cy.get('.header > h1').contains('Advice')
  });

  it('should hide the view favorite button and display the home button to take the user back to the main page', () => {
    cy.get('.to-favorites').click()
    cy.get('.to-favorites').should('not.exist')
    cy.get('.go-home').should('be.visible').click()
    cy.url().should('eq','http://localhost:3000/')
  });

  it('should display an error message if nothing has been added as a favorite', () => {
    cy.get('.to-favorites').click()
    cy.get('h2').should('have.text','You knead to go home please and add your favorites')
  }); 

  it.only('should display favorites after clicking Add to Favorite button', () => {
    cy.get('.advice-button').click()
    cy.get('.add-favorite').click({ force: true })
    cy.get('.to-favorites').click()
    cy.get('.favorite-advice').should('have.text', 'One of the top five regrets people have is that they didn\'t have the courage to be their true self.')
    cy.get('.cat-picture').should('be.visible')
  });
})