module Filmstrip.Areas.Home {
    class HomeIndexController {
        public static $inject = ["StorageService", "OmdbService", "AppState"];

        public searching: boolean = false;
        public searchResults: Array<Models.SearchResult> = [];

        constructor(
            private storageService: Services.StorageService,
            private omdbService: Services.OmdbService,
            private appState: Services.AppState
        ) {
            this.searchResults = this.appState.lastSearchResult;
        }

        public addToFavourites(result: Models.SearchResult) {
            this.omdbService.details(result.imdbID).then(details => this.storageService.add(Services.StorageService.Favourites, details));
        }

        public addToCollection(result: Models.SearchResult) {
            this.omdbService.details(result.imdbID).then(details => this.storageService.add(Services.StorageService.Collection, details));
        }

        public onSearchResult(results: Array<Models.SearchResult>) {
            this.searchResults = results;
            this.appState.lastSearchResult = results;
        }

        public alreadyInCollection(entry: Models.DetailedResult) {
            return this.storageService.existsSync<Models.DetailedResult>(Services.StorageService.Collection, value => value.imdbID === entry.imdbID);
        }

        public alreadyFavourited(favourite: Models.DetailedResult) {
            return this.storageService.existsSync<Models.DetailedResult>(Services.StorageService.Favourites, value => value.imdbID === favourite.imdbID);
        }
    }

    angular.module("fs.controllers").controller("HomeIndexController", HomeIndexController);
}