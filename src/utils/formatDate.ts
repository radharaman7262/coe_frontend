export const formatDate = (date: string) => {
    if (!date) return '';

    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
    });
};

export const formatTime = (time: string) => {
    if (!time) return '';

    const [hour, minute] = time.split(':').map(Number);

    const period = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;

    return `${formattedHour.toString().padStart(2, '0')}:${minute
        .toString()
        .padStart(2, '0')} ${period}`;
};
