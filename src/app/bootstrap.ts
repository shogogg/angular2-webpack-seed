import {bootstrap} from "angular2/platform/browser";
import {HTTP_PROVIDERS} from "angular2/http";
import {ROUTER_PROVIDERS} from "angular2/router";
import {Application} from "./components/application.component";

const PROVIDERS = [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
];

bootstrap(Application, PROVIDERS);
