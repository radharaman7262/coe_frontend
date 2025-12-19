export const convertToIndianFormat = (number: number) => {
    if (number >= 10000000) {
        const crore = number / 10000000;
        return `${crore.toFixed(2)} Cr`;
    }
    if (number >= 100000) {
        const lakh = number / 100000;
        return `${lakh?.toFixed(2)} L`;
    }
    return number?.toString();
};
