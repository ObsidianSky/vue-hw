import axios from 'axios';
import { ExtendedMovieDetails, PagedResponse, ShortMovieDetails } from "@/tmdb-api/tmdb.models";

const defaultParams = {
    'api_key': '52d71cfbf5ad1e146f2b481693eda982'
};

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

api.interceptors.request.use((config) => {
    const requestParams = config.params || {};

    config.params = Object.assign({}, defaultParams, requestParams);

    return config;
});

api.interceptors.response.use( (response) => {
    return response.data || response;
});

export async function fetchPopular(page: number): Promise<PagedResponse<ShortMovieDetails[]>> {
    return await api.get('/movie/popular', { params: { page }});
}

export async function search(searchText: string, page: number): Promise<PagedResponse<ShortMovieDetails[]>> {
    return await api.get('/search/movie', { params: { query: searchText, page }});
}

export async function fetchMovie(id: number): Promise<ExtendedMovieDetails> {
    return await api.get('/movie/' + id).then(resp => new ExtendedMovieDetails(resp));
}