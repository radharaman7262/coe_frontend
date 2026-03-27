import React from 'react';

import { Radio, Text } from '@components/index';

import { FontType } from '@/types/typographyCommon';

import { RadioGroupProps } from './type';

import style from './style.module.scss';

const RadioGroup: React.FC<RadioGroupProps> = ({ section, field, options, value, onChange }) => {
    const formatLabel = (text: string) =>
        text.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());

    return (
        <div className={style.row}>
            <Text font={[FontType.text_sm_medium, FontType.text_sm_medium]}>
                {formatLabel(field)}
            </Text>

            <div className={style.options}>
                {options.map((opt) => (
                    <Radio
                        key={opt}
                        label={opt}
                        name={`${section}-${field}`}
                        value={opt}
                        checked={value === opt}
                        onChange={() => onChange(section, field, opt)}
                    />
                ))}
            </div>
        </div>
    );
};

export default RadioGroup;
