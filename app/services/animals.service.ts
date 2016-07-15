import { Injectable, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import * as RX from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import { Animal } from "../models/Animal";

@Injectable()
export class AnimalsService implements OnInit {
    private animalsUrl: string = "app/animals";

    constructor(private http: Http) { }

    public ngOnInit() {
        
    }

    public getAnimals(): Promise<Animal[]> {
        return this.http.get(this.animalsUrl)
                        .toPromise()
                        .then(response => response.json().data)
                        .catch(error => console.log(error));
    }
}