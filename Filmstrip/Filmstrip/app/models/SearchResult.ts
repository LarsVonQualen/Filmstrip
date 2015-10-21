module Filmstrip.Models {
    export class SearchResult {
        constructor(
            public Poster: string,
            public Title: string,
            public Type: string,
            public Year: string,
            public imdbID: string
        ) { }
    }
}