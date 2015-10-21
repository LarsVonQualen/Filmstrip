module Filmstrip.Areas.Home {
    interface IDetailsScopeParams extends angular.ui.IStateParamsService {
        imdbId: string;
    }

    class DetailsController {
        public static $inject = ["OmdbService", "$stateParams", "StorageService"];

        public entry: Models.DetailedResult;

        public initialized: boolean = false;

        constructor(
            private omdbService: Services.OmdbService,
            private $stateParams: IDetailsScopeParams,
            private storageService: Services.StorageService
        ) {
            omdbService
                .details($stateParams.imdbId)
                .then(result => this.entry = result)
                .finally(() => this.initialized = true);
        }

        public addToFavourites(result: Models.SearchResult) {
            this.omdbService.details(result.imdbID).then(details => this.storageService.add(Services.StorageService.Favourites, details));
        }

        public addToCollection(result: Models.SearchResult) {
            this.omdbService.details(result.imdbID).then(details => this.storageService.add(Services.StorageService.Collection, details));
        }

        public alreadyInCollection(entry: Models.DetailedResult) {
            return this.storageService.existsSync<Models.DetailedResult>(Services.StorageService.Collection, value => value.imdbID === entry.imdbID);
        }

        public alreadyFavourited(favourite: Models.DetailedResult) {
            return this.storageService.existsSync<Models.DetailedResult>(Services.StorageService.Favourites, value => value.imdbID === favourite.imdbID);
        }
    }

    angular.module("fs.controllers").controller("DetailsController", DetailsController);
}