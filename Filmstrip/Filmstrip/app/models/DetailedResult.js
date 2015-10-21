var Filmstrip;
(function (Filmstrip) {
    var Models;
    (function (Models) {
        var DetailedResult = (function () {
            function DetailedResult(Actors, Awards, Country, Director, Genre, Language, Metascore, Plot, Poster, Rated, Released, Response, Runtime, Title, Type, Writer, Year, imdbID, imdbRating, imdbVotes) {
                this.Actors = Actors;
                this.Awards = Awards;
                this.Country = Country;
                this.Director = Director;
                this.Genre = Genre;
                this.Language = Language;
                this.Metascore = Metascore;
                this.Plot = Plot;
                this.Poster = Poster;
                this.Rated = Rated;
                this.Released = Released;
                this.Response = Response;
                this.Runtime = Runtime;
                this.Title = Title;
                this.Type = Type;
                this.Writer = Writer;
                this.Year = Year;
                this.imdbID = imdbID;
                this.imdbRating = imdbRating;
                this.imdbVotes = imdbVotes;
            }
            return DetailedResult;
        })();
        Models.DetailedResult = DetailedResult;
    })(Models = Filmstrip.Models || (Filmstrip.Models = {}));
})(Filmstrip || (Filmstrip = {}));
//# sourceMappingURL=DetailedResult.js.map