module Filmstrip.Services {
    export class AppState {
        public lastSearchResult: Array<Models.SearchResult> = [];
    }

    angular.module("fs.services").service("AppState", AppState);
}