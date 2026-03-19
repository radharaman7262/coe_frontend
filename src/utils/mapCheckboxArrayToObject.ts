export const mapCheckboxArrayToObject = (
    selectedValues: string[],
    options: { label: string; value: string; key: string }[],
) => {
    const result: Record<string, string> = {};

    options.forEach((option) => {
        // result[option.key] = selectedValues.includes(option.value);
        result[option.key] = selectedValues.includes(option.value) ? option.value : '';
    });

    return result;
};
