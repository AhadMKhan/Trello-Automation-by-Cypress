// require('@4tw/cypress-drag-drop')
import '@4tw/cypress-drag-drop'

import {
    email,
    password,
    Url
  } from '../fixtures/Authentication.js'

import LoginScreen from '../pages/loginScreenLocator.js'
const LoginSC = new LoginScreen()

Cypress.Commands.add('forceVisit', (url) => { 
    cy.window().then(win => {
        return win.open(url, '_self');
    })
})

Cypress.Commands.add('loginSession', () =>{
        cy.visit(Url)
        LoginSC.trelloLogin_Screen.click()
        LoginSC.email_Type.type(email)
        cy.wait(2000)
        LoginSC.trelloLogin_Button.click()
        cy.origin('https://id.atlassian.com', {args:[password]},([password]) =>{
          cy.get('#password').type(password)
          cy.get('#login-submit').click()
        })
        cy.wait(2000)
        cy.forceVisit(Url)
})

Cypress.Commands.add('ClearSessionStorage', () =>{
    cy.window().then((win) => {
        win.sessionStorage.clear()
      })
})
