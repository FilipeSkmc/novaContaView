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

    handleReset() {
        //seleciona todos os elementos lightning-input-field
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );

        //se possuir dados, para cada campo reset
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
        //exclui o card que conta criada
        this.visivel = false;
     }
}
