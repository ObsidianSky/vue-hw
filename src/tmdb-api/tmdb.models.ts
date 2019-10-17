export class PagedResponse<T> {
    page: number;
    total_pages: number;
    total_results: number;
    results: T;

    constructor(page: Object) {
        Object.assign(this, page)
    }
}

export class ProductionCompany {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
}

export class ProductCountry {
    iso_3166_1: string;
    name: string;
}

export class SpokenLanguage {
    iso_3166_1: string;
    name: string;
}

export class Genre {
    id: number;
    name: string;
}

export class BaseMovie {
    adult: boolean = false;
    backdrop_path: string = '';
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

    constructor(details: Object) {
        Object.assign(this, details);
    }

    public getPosterPath(): string {
        return this.poster_path || this.backdrop_path;
    }
}

export class ShortMovieDetails extends BaseMovie {
    genre_ids: number[] = [];
}

export class ExtendedMovieDetails extends BaseMovie{
    belongs_to_collection: Object;
    budget: number;
    genres: Genre[];
    homepage: string;
    imdb_id: string;
    production_companies: ProductionCompany[];
    production_countries: ProductCountry[];
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
}