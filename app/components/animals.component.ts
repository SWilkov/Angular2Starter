import { Component, OnInit } from "@angular/core";
import { AnimalsService } from "../services/animals.service";
import { Animal } from "../models/Animal";
import { AnimalDetailComponent } from "./animal-detail.component";

@Component({
    selector: "animals",
    templateUrl: "./app/views/animals.component.html",
    directives: [ AnimalDetailComponent ] 
})
export class AnimalsComponent implements OnInit {
    public title: string = "Animals";
    public animals: Array<Animal>;
    public selectedAnimal: Animal;

    constructor(private animalsService: AnimalsService) { }

    public ngOnInit() {
        this.animalsService.getAnimals()
            .then(data => {
                this.animals = data;
            })
            .catch(error => console.log(error.message || error));
    }

    public onSelected(animal: Animal) {
        this.selectedAnimal = animal;
    }
}