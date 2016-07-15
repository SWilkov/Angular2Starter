import { Component, OnInit } from "@angular/core";

@Component({
    selector: "home",
    templateUrl: "./app/views/home.component.html"
})
export class HomeComponent implements OnInit {
    public title: string = "Welcome to Angular 2";
    constructor() { }

    public ngOnInit() { 

    }

}