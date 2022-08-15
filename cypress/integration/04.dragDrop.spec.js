/// <reference types="cypress" />

import {
  boardName,
  cardName,
  cardNamebyAPI
} from '../fixtures/mixData.js'

import trelloLocator from '../pages/trelloLocators.js'
const trello = new trelloLocator()


describe('Drag and drop cards between list', () => {

  beforeEach(() => {
    cy.ClearSessionStorage()
  })
  it('Drag and drop a card to next list', () => {
    cy.loginSession()
    trello.openBoard(boardName).click({force:true})
    trello.boardTitle_Assert.should('have.text', boardName)
    trello.cardWholeBox(cardNamebyAPI).drag(trello.listForDragCard(2))
    trello.cardWholeBox(cardName).drag(trello.listForDragCard(1))
    trello.cardWholeBox(cardNamebyAPI).drag(trello.listForDragCard(1))
    trello.cardWholeBox(cardName).drag(trello.listForDragCard(2))
  })
})

