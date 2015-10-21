var Filmstrip;
(function (Filmstrip) {
    var Services;
    (function (Services) {
        var OmdbService = (function () {
            function OmdbService($http, $q) {
                this.$http = $http;
                this.$q = $q;
                this.baseUrl = "http://www.omdbapi.com/";
            }
            OmdbService.prototype.details = function (imdbId) {
                var _this = this;
                return new this.$q(function (resolve, reject) {
                    _this.$http.get(_this.baseUrl + "?i=" + imdbId).then(function (response) {
                        var data = response.data;
                        var mapped = new Filmstrip.Models.DetailedResult(data.Actors, data.Awards, data.Country, data.Director, data.Genre, data.Language, data.Metascore, data.Plot, data.Poster, data.Rated, data.Released, data.Response, data.Runtime, data.Title, data.Type, data.Writer, data.Year, data.imdbID, data.imdbRating, data.imdbVotes);
                        resolve(mapped);
                    }, reject);
                });
            };
            OmdbService.prototype.search = function (query, type) {
                var _this = this;
                if (type === void 0) { type = ""; }
                return new this.$q(function (resolve, reject) {
                    _this.$http.get(_this.baseUrl + "?s=" + query + "&type=" + type).then(function (response) {
                        var data = response.data;
                        if (angular.isDefined(data.Search) && angular.isArray(data.Search)) {
                            var results = data.Search;
                            resolve(results.map(function (value) { return new Filmstrip.Models.SearchResult(value.Poster, value.Title, value.Type, value.Year, value.imdbID); }));
                        }
                        else {
                            reject("Unknown return data format.");
                        }
                    }, reject);
                });
            };
            OmdbService.$inject = ["$http", "$q"];
            return OmdbService;
        })();
        Services.OmdbService = OmdbService;
        angular.module("fs.services").service("OmdbService", OmdbService);
    })(Services = Filmstrip.Services || (Filmstrip.Services = {}));
})(Filmstrip || (Filmstrip = {}));
//# sourceMappingURL=OmdbService.js.map