module Filmstrip.Areas.Collection {
    class FavouritesOverviewController {
        public static $inject = ["StorageService"];

        public favourites: Array<Models.DetailedResult> = [];
        public initialized: boolean = false;

        constructor(
            private storageService: Services.StorageService
        ) {
            storageService
                .all<Models.DetailedResult>(Services.StorageService.Favourites)
                .then(favourites => this.favourites = favourites)
                .finally(() => this.initialized = true);
        }

        public removeFromFavourites(favourite: Models.DetailedResult) {
            this.storageService
                .remove<Models.DetailedResult>(Services.StorageService.Favourites, f => f.imdbID === favourite.imdbID)
                .then(() => _.remove<Models.DetailedResult>(this.favourites, f => f.imdbID === favourite.imdbID));
        }
    }

    angular.module("fs.controllers").controller("FavouritesOverviewController", FavouritesOverviewController);
}