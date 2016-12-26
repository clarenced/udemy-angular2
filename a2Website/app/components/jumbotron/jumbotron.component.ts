import { Component } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'jumbotron',
    templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent {
    private jbtHeading: string;
    private jbtText: string;
    private btnText: string;
    private jbtBtnUrl: string;

    constructor(){
        this.jbtHeading = 'Hello world';
        this.jbtText = "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un peintre anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte";
        this.btnText = "Read More";
        this.jbtBtnUrl = '/about'
    }
}