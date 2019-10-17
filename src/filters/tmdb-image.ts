//TODO add backdrop when no value provided
export default function tmdbImageBaseFilter(value: string, width?: number): string {
    const imageSize = width ? `w${width}` : 'original';

    return `https://image.tmdb.org/t/p/${imageSize}${value}`;
}