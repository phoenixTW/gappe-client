import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {ChatListService} from "../service/chat-list.service";
import {Room} from "./room.component";

@Component({
  selector: "chat-list",
  templateUrl: '../views/chat-list.html'
})

export class ChatList {
  names: Array<{sender: Object}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private chatListService: ChatListService) {
    this.names = chatListService.getChatList();
  }

  chatTapped(event, chat) {
    this.navCtrl.push(Room, {
      chat: chat
    });
  }
}
