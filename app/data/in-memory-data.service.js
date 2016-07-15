"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
        this.animals = [];
    }
    InMemoryDataService.prototype.createDb = function () {
        var animals = [
            { id: 1, name: "tiger", category: "big cat" },
            { id: 2, name: "lion", category: "big cat" }
        ];
        return { animals: animals };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map