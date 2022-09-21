import { LightningElement } from 'lwc';

export default class NovaContaView extends LightningElement {
    visivel = false;
    recordId; //recebe o id do registro depois de criado
    //método que deverá ser acionado em caso de sucesso na criação do registro
    handleSuccess(event){
        console.log('Conta criada');
        console.log('Id da Conta' + event.detail.id);
        this.recordId = event.detail.id;
        this.visivel = true;
    }
}