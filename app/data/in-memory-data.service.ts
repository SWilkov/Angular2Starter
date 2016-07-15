import { Animal, DietType } from "../models/Animal";

export class InMemoryDataService {
    private animals: Array<Animal> = [];

    public createDb() {
        let animals = [
            { id: 1, name: "tiger", category: "big cat" },
            { id: 2, name: "lion", category: "big cat" }
        ]

        return { animals };
        }
}