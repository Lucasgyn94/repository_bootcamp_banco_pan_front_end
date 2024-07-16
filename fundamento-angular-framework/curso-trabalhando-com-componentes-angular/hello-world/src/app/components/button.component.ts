import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-my-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})

export class Button {
    @Input() label: string = '';
    buttonText: string = 'Acessar';
    buttonTexts: string[] = ['Entrar', 'Sair'];
    buttonNumber: number = 1;
    buttonObject = ({
        label: 'Editar'
    })


    getAlert() {
        alert(this.label);
    }
}

