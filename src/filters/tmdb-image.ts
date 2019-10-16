//TODO add backdrop when no value provided
export default function tmdbImageBaseFilter(value: string) {
    return 'https://image.tmdb.org/t/p/w500' + value;
}