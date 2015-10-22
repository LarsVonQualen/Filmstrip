var Filmstrip;
(function (Filmstrip) {
    var Areas;
    (function (Areas) {
        var Collection;
        (function (Collection) {
            var CollectionOverviewController = (function () {
                function CollectionOverviewController(storageService) {
                    var _this = this;
                    this.storageService = storageService;
                    this.collection = [];
                    this.initialized = false;
                    storageService
                        .all(Filmstrip.Services.StorageService.Collection)
                        .then(function (collection) { return _this.collection = collection; })
                        .finally(function () { return _this.initialized = true; });
                }
                CollectionOverviewController.prototype.removeFromCollection = function (entry) {
                    var _this = this;
                    this.storageService
                        .remove(Filmstrip.Services.StorageService.Collection, function (e) { return e.imdbID === entry.imdbID; })
                        .then(function () { return _.remove(_this.collection, function (e) { return e.imdbID === entry.imdbID; }); });
                };
                CollectionOverviewController.$inject = ["StorageService"];
                return CollectionOverviewController;
            })();
            angular.module("fs.controllers").controller("CollectionOverviewController", CollectionOverviewController);
        })(Collection = Areas.Collection || (Areas.Collection = {}));
    })(Areas = Filmstrip.Areas || (Filmstrip.Areas = {}));
})(Filmstrip || (Filmstrip = {}));
//# sourceMappingURL=CollectionOverviewController.js.map