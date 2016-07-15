"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
var angular2_in_memory_web_api_1 = require("angular2-in-memory-web-api");
var in_memory_data_service_1 = require("./data/in-memory-data.service");
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_PROVIDERS,
    { provide: http_2.XHRBackend, useClass: angular2_in_memory_web_api_1.InMemoryBackendService },
    { provide: angular2_in_memory_web_api_1.SEED_DATA, useClass: in_memory_data_service_1.InMemoryDataService }
])
    .then(function (success) { return console.log("App Bootstrapped successfully"); })
    .catch(function (error) { return console.log(error.message || error); });
//# sourceMappingURL=main.js.map