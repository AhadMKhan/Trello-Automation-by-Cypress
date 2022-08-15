import { boardName } from '../fixtures/mixData.js'
import trelloLocator from './trelloLocators.js'
const trello = new trelloLocator()

class Board{
    boardAdd(basePath, boardAddPath, boardName, key, token, filePath, Url){
        cy.request(
            {
              method: 'POST',
              url: basePath+boardAddPath+'name='+boardName+'&key='+key+'&token='+token+'&defaultLists=false',
        
          }).then((res)=>{
              //check api status
              expect(res.status).to.eq(200)
    
              const boardID = res.body.id
              const boardUrl = res.body.url
              cy.log(boardID)
              cy.log(boardUrl)

              cy.writeFile(filePath, {
                "boardID" : boardID,
                "boardUrl" : boardUrl
              })    
          })
          cy.wait(2000)
          cy.loginSession()
          trello.openBoard(boardName).click({force:true})
          trello.boardTitle_Assert.should('have.text', boardName)
    }

    boardDelete(basePath, boardDeletePath, boardID, key, token){
        cy.request(
            {
              method: 'DELETE',
              url: basePath+boardDeletePath+boardID+'?key='+key+'&token='+token,
        
          }).then((res)=>{
              //check api status
              expect(res.status).to.eq(200)  
          })
          cy.wait(2000)
          cy.loginSession()
        cy.get('.boards-page-board-section-list').should('not.have.attr', '[title="'+boardName+'"]')    
    }
}
export default Board