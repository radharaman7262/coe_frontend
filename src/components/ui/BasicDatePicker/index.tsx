'use client';

/**
 * @file Basic Input date picker component
 */
import { memo, useEffect, useState } from 'react';

import { ThemeProvider } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { Dayjs } from 'dayjs';

import { createTheme } from '@mui/material/styles';

type BasicDatePickerProps = DatePickerProps & {
    /**
     * Label for the input.
     */
    label?: string;
    /**
     * Additional CSS class names.
     */
    className?: string;
    /**
     * handle function.
     */
    onChange?: (date: Dayjs | null) => void;
    /**
     * Value Set in Date Picker
     */
    value?: Dayjs | null | undefined;
    /**
     * Date format
     */
    dateFormat?: string;
    /**
     * To Disable the future date
     */
    isDisableFutureDate?: boolean;
    /**
     * views
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Views?: any;
    /**
     * minDate
     */
    minDate?: Dayjs;
};

const customStyles = {
    '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
        fontSize: '16px',
        padding: '12.5px 14px',
    },

    '& .MuiInputBase-root-MuiOutlinedInput-root': {
        borderRadius: '12px',
    },

    '& .MuiOutlinedInput-root.Mui-disabled': {
        backgroundColor: '#eaecf0',
        border: ' 1px solid #eaecf0',
    },

    '& .css-1hgcujo-MuiPickersInputBase-root-MuiPickersOutlinedInput-root.Mui-disabled ': {
        backgroundColor: '#eaecf0',
        border: ' 1px solid #eaecf0',
    },

    '& .MuiInputBase-input.Mui-disabled': {
        WebkitTextFillColor: '#667085', // optional: text color for disabled
    },

    '& .MuiPickersSectionList-root': {
        padding: '14px 0',
        fontSize: '14px',
        fontWeight: '500',
    },

    '& .MuiFormLabel-root': {
        fontSize: '14px',
        color: 'var(--gray-400)',
        top: '-2px',
    },

    '& .MuiInputLabel-root': {
        '&.Mui-focused': {
            color: 'var(--gray-400)',
        },
    },

    '& .MuiOutlinedInput-root': {
        '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid var(--gray-400)',
        },

        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: '1px solid var(--gray-400)',
        },
        '& legend': {
            fontSize: '0.98em',
        },
    },

    '& .MuiOutlinedInput-root:hover': {
        '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid var(--gray-400)',
        },
    },

    ' & .css-1uvydh2': {
        fontSize: '16px',
    },

    '& .css-1hgcujo-MuiPickersInputBase-root-MuiPickersOutlinedInput-root': {
        color: 'var(--gray-400)',
    },

    '& .css-1hgcujo-MuiPickersInputBase-root-MuiPickersOutlinedInput-root.Mui-focused:not(.Mui-error) .MuiPickersOutlinedInput-notchedOutline':
        {
            border: '1px solid var(--gray-300)',
        },

    '& css-1rebu5w-MuiFormControl-root-MuiPickersTextField-root': {
        border: '1px solid var(--gray-300)',
    },
};

const BasicFontStyle = {
    fontSize: '1.6rem',
    fontFamily: 'Poppins, sans-serif',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const newTheme = (theme: any) =>
    createTheme({
        ...theme,
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: {
                        minWidth: '100%',
                    },
                },
            },
            MuiPickersCalendarHeader: {
                styleOverrides: {
                    label: BasicFontStyle,
                },
            },
            MuiDayCalendar: {
                styleOverrides: {
                    weekDayLabel: BasicFontStyle,
                },
            },
            MuiPickersDay: {
                styleOverrides: {
                    root: BasicFontStyle,
                },
            },
            MuiPickersYear: {
                styleOverrides: {
                    yearButton: BasicFontStyle,
                },
            },
        },
    });

const BasicDatePicker = (props: BasicDatePickerProps) => {
    const {
        label,
        className,
        onChange,
        value,
        dateFormat = 'DD/MM/YYYY',
        isDisableFutureDate = true,
        sx: additionalStyles,
        Views,
        minDate,
        ...restProps
    } = props;

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <div className={className}>
            <ThemeProvider theme={newTheme}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label={label}
                        format={dateFormat}
                        views={Views || ['year', 'month', 'day']}
                        onChange={onChange}
                        sx={{ ...customStyles, ...additionalStyles }}
                        value={value}
                        disableFuture={isDisableFutureDate}
                        disablePast={!!minDate}
                        minDate={minDate}
                        // slots={{ openPickerIcon: OpenCalenderIcon }}
                        slotProps={
                            {
                                textField: {
                                    InputLabelProps: {
                                        style: { fontFamily: 'Poppins, sans-serif' },
                                    },
                                    readOnly: true,
                                    fullWidth: true,
                                },
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            } as any
                        }
                        {...restProps}
                    />
                </LocalizationProvider>
            </ThemeProvider>
        </div>
    );
};

/**
 * This component provides a way to render Date Picker components with various styling options.
 * @example
 *    <BasicDatePicker value={stateValue} label='Start Date' onChange ={handleChange} />
 */
export default memo(BasicDatePicker);
