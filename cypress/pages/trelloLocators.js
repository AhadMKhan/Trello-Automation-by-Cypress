class trelloLocator{
    get createBoard_Button(){
        return cy.get('[data-test-id="create-board-tile"]')
    }
    get boardTitle_TextFeild(){
        return cy.get('[data-test-id="create-board-title-input"]')
    }
    get boardTitle_Assert(){
        return cy.get('.js-board-editing-target')
    }
    get addList(){
        return cy.get('.js-add-list')
    }
    get listTitle_TextField(){
        return cy.get('[placeholder="Enter list title…"]')
    }
    get addList_Button(){
        return cy.get('[value="Add list"]')
    }
    addedList_Assert(ListName){
        return cy.get('.js-list-name-assist').contains(ListName)
    }
    get create_Button(){
        return cy.get('[data-test-id="create-board-submit-button"]')
    }
    openBoard(Title){
        return cy.get('[title="'+Title+'"]').eq(0)
    }
    addCardwithListNumber(ListNumber){
        const listno = ListNumber - 1
        return cy.get('.js-add-a-card').eq(listno)
    }
    get cardTitle_TextField(){
        return cy.get('[placeholder="Enter a title for this card…"]')
    }
    get addCard_Button(){
        return cy.get('[value="Add card"]')
    }
    get checkforAddCard(){
        return cy.get('.list-card-title')
    }
    get cardTitlePopUp_TextField(){
        return cy.get('.js-card-detail-title-input')
    }
    get cardWholeDescriptionPopUp(){
        return cy.get('.js-hide-with-desc')
    }
    get cardDescriptionPopUp_TextField(){
        return cy.get('[placeholder="Add a more detailed description…"]')
    }
    get cardDescriptionSavePopUp_Button(){
        return cy.get('[value="Save"]').eq(0)
    }
    get cardDescriptionPopUp_Assert(){
        return cy.get('.js-show-with-desc')
    }
    get cardCommentPopUp(){
        return cy.get('.comment-box')
    }
    get cardCommentPopUp_TextField(){
        return cy.get('[placeholder="Write a comment…"]')
    }
    get cardCommentSavePopUp_Button(){
        return cy.get('[value="Save"]').eq(1)
    }
    get cardClosePopUp_Button(){
        return cy.get('.js-close-window')
    }
    listForDragCard(ListNumber){
        let list
        return list = (':nth-child('+ListNumber+') > .list')
    }
    cardWholeBox(CardName){
        return cy.get('.js-card-details').then((card) =>{
            cy.wrap(card).find('.js-card-name').then((cardsname) => {
              cy.wrap(cardsname).contains(CardName)
            })
          })
    }
    listScrollBar(ListNumber){
        return cy.get('.js-sortable ui-sortable').eq(ListNumber)
    }
}
export default trelloLocator