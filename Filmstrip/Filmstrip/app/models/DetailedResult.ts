module Filmstrip.Models {
    export class DetailedResult {
        constructor(
            public Actors: string,
            public Awards: string,
            public Country: string,
            public Director: string,
            public Genre: string,
            public Language: string,
            public Metascore: string,
            public Plot: string,
            public Poster: string,
            public Rated: string,
            public Released: string,
            public Response: string,
            public Runtime: string,
            public Title: string,
            public Type: string,
            public Writer: string,
            public Year: string,
            public imdbID: string,
            public imdbRating: string,
            public imdbVotes: string
        ) {
            
        }
    }
}