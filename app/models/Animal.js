"use strict";
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
exports.Animal = Animal;
(function (DietType) {
    DietType[DietType["Carnivore"] = 0] = "Carnivore";
    DietType[DietType["Herbivore"] = 1] = "Herbivore";
    DietType[DietType["Omnivore"] = 2] = "Omnivore";
})(exports.DietType || (exports.DietType = {}));
var DietType = exports.DietType;
//# sourceMappingURL=Animal.js.map