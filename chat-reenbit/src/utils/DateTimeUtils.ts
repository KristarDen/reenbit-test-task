function TimestampToMDDYYYY(timestamp: number): string {
    const date = new Date(timestamp * 1000);

    const options: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    };
    const userLocale = navigator.language || "en-US"
    return date.toLocaleDateString(userLocale, options);
}
export {TimestampToMDDYYYY}