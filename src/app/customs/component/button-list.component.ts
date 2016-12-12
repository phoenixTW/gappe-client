import { Component } from '@angular/core';
import {NavParams} from "ionic-angular";

@Component({
    selector: "button-list",
    templateUrl: '../views/button-list.html',
    inputs: ['buttonList']
})

export class ButtonList {
    buttonList: Object;

    constructor(private navParams: NavParams) {
        this.buttonList = navParams.get('buttonList');
    }
}
