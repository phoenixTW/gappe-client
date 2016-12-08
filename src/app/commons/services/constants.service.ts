import {Injectable} from "@angular/core";

@Injectable()
export class ConstantsService {
  private leftSidebar: Object = {
    name: "Left Sidebar",
    menu: [
      "Bar 1",
      "Bar 2"
    ]
  };
  constructor() {}

  getLeftSidebar() {
    return this.leftSidebar;
  }
}
