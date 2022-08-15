/// <reference types="cypress" />

import {
  basePath,
  cardEditPath
} from '../pages/apiPath.js'

import {
  key,
  token
} from '../fixtures/Authentication.js'

import {
  boardName,
  cardName,
  cardNameEdit,
  cardDescriptionEdit,
  cardComment,
  cardNameEidtbyAPI,
  cardDescriptionEditbyAPI
} from '../fixtures/mixData.js'

import Cards from '../pages/cardsbyAPI.js'
const Card = new Cards()

import trelloLocator from '../pages/trelloLocators.js'
const trello = new trelloLocator()

describe('Edit Card by UI and API', () => {

  beforeEach(() => {
    cy.ClearSessionStorage()
  })
  it('Edit Card Name, Add Description and Comment by UI. Assert from UI', () => {
    cy.loginSession()
    trello.openBoard(boardName).click({force:true})
    trello.boardTitle_Assert.should('have.text', boardName)
    trello.cardWholeBox(cardName).click()
    trello.cardTitlePopUp_TextField.click().clear().type(cardNameEdit)
    // trello.cardWholeDescriptionPopUp.click()
    trello.cardDescriptionPopUp_TextField.clear().type(cardDescriptionEdit)
    trello.cardDescriptionSavePopUp_Button.click()
    trello.cardDescriptionPopUp_Assert.should('contain', cardDescriptionEdit)
    trello.cardCommentPopUp.click()
    trello.cardCommentPopUp_TextField.clear().type(cardComment)
    trello.cardCommentSavePopUp_Button.click()
    trello.cardClosePopUp_Button.click()
    trello.checkforAddCard.should('contain', cardNameEdit)
  })

  it('Edit Card Name and Description by API, assert from API response and UI', () => {
    cy.fixture('./cardCreatedByAPI.json').then((data) =>{
      Card.cardEdit(
        basePath,
        cardEditPath,
        data.cardID,
        cardNameEidtbyAPI,
        cardDescriptionEditbyAPI,
        key,
        token,
        boardName,
      )
    })
  })
})

