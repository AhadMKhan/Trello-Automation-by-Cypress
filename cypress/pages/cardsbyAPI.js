import trelloLocator from './trelloLocators.js'
const trello = new trelloLocator()

class Cards{
    cardAdd(basePath, cardAddPath, ListId, key, token, CardName, boardName, filePath){
        cy.request(
            {
              method: 'POST',
              url: basePath+cardAddPath+'idList='+ListId+'&key='+key+'&token='+token+'&name='+CardName,
        
          }).then((res)=>{
              //check api status
              expect(res.status).to.eq(200)
              expect(res.body.name).to.eq(CardName)

              const cardID = res.body.id
              cy.writeFile(filePath, {
                "cardID" : cardID,
              })
        
          })
          cy.loginSession()
          trello.openBoard(boardName).click({force:true})
          trello.boardTitle_Assert.should('have.text', boardName)
          trello.checkforAddCard.should('contain', CardName)
    }

    cardEdit(basePath, cardEditPath, cardID, NewCardName, NewCardDescription, key, token, boardName){
        cy.request(
            {
              method: 'PUT',
              url: basePath+cardEditPath+cardID+'?name='+NewCardName+'&desc='+NewCardDescription+'&key='+key+'&token='+token
        
          }).then((res)=>{
              //check api status
              expect(res.status).to.eq(200)
              expect(res.body.name).to.eq(NewCardName)        
          })
          cy.loginSession()
          trello.openBoard(boardName).click({force:true})
          trello.boardTitle_Assert.should('have.text', boardName)
          trello.cardWholeBox(NewCardName).click()
          trello.cardDescriptionPopUp_Assert.should('contain', NewCardDescription)
          trello.cardClosePopUp_Button.click()
          trello.checkforAddCard.should('contain', NewCardName)


    }
}
export default Cards