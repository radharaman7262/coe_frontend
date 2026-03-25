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

    const toggleCheckbox = (section: string, key: string, value: string) => {
    setValues((prev) => {
      const prevArr = prev[section]?.[key] || [];
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [key]: prevArr.includes(value)
            ? prevArr.filter((v: string) => v !== value)
            : [...prevArr, value],
        },
      };
    });
  };

    return {
        values,
        setValue,
        setValues,
        toggleCheckbox
    };
};
