module Filmstrip {
    export class Router {
        public static $inject = [
            "$stateProvider",
            "$urlRouterProvider"
        ];

        constructor(
            private $stateProvider: angular.ui.IStateProvider,
            private $urlRouterProvider: angular.ui.IUrlRouterProvider
        ) {
            this.registerHomeArea();
            this.registerCollectionArea();
            this.registerAboutArea();

            $urlRouterProvider.otherwise("/");
        }

        private registerHomeArea() {
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
        }

        private registerAboutArea() {
            this.$stateProvider.state("about", {
                url: "/about",
                templateUrl: "/app/areas/about/About.html"
            });
        }

        private registerCollectionArea() {
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
        }
    }
}