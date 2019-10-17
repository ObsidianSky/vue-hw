export default function ellipsisFilter(value: string, length: number): string {
    const dotsAmount = 3;

    return value.slice(0, length - dotsAmount).trim() + '...';
}