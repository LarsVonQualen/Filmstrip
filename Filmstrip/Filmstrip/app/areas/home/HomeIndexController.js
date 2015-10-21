var Filmstrip;
(function (Filmstrip) {
    var Areas;
    (function (Areas) {
        var Home;
        (function (Home) {
            var HomeIndexController = (function () {
                function HomeIndexController(storageService, omdbService, appState) {
                    this.storageService = storageService;
                    this.omdbService = omdbService;
                    this.appState = appState;
                    this.searching = false;
                    this.searchResults = [];
                    this.searchResults = this.appState.lastSearchResult;
                }
                HomeIndexController.prototype.addToFavourites = function (result) {
                    var _this = this;
                    this.omdbService.details(result.imdbID).then(function (details) { return _this.storageService.add(Filmstrip.Services.StorageService.Favourites, details); });
                };
                HomeIndexController.prototype.addToCollection = function (result) {
                    var _this = this;
                    this.omdbService.details(result.imdbID).then(function (details) { return _this.storageService.add(Filmstrip.Services.StorageService.Collection, details); });
                };
                HomeIndexController.prototype.onSearchResult = function (results) {
                    this.searchResults = results;
                    this.appState.lastSearchResult = results;
                };
                HomeIndexController.prototype.alreadyInCollection = function (entry) {
                    return this.storageService.existsSync(Filmstrip.Services.StorageService.Collection, function (value) { return value.imdbID === entry.imdbID; });
                };
                HomeIndexController.prototype.alreadyFavourited = function (favourite) {
                    return this.storageService.existsSync(Filmstrip.Services.StorageService.Favourites, function (value) { return value.imdbID === favourite.imdbID; });
                };
                HomeIndexController.$inject = ["StorageService", "OmdbService", "AppState"];
                return HomeIndexController;
            })();
            angular.module("fs.controllers").controller("HomeIndexController", HomeIndexController);
        })(Home = Areas.Home || (Areas.Home = {}));
    })(Areas = Filmstrip.Areas || (Filmstrip.Areas = {}));
})(Filmstrip || (Filmstrip = {}));
//# sourceMappingURL=HomeIndexController.js.map