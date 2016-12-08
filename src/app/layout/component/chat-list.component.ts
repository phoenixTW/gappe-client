import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {ChatListService} from "../service/chat-list.service";

@Component({
  selector: "chat-list",
  templateUrl: '../views/chat-list.html'
})

export class ChatList {
  selectedItem: any;
  names: Array<{sender: Object}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private chatListService: ChatListService) {
    this.selectedItem = navParams.get('sender');
    this.names = chatListService.getChatList();
  }

  itemTapped(event, sender) {
    this.navCtrl.push(ChatList, {
      sender: sender
    });
  }
}
