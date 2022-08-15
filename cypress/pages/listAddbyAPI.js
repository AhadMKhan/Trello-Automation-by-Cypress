import trelloLocator from '../pages/trelloLocators.js'
const trello = new trelloLocator()

class ListAdd{
    addlist(basePath, listAddPath, listTitlebyAPI, boardID, key, token, filePath, boardName){
        cy.request({
            method : 'POST',
            url: basePath+listAddPath+'name='+listTitlebyAPI+'&idBoard='+boardID+'&key='+key+'&token='+token
          }).then((res)=>{
            //check api status
            expect(res.status).to.eq(200)
            const listID = res.body.id
                  cy.log(listID)
    
                  cy.writeFile(filePath, {
                    "listID" : listID,
                  })
                })
          cy.loginSession()
          trello.openBoard(boardName).click({force:true})
          trello.boardTitle_Assert.should('have.text', boardName)
          trello.addedList_Assert(listTitlebyAPI).should('be.exist')
    }
}
export default ListAdd