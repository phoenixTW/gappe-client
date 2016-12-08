import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { App } from './app.component';
import {LeftSidebar} from "./menus/component/left-sidebar.component";
import {SidebarService} from "./menus/services/sidebar.service";
import {ConstantsService} from "./commons/services/constants.service";
import {ChatList} from "./layout/component/chat-list.component";
import {ChatListService} from "./layout/service/chat-list.service";

@NgModule({
  declarations: [
    App,
    LeftSidebar,
    ChatList
  ],
  imports: [
    IonicModule.forRoot(App)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    LeftSidebar,
    ChatList
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, SidebarService, ConstantsService, ChatListService]
})

export class AppModule {}
