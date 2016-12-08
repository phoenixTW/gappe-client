import {Injectable} from "@angular/core";

@Injectable()
export class ChatListService {
  private senderList: Array<{sender: Object}>
  constructor() {
    this.senderList = this.generateChatList();
  }

  getChatList(): Array<{sender: Object}> {
    return this.senderList;
  }

  private generateChatList(): Array<{sender: Object}> {
    let senders = [];
    for (let i = 1; i < 11; i++) {
      senders.push({
        sender: {
          name: 'Item ' + i
        }
      });
    }
    return senders;
  }
}
