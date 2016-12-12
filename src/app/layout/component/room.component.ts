import { Component } from '@angular/core';
import {NavParams} from "ionic-angular";

@Component({
  selector: "room",
  templateUrl: '../views/room.html',
  inputs: ['chat']
})

export class Room {
  chat: Object;
  buttonList: Object = [
    {
      label: "Send",
      icon: "send"
    }
  ];

  constructor(private navParams: NavParams) {
    this.chat = navParams.get('chat');
  }
}
