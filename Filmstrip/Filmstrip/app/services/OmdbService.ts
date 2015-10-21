module Filmstrip.Services {
    export class OmdbService {
        public static $inject = ["$http", "$q"];

        protected baseUrl: string = "http://www.omdbapi.com/";

        constructor(
            private $http: angular.IHttpService,
            private $q: angular.IQService
        ) {
            
        }

        public details(imdbId: string): angular.IPromise<Models.DetailedResult> {
            return new this.$q((resolve, reject) => {
                this.$http.get(`${this.baseUrl}?i=${imdbId}`).then(response => {
                    var data: any = response.data;
                    var mapped = new Models.DetailedResult(
                        data.Actors,
                        data.Awards,
                        data.Country,
                        data.Director,
                        data.Genre,
                        data.Language,
                        data.Metascore,
                        data.Plot,
                        data.Poster,
                        data.Rated,
                        data.Released,
                        data.Response,
                        data.Runtime,
                        data.Title,
                        data.Type,
                        data.Writer,
                        data.Year,
                        data.imdbID,
                        data.imdbRating,
                        data.imdbVotes);

                    resolve(mapped);
                }, reject);
            });
        }

        public search(query: string, type: string = ""): angular.IPromise<Array<Models.SearchResult>> {
            return new this.$q((resolve, reject) => {
                this.$http.get(`${this.baseUrl}?s=${query}&type=${type}`).then(response => {
                    var data: any = response.data;

                    if (angular.isDefined(data.Search) && angular.isArray(data.Search)) {
                        var results: Array<any> = data.Search;

                        resolve(results.map(value => new Models.SearchResult(value.Poster, value.Title, value.Type, value.Year, value.imdbID)));
                    } else {
                        reject("Unknown return data format.");
                    }
                }, reject);
            });
        }
    }

    angular.module("fs.services").service("OmdbService", OmdbService);
}