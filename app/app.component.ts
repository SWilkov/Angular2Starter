import { Component, OnInit } from "@angular/core";
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} 
    from "@angular/router-deprecated";
import { AnimalsComponent } from "./components/animals.component";
import { HomeComponent } from "./components/home.component";
import { AnimalsService } from "./services/animals.service";

@Component({
    selector: "app",
    templateUrl: "./app/views/app.component.html",
    providers: [ ROUTER_PROVIDERS, AnimalsService ],
    directives: [ ROUTER_DIRECTIVES ] 
})
@RouteConfig([
    {
        path: "/home",
        name: "Home",
        useAsDefault: true,
        component: HomeComponent
    },
    {
        path: "/animals",
        name: "Animals",
        component: AnimalsComponent
    }
])
export class AppComponent implements OnInit {
    public title: string = "Welcome to Angular 2";
    constructor() { }

    public ngOnInit() { 

    }
}