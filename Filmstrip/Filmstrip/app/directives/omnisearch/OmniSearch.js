var Filmstrip;
(function (Filmstrip) {
    var Directives;
    (function (Directives) {
        var OmniSearchController = (function () {
            function OmniSearchController(omdbService, $scope) {
                this.omdbService = omdbService;
                this.$scope = $scope;
            }
            OmniSearchController.prototype.performSearch = function () {
                var _this = this;
                this.$scope.busy = true;
                this.omdbService
                    .search(this.query)
                    .then(function (result) { return _this.$scope.onResult({ results: result }); })
                    .finally(function () { return _this.$scope.busy = false; });
            };
            OmniSearchController.$inject = ["OmdbService", "$scope"];
            return OmniSearchController;
        })();
        angular.module("fs.directives").directive("omniSearch", function () {
            return {
                scope: {
                    busy: "=",
                    onResult: "&"
                },
                restrict: "E",
                templateUrl: "/app/directives/omnisearch/omnisearch.html",
                controller: OmniSearchController,
                controllerAs: "vm"
            };
        });
    })(Directives = Filmstrip.Directives || (Filmstrip.Directives = {}));
})(Filmstrip || (Filmstrip = {}));
//# sourceMappingURL=OmniSearch.js.map