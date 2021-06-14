import advice from '../fixtures/singleAdvice';
import catPicture from '../fixtures/singleCat';

const adviceBaseURL = 'https://api.adviceslip.com/advice';
const catBaseURL = 'https://thatcopy.pw/catapi/rest/';

Cypress.Commands.add('interceptAdvice', () => {
  cy.intercept(adviceBaseURL, advice).as('getAdviceStub')
    .visit('http://localhost:3000/')
})

Cypress.Commands.add('interceptCatPicture', () => {
  cy.intercept(catBaseURL, catPicture).as('getCatStub')
    .visit('http://localhost:3000/')
})