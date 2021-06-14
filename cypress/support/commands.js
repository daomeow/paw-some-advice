import advice from '../fixtures/singleAdvice';
import catPicture from '../fixtures/singleCat';

const adviceBaseURL = 'https://api.adviceslip.com/advice';
const catBaseURL = 'https://thatcopy.pw/catapi/rest/';

// Cypress.Commands.add('interceptAdvice', () => {
//   cy.intercept(adviceBaseURL, advice).as('getAdviceStub')
//     .visit('http://localhost:3000/')
// })

// Cypress.Commands.add('interceptCatPicture', () => {
//   cy.intercept(catBaseURL, catPicture).as('getCatStub')
//     .visit('http://localhost:3000/')
// })

// Cypress.Commands.add('interceptAdvice', () => {
// cy.intercept(adviceBaseURL, { fixture: 'advice.json'}).as('getAdviceStub')
//     // .visit('http://localhost:3000/')
// })

// Cypress.Commands.add('interceptCatPicture', () => {
//   cy.intercept(catBaseURL, { fixture: 'cat.json'}).as('getCatStub')
//     .visit('http://localhost:3000/')
// })

Cypress.Commands.add('interceptAdvice', () => {
  cy.fixture(advice)
    .then((json) => {
      cy.intercept('GET', adviceBaseURL, json)
    })
})

Cypress.Commands.add('interceptCatPicture', () => {
  cy.fixture(catPicture)
    .then((json) => {
      cy.intercept('GET', catBaseURL, json)
    })
})