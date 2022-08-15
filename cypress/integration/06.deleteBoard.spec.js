/// <reference types="cypress" />

import {
  basePath,
  boardDeletePath
} from '../pages/apiPath.js'

import {
  key,
  token
} from '../fixtures/Authentication.js'

import Board from '../pages/boardbyAPI.js'
const TrelloBoard = new Board()

describe('Delete Board by API', () => {

  beforeEach(() => {
    cy.ClearSessionStorage()
  })

  it('Login', () => {
    cy.loginSession()
  })
  it('Delete board by API and assert from API response', () => {
    cy.fixture('./BoardCreatedByAPI.json').then((data) => {
      TrelloBoard.boardDelete(
        basePath,
        boardDeletePath,
        data.boardID,
        key,
        token
      )
  })
  })
})

