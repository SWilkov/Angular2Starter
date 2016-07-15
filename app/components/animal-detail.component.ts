import { Component, OnInit, Input } from "@angular/core";
import { Animal } from "../models/Animal";

@Component({
    selector: "animal-detail",
    templateUrl: "./app/views/animal-detail.component.html"
})
export class AnimalDetailComponent implements OnInit {
    @Input() public animal: Animal;

    constructor() { }

    public ngOnInit() { 

    }

}