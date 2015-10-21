var Filmstrip;
(function (Filmstrip) {
    var Models;
    (function (Models) {
        var SearchResult = (function () {
            function SearchResult(Poster, Title, Type, Year, imdbID) {
                this.Poster = Poster;
                this.Title = Title;
                this.Type = Type;
                this.Year = Year;
                this.imdbID = imdbID;
            }
            return SearchResult;
        })();
        Models.SearchResult = SearchResult;
    })(Models = Filmstrip.Models || (Filmstrip.Models = {}));
})(Filmstrip || (Filmstrip = {}));
//# sourceMappingURL=SearchResult.js.map