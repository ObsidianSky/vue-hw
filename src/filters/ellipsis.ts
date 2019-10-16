export default function ellipsisFilter(value: string, length: number) {
    const dotsAmount = 3;

    return value.slice(0, length - dotsAmount).trim() + '...';
}