var Filmstrip;
(function (Filmstrip) {
    var Services;
    (function (Services) {
        var AppState = (function () {
            function AppState() {
                this.lastSearchResult = [];
            }
            return AppState;
        })();
        Services.AppState = AppState;
        angular.module("fs.services").service("AppState", AppState);
    })(Services = Filmstrip.Services || (Filmstrip.Services = {}));
})(Filmstrip || (Filmstrip = {}));
//# sourceMappingURL=AppState.js.map