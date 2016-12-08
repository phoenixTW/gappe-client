import {Injectable} from '@angular/core';
import {ConstantsService} from "../../commons/services/constants.service";

@Injectable()
export class SidebarService {

  constructor(private constantsService: ConstantsService) {}

  getLeftSidebar() {
    const leftSidebar = this.constantsService.getLeftSidebar();
    return leftSidebar;
  }
}
