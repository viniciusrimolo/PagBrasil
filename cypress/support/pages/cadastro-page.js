/// <reference types="cypress"/>
import CadastroElements from "../elements/CadastroElements";

const cadastroElements = new CadastroElements()

class CadastroPage {

    acessarCadastro() {
        cy.acessarCadastro();
    }

    preencherCampoName(Name) {
        const fieldName = cadastroElements.fieldName();
        cy.get(fieldName)
            .type(Name)
    }


    preencherCampoEmail(Email) {
        const fieldEmail = cadastroElements.fieldEmail();
        cy.get(fieldEmail)
            .type(Email)
    }

    preencherCampoCompany(Company) {
        const fieldCompany = cadastroElements.fieldCompany();
        cy.get(fieldCompany)
            .type(Company)
    }

    preencherCampoWebsite(Website) {
        const fieldWebsite = cadastroElements.fieldWebsite();
        cy.get(fieldWebsite)
            .type(Website)

    }

    preencherCampoPhone(Phone) {
        const fieldPhone = cadastroElements.fieldPhone();
        cy.get(fieldPhone)
            .type(Phone)
    }

    preencherCampoInquiry(Inquiry) {
        const fieldInquiry = cadastroElements.fieldInquiry();
        cy.get(fieldInquiry)
            .type(Inquiry)

    }

    clicarBtnSubmit() {
        cy.get(cadastroElements.buttonSubmit()).click();
    }

    mensagemCadastroErro(mensagem) {
        cy.get(cadastroElements.labelMessageError())
            .should('contain', mensagem);
    }

}
export default CadastroPage;