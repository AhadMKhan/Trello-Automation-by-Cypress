/// <reference types="cypress" />

import {
  basePath,
  cardAddPath
} from '../pages/apiPath.js'

import {
  key,
  token
} from '../fixtures/Authentication.js'

import {
  cardCreatedByAPIFilePath
} from '../pages/filePaths.js'

import {
  boardName,
  cardName,
  cardNamebyAPI
} from '../fixtures/mixData.js'

import Cards from '../pages/cardsbyAPI.js'
const Card = new Cards()

import trelloLocator from '../pages/trelloLocators.js'
const trello = new trelloLocator()

describe('Create Card by UI and API', () => {

  beforeEach(() => {
    cy.ClearSessionStorage()
  })

  it('Add card by UI and assert from UI', () => {
    cy.fixture('./BoardCreatedByAPI.json').then((data) =>{
      cy.loginSession()
      trello.openBoard(boardName).click({force:true})
      trello.boardTitle_Assert.should('have.text', boardName)
      trello.addCardwithListNumber(2).click()
      trello.cardTitle_TextField.type(cardName)
      trello.addCard_Button.click()
      trello.checkforAddCard.should('contain', cardName)
    })
  })

  it('Add another card by API, assert from API response and UI', () => {
    cy.fixture('./listCreatedByAPI.json').then((data) =>{
      Card.cardAdd(
          basePath,
          cardAddPath,
          data.listID,
          key,
          token,
          cardNamebyAPI,
          boardName,
          cardCreatedByAPIFilePath
        )
    })
  })
})

