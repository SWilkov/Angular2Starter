"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var animals_service_1 = require("../services/animals.service");
var animal_detail_component_1 = require("./animal-detail.component");
var AnimalsComponent = (function () {
    function AnimalsComponent(animalsService) {
        this.animalsService = animalsService;
        this.title = "Animals";
    }
    AnimalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.animalsService.getAnimals()
            .then(function (data) {
            _this.animals = data;
        })
            .catch(function (error) { return console.log(error.message || error); });
    };
    AnimalsComponent.prototype.onSelected = function (animal) {
        this.selectedAnimal = animal;
    };
    AnimalsComponent = __decorate([
        core_1.Component({
            selector: "animals",
            templateUrl: "./app/views/animals.component.html",
            directives: [animal_detail_component_1.AnimalDetailComponent]
        }), 
        __metadata('design:paramtypes', [animals_service_1.AnimalsService])
    ], AnimalsComponent);
    return AnimalsComponent;
}());
exports.AnimalsComponent = AnimalsComponent;
//# sourceMappingURL=animals.component.js.map