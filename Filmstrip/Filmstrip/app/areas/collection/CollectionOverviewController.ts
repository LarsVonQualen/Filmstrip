﻿module Filmstrip.Areas.Collection {
    class CollectionOverviewController {
        public static $inject = ["StorageService"];

        public collection: Array<Models.DetailedResult> = [];

        constructor(
            private storageService: Services.StorageService
        ) {
            storageService
                .all<Models.DetailedResult>(Services.StorageService.Collection)
                .then(collection => this.collection = collection);
        }

        public removeFromCollection(entry: Models.DetailedResult) {
            this.storageService
                .remove<Models.DetailedResult>(Services.StorageService.Collection, e => e.imdbID === entry.imdbID)
                .then(() => _.remove<Models.DetailedResult>(this.collection, e => e.imdbID === entry.imdbID));
        }
    }

    angular.module("fs.controllers").controller("CollectionOverviewController", CollectionOverviewController);
}