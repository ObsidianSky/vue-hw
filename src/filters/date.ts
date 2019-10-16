export default function dateFilter(value: string) {
    const date = new Date(value);

    return date.toLocaleString(
        ['en-US'],
        {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }
    )
}