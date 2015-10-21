var Filmstrip;
(function (Filmstrip) {
    var Areas;
    (function (Areas) {
        var Home;
        (function (Home) {
            var DetailsController = (function () {
                function DetailsController(omdbService, $stateParams, storageService) {
                    var _this = this;
                    this.omdbService = omdbService;
                    this.$stateParams = $stateParams;
                    this.storageService = storageService;
                    this.initialized = false;
                    omdbService
                        .details($stateParams.imdbId)
                        .then(function (result) { return _this.entry = result; })
                        .finally(function () { return _this.initialized = true; });
                }
                DetailsController.prototype.addToFavourites = function (result) {
                    var _this = this;
                    this.omdbService.details(result.imdbID).then(function (details) { return _this.storageService.add(Filmstrip.Services.StorageService.Favourites, details); });
                };
                DetailsController.prototype.addToCollection = function (result) {
                    var _this = this;
                    this.omdbService.details(result.imdbID).then(function (details) { return _this.storageService.add(Filmstrip.Services.StorageService.Collection, details); });
                };
                DetailsController.prototype.alreadyInCollection = function (entry) {
                    return this.storageService.existsSync(Filmstrip.Services.StorageService.Collection, function (value) { return value.imdbID === entry.imdbID; });
                };
                DetailsController.prototype.alreadyFavourited = function (favourite) {
                    return this.storageService.existsSync(Filmstrip.Services.StorageService.Favourites, function (value) { return value.imdbID === favourite.imdbID; });
                };
                DetailsController.$inject = ["OmdbService", "$stateParams", "StorageService"];
                return DetailsController;
            })();
            angular.module("fs.controllers").controller("DetailsController", DetailsController);
        })(Home = Areas.Home || (Areas.Home = {}));
    })(Areas = Filmstrip.Areas || (Filmstrip.Areas = {}));
})(Filmstrip || (Filmstrip = {}));
//# sourceMappingURL=DetailsController.js.map