var Filmstrip;
(function (Filmstrip) {
    var Router = (function () {
        function Router($stateProvider, $urlRouterProvider) {
            this.$stateProvider = $stateProvider;
            this.$urlRouterProvider = $urlRouterProvider;
            this.registerHomeArea();
            this.registerCollectionArea();
            $urlRouterProvider.otherwise("/");
        }
        Router.prototype.registerHomeArea = function () {
            this.$stateProvider.state("home-index", {
                url: "/",
                controller: "HomeIndexController",
                controllerAs: "vm",
                templateUrl: "/app/areas/home/HomeIndex.html"
            });
            this.$stateProvider.state("home-details", {
                url: "/details/:imdbId",
                controller: "DetailsController",
                controllerAs: "vm",
                templateUrl: "/app/areas/home/Details.html"
            });
        };
        Router.prototype.registerCollectionArea = function () {
            this.$stateProvider.state("collection", {
                abstract: true,
                url: "/collection",
                templateUrl: "/app/areas/collection/CollectionAbstract.html"
            });
            this.$stateProvider.state("collection.overview", {
                url: "/overview",
                controller: "CollectionOverviewController",
                controllerAs: "vm",
                templateUrl: "/app/areas/collection/CollectionOverview.html"
            });
            this.$stateProvider.state("collection.favourites", {
                url: "/",
                controller: "FavouritesOverviewController",
                controllerAs: "vm",
                templateUrl: "/app/areas/collection/FavouritesOverview.html"
            });
        };
        Router.$inject = [
            "$stateProvider",
            "$urlRouterProvider"
        ];
        return Router;
    })();
    Filmstrip.Router = Router;
})(Filmstrip || (Filmstrip = {}));
//# sourceMappingURL=Router.js.map