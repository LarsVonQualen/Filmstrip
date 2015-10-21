var Filmstrip;
(function (Filmstrip) {
    var Services;
    (function (Services) {
        var StorageService = (function () {
            function StorageService(localStorageService, $q) {
                this.localStorageService = localStorageService;
                this.$q = $q;
                this.cache = {};
            }
            StorageService.prototype.add = function (bucket, value) {
                var _this = this;
                return new this.$q(function (resolve, reject) {
                    _this.all(bucket).then(function (collection) {
                        collection.push(value);
                        _this.localStorageService.set(bucket, collection);
                        resolve(value);
                    }, reject);
                });
            };
            StorageService.prototype.remove = function (bucket, predicate) {
                var _this = this;
                return new this.$q(function (resolve, reject) {
                    _this.all(bucket).then(function (collection) {
                        var deletions = _.remove(collection, predicate);
                        _this.localStorageService.set(bucket, collection);
                        resolve(deletions);
                    }, reject);
                });
            };
            StorageService.prototype.findWhere = function (bucket, predicate) {
                return this.all(bucket).then(function (collection) { return collection.filter(predicate); });
            };
            StorageService.prototype.all = function (bucket) {
                var _this = this;
                return new this.$q(function (resolve) {
                    var collection = _this.cache[bucket] || _this.localStorageService.get(bucket) || [];
                    _this.localStorageService.set(bucket, collection);
                    resolve(collection);
                });
            };
            StorageService.prototype.exists = function (bucket, predicate) {
                return this.findWhere(bucket, predicate).then(function (collection) { return collection.length > 0; });
            };
            StorageService.prototype.existsSync = function (bucket, predicate) {
                var collection = this.cache[bucket] || this.localStorageService.get(bucket) || [];
                this.localStorageService.set(bucket, collection);
                return collection.filter(predicate).length > 0;
            };
            StorageService.$inject = ["localStorageService", "$q"];
            StorageService.Collection = "collection";
            StorageService.Favourites = "favourites";
            return StorageService;
        })();
        Services.StorageService = StorageService;
        angular.module("fs.services").service("StorageService", StorageService);
    })(Services = Filmstrip.Services || (Filmstrip.Services = {}));
})(Filmstrip || (Filmstrip = {}));
//# sourceMappingURL=StorageService.js.map