import advice from '../fixtures/singleAdvice';
import catPicture from '../fixtures/singleCat';

const adviceBaseURL = 'https://api.adviceslip.com/advice';
const catBaseURL = 'https://thatcopy.pw/catapi/rest/';

Cypress.Commands.add('interceptAdvice', () => {
  cy.fixture(advice)
    .then((json) => {
      cy.intercept('GET', adviceBaseURL, json)
    })
});

Cypress.Commands.add('interceptCatPicture', () => {
  cy.fixture(catPicture)
    .then((json) => {
      cy.intercept('GET', catBaseURL, json)
    })
});

// Cypress.Commands.add('testTest', () => {
//   cy.intercept(adviceBaseURL, advice).as('teest') 
// })