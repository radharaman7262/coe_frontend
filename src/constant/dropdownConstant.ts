export const DROPDOWN_SEARCH_INPUT_PLACEHOLDER = 'Search by name...';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isString = (item: any): item is string => typeof item === 'string';

/**
 * This is function which returns label for dropdown options
 * @param {Response} response - The fetch response.
 * @param {object} [option] - option is the array of object.
 * @param {string} [selectValue] - select value is the value which you want to select and show in the dropdown.
 */

export const getOptionLabel = <T>(option: T, selectValue: keyof T) => {
    if (isString(option)) {
        return option;
        // eslint-disable-next-line no-else-return
    } else if (option && selectValue && typeof option === 'object') {
        const labelValue = option[selectValue];

        if (isString(labelValue)) {
            return labelValue;
        }
    }

    return '';
};
