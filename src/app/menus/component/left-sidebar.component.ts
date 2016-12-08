import { Component } from '@angular/core';
import {SidebarService} from "../services/sidebar.service";

@Component({
  selector: 'left-sidebar',
  templateUrl: '../views/left-sidebar.html',
  providers: [SidebarService]
})

export class LeftSidebar {
  leftSidebar: Object;

  constructor(private sidebarService: SidebarService) {
    this.leftSidebar = sidebarService.getLeftSidebar();
  }
}
