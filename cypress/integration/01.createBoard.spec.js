/// <reference types="cypress" />

import {
  basePath,
  boardAddPath
} from '../pages/apiPath.js'

import {
  key,
  token,
  email,
  Url
} from '../fixtures/Authentication.js'

import {
  boardTitleFilePath,
  boardCreatedByAPIFilePath
} from '../pages/filePaths.js'

import {
  boardName
} from '../fixtures/mixData.js'

import Board from '../pages/boardbyAPI.js'
const TrelloBoard = new Board()

import trelloLocator from '../pages/trelloLocators.js'
const trello = new trelloLocator()

let random = email+Math.random(2)

describe('Create Board by UI and API', () => {

  beforeEach(() => {
    cy.ClearSessionStorage()
  })

  it('Creating board by UI and assert from UI', () => {
    cy.loginSession()
    trello.createBoard_Button.click()
    cy.writeFile(boardTitleFilePath, {
      "Title" : random
    })
    cy.fixture('./titlename.json').then((data) =>{
      trello.boardTitle_TextFeild.type(data.Title)
      trello.create_Button.click()
    })
  })

  it('Creating board by API, assert from API response and UI ', () => {
    cy.fixture('./BoardCreatedByAPI.json').then((data) =>{
      TrelloBoard.boardAdd(
        basePath,
        boardAddPath,
        boardName,
        key,
        token,
        boardCreatedByAPIFilePath,
        Url
      )
    })
  })
})

