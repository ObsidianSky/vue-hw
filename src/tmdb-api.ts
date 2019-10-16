import axios from 'axios';

const defaultParams = {
    'api_key': '52d71cfbf5ad1e146f2b481693eda982'
};

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

api.interceptors.request.use(function (config) {
    const requestParams = config.params || {};

    config.params = Object.assign({}, defaultParams, requestParams);

    return config;
});

api.interceptors.response.use(function (response) {
    return response.data || response;
});

export interface Response<T> {
    [key: string]: any;
    result: T;
}

export class Movie {
    adult: boolean = false;
    backdrop_path: string = '';
    genre_ids: number[] = [];
    id: number = 0;
    original_language: string = '';
    original_title: string = '';
    overview: string = '';
    popularity: number = 0;
    poster_path: string = '';
    release_date: string = '';
    title: string = '';
    video: boolean = false;
    vote_average: number = 0;
    vote_count: number = 0;

    constructor(movie: Movie) {
        Object.assign(this, movie);
    }
}

export function fetchPopular(): Promise<Response<Movie[]>> {
    return api.get('/movie/popular');
}

export function search(searchText: string): Promise<Response<Movie[]>> {
    return api.get('/search/movie', { params: { query: searchText }});
}