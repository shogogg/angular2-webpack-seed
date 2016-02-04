import {Component} from 'angular2/core';
import {HelloWorld} from './hello.world';

@Component({
    selector: 'app',
    template: require('./application.jade'),
    directives: [HelloWorld]
})
export class Application {
}
