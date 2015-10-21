module Filmstrip.Services {
    export class StorageService {
        public static $inject = ["localStorageService", "$q"];

        public static Collection: string = "collection";
        public static Favourites: string = "favourites";

        private cache: { [key: string]: any } = {};
        
        constructor(
            private localStorageService: angular.local.storage.ILocalStorageService,
            private $q: angular.IQService
        ) {

        }

        public add<TValue>(bucket: string, value: TValue): angular.IPromise<TValue> {
            return new this.$q((resolve, reject) => {
                this.all(bucket).then(collection => {
                    collection.push(value);

                    this.localStorageService.set(bucket, collection);

                    resolve(value);
                }, reject);
            });
        }

        public remove<TValue>(bucket: string, predicate: (value: TValue, index: number, array: Array<TValue>) => boolean): angular.IPromise<Array<TValue>> {
            return new this.$q((resolve, reject) => {
                this.all<TValue>(bucket).then(collection => {
                    var deletions: Array<TValue> = _.remove(collection, predicate);

                    this.localStorageService.set(bucket, collection);

                    resolve(deletions);
                }, reject);
            });
        }

        public findWhere<TValue>(bucket: string, predicate: (value: TValue, index: number, array: Array<TValue>) => boolean): angular.IPromise<Array<TValue>> {
            return this.all(bucket).then(collection => collection.filter(predicate));
        }

        public all<TValue>(bucket: string): angular.IPromise<Array<TValue>> {
            return new this.$q(resolve => {
                var collection = this.cache[bucket] || this.localStorageService.get<Array<TValue>>(bucket) || [];

                this.localStorageService.set(bucket, collection);

                resolve(collection);
            });
        }

        public exists<TValue>(bucket: string, predicate: (value: TValue, index: number, array: Array<TValue>) => boolean): angular.IPromise<boolean> {
            return this.findWhere(bucket, predicate).then(collection => collection.length > 0);
        }

        public existsSync<TValue>(bucket: string, predicate: (value: TValue, index: number, array: Array<TValue>) => boolean): boolean {
            var collection = this.cache[bucket] || this.localStorageService.get<Array<TValue>>(bucket) || [];

            this.localStorageService.set(bucket, collection);

            return collection.filter(predicate).length > 0;
        }
    }

    angular.module("fs.services").service("StorageService", StorageService);
}