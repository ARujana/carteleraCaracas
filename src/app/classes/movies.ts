import { MovieListResponse, Movie } from 'src/app/models/MovieListResponse';

class Movies implements Movie {
    adult?: boolean;
    backdrop_path?: null | string;
    genre_ids?: number[];
    id: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: null | string;
    release_date?: Date;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
    constructor(movie?: Movie) {
        if (movie !== undefined && 'id' in movie) {
            
        }
    }
}

class MovieLists implements MovieListResponse {
    page?: number;
    results?: Movies[];
    total_pages?: number;
    total_results?: number;

    constructor(movieLR?: MovieListResponse) {
        if (movieLR !== undefined && 'page' in movieLR) {
            this.page = movieLR.page;
            for (const movie of (movieLR.results as Movie[])) {

            }
            if ('results' in movieLR) { this.results = movieLR.results; }
            if ('total_pages' in movieLR) { this.total_pages = movieLR.total_pages; }
            if ('total_results' in movieLR) { this.total_results = movieLR.total_results; }
        }
    }
}

