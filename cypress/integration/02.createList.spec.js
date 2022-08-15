/// <reference types="cypress" />

import {
  basePath,
  listAddPath
} from '../pages/apiPath.js'

import {
  key,
  token
} from '../fixtures/Authentication.js'

import {
  listCreatedByAPIFilePath
} from '../pages/filePaths.js'

import {
  boardName,
  listTitle,
  listTitlebyAPI
} from '../fixtures/mixData.js'

import ListAddition from '../pages/listAddbyAPI.js'
const NewList = new ListAddition()

import trelloLocator from '../pages/trelloLocators.js'
const trello = new trelloLocator()

describe('Create List by UI and API', () => {

  beforeEach(() => {
    cy.ClearSessionStorage()
  })

  it('Add list by UI and assert from UI', () => {
    cy.fixture('./BoardCreatedByAPI.json').then((data) =>{
      cy.loginSession()
      trello.openBoard(boardName).click({force:true})
      trello.boardTitle_Assert.should('have.text', boardName)
      trello.addList.click()
      trello.listTitle_TextField.type(listTitle)
      trello.addList_Button.click()
      trello.addedList_Assert(listTitle).should('be.exist')
    })
  })

  it('Add list by API, assert from API response and UI', () => {
    cy.fixture('./BoardCreatedByAPI.json').then((data) =>{
      const boardID = data.boardID
      cy.log(boardID)
      NewList.addlist(
        basePath,
        listAddPath,
        listTitlebyAPI,
        boardID,
        key,
        token,
        listCreatedByAPIFilePath,
        boardName
      )
    })
  })
})

