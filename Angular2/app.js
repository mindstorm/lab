var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var DisplayComponent = (function () {
    function DisplayComponent() {
        this.myName = "Alice";
    }
    DisplayComponent = __decorate([
        angular2_1.Component({
            selector: 'display'
        }),
        angular2_1.View({
            template: "\n   <p>My name: {{ myName }}</p>\n  "
        })
    ], DisplayComponent);
    return DisplayComponent;
})();
angular2_1.bootstrap(DisplayComponent);
