var Filmstrip;
(function (Filmstrip) {
    var Areas;
    (function (Areas) {
        var Collection;
        (function (Collection) {
            var FavouritesOverviewController = (function () {
                function FavouritesOverviewController(storageService) {
                    var _this = this;
                    this.storageService = storageService;
                    this.favourites = [];
                    this.initialized = false;
                    storageService
                        .all(Filmstrip.Services.StorageService.Favourites)
                        .then(function (favourites) { return _this.favourites = favourites; })
                        .finally(function () { return _this.initialized = true; });
                }
                FavouritesOverviewController.prototype.removeFromFavourites = function (favourite) {
                    var _this = this;
                    this.storageService
                        .remove(Filmstrip.Services.StorageService.Favourites, function (f) { return f.imdbID === favourite.imdbID; })
                        .then(function () { return _.remove(_this.favourites, function (f) { return f.imdbID === favourite.imdbID; }); });
                };
                FavouritesOverviewController.$inject = ["StorageService"];
                return FavouritesOverviewController;
            })();
            angular.module("fs.controllers").controller("FavouritesOverviewController", FavouritesOverviewController);
        })(Collection = Areas.Collection || (Areas.Collection = {}));
    })(Areas = Filmstrip.Areas || (Filmstrip.Areas = {}));
})(Filmstrip || (Filmstrip = {}));
//# sourceMappingURL=FavouritesOverviewController.js.map