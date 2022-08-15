class LoginScreen{
    get menuHeader(){
        return cy.get('[data-test-id="header-member-menu-button"]')
    }
    get menuHeaderName(){
        return cy.get('.C6mIzhIHAXFKf-').eq(0)
    }
    get email_Type(){
        return cy.get('#user')
    }
    get trelloLogin_Screen(){
        return cy.get('[href="/login"]').eq(0)
    }
    get trelloLogin_Button(){
        return cy.get('#login')
    }
    get password_Type(){
        return cy.get('#password')
    }
    get altassianLogin_Button(){
        return cy.get('#login-submit')
    }
}
export default LoginScreen