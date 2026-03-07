/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

export const useFormState = () => {
    const [values, setValues] = useState<Record<string, any>>({});

    const setValue = (name: string, value: any) => {
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return {
        values,
        setValue,
    };
};
