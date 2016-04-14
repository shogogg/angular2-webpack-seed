import {Component} from "angular2/core";
import {HelloWorld} from "./hello-world.component";

@Component({
  selector: 'my-app',
  template: require('./application.component.html'),
  directives: [HelloWorld]
})
export class Application {
}
