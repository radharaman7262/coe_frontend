'use client';

import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';

import { Dropdown, Input, Radio, Text } from '@/components';
import ToggleButton from '@/components/ui/ToggleButton';

import { FontType } from '@/types/typographyCommon';

import PaperClipIcon from '@/public/assets/svg/paper-clip.svg';

import { STATIC_OCCUPATION_TYPE, STATIC_SIBLING_TYPE } from '@/constant/appConstants';

import { NO_LEADING_SPACES_REGEX } from '@/utils/regex';

import { FormValues, ParentFormKeys, SiblingType, OccupationType } from './type';

import { MAX_LENGTHS, MIN_LENGTHS, DRAWER_DATA as text, VALIDATION_RULES } from './constant';

import { useLanguageList } from './queries';

import styles from './styles.module.scss';

interface Props {
    formValues: FormValues;
    setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
}

const ParentInformationData = ({ formValues, setFormValues }: Props) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const [errors, setErrors] = useState<Partial<Record<ParentFormKeys, string>>>({});
    const [hasSiblings, setHasSiblings] = useState<SiblingType | null>(null);

    const { language: selectedLanguage, files } = formValues;

    const { data: languages = [], isLoading: languageLoading } = useLanguageList();

    const updateFormValue = <K extends ParentFormKeys>(key: K, value: FormValues[K]) => {
        setFormValues((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleInputChange =
        (field: ParentFormKeys) =>
        (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            let { value } = e.target;

            value = value.replace(NO_LEADING_SPACES_REGEX, '');

            const rule = VALIDATION_RULES[field];
            if (rule?.regex && value && !rule.regex.test(value)) {
                return;
            }

            const minLength = MIN_LENGTHS[field];
            const maxLength = MAX_LENGTHS[field];

            if (maxLength && value.length > maxLength) {
                return;
            }

            if (rule?.required && value.length > 0 && value.length < minLength) {
                setErrors((prev) => ({
                    ...prev,
                    [field]: rule.errorMessage,
                }));
            } else {
                setErrors((prev) => ({
                    ...prev,
                    [field]: '',
                }));
            }

            updateFormValue(field, value);
        };

    const handleFamilyTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        updateFormValue(ParentFormKeys.FAMILY_TYPE, value);
    };

    const handleSiblingToggle = (value: SiblingType) => {
        setHasSiblings(value);
        updateFormValue(ParentFormKeys.SIBLING_TYPE, value);
    };

    const handleFileClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;

        if (!selectedFiles) return;

        const fileArray = Array.from(selectedFiles);

        const validFiles = fileArray.filter((file) => file.type === 'application/pdf');

        if (validFiles.length !== fileArray.length) {
            toast.error('Only PDF files are allowed');
        }

        updateFormValue(ParentFormKeys.FILES, [...files, ...validFiles]);
    };

    const handleRemoveFile = (index: number) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        updateFormValue(ParentFormKeys.FILES, updatedFiles);
    };

    return (
        <div className={styles['container-wrapper']}>
            <div className={styles['drawer-form']}>
                <div className={styles['input-second-container']}>
                    <div className={styles['input-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.fathersName}
                        </Text>

                        <Input
                            name={ParentFormKeys.FATHERS_NAME}
                            placeholder='Enter Fathers Name'
                            value={formValues.fathersName}
                            onChange={handleInputChange(ParentFormKeys.FATHERS_NAME)}
                            error={Boolean(errors[ParentFormKeys.FATHERS_NAME])}
                            helperText={errors[ParentFormKeys.FATHERS_NAME]}
                        />
                    </div>

                    <div className={styles['input-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.fathersAge}
                        </Text>

                        <Input
                            name={ParentFormKeys.FATHERS_AGE}
                            placeholder='Enter age'
                            value={formValues.fathersAge?.toString() ?? ''}
                            onChange={handleInputChange(ParentFormKeys.FATHERS_AGE)}
                        />
                    </div>
                </div>

                <div className={styles['input-second-container']}>
                    <div className={styles['input-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.fathersOccupation}
                        </Text>

                        <Dropdown
                            label={text.selectOccupation}
                            options={STATIC_OCCUPATION_TYPE}
                            selectValue='name'
                            value={formValues.fathersOccupation}
                            isSearchable={false}
                            onChange={(value: OccupationType) =>
                                updateFormValue(ParentFormKeys.FATHERS_OCCUPATION, value)
                            }
                        />
                    </div>

                    <div className={styles['input-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.fathersNo}
                        </Text>

                        <Input
                            name={ParentFormKeys.FATHERS_NUMBER}
                            placeholder='+91 Enter here'
                            value={formValues.fathersNo?.toString() ?? ''}
                            onChange={handleInputChange(ParentFormKeys.FATHERS_NUMBER)}
                            error={Boolean(errors[ParentFormKeys.FATHERS_NUMBER])}
                            helperText={errors[ParentFormKeys.FATHERS_NUMBER]}
                        />
                    </div>
                </div>

                <hr className={styles['horizontal-line']} />

                <div className={styles['input-second-container']}>
                    <div className={styles['input-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.mothersName}
                        </Text>

                        <Input
                            name={ParentFormKeys.MOTHERS_NAME}
                            placeholder="Enter Mother's Name"
                            value={formValues.mothersName}
                            onChange={handleInputChange(ParentFormKeys.MOTHERS_NAME)}
                            error={Boolean(errors[ParentFormKeys.MOTHERS_NAME])}
                            helperText={errors[ParentFormKeys.MOTHERS_NAME]}
                        />
                    </div>

                    <div className={styles['input-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.mothersAge}
                        </Text>

                        <Input
                            name={ParentFormKeys.MOTHERS_AGE}
                            placeholder='Enter age'
                            value={formValues.mothersAge?.toString() ?? ''}
                            onChange={handleInputChange(ParentFormKeys.MOTHERS_AGE)}
                        />
                    </div>
                </div>

                <div className={styles['input-second-container']}>
                    <div className={styles['input-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.mothersOccupation}
                        </Text>

                        <Dropdown
                            label={text.selectOccupation}
                            options={STATIC_OCCUPATION_TYPE}
                            selectValue='name'
                            value={formValues.mothersOccupation}
                            isSearchable={false}
                            onChange={(value: OccupationType) =>
                                updateFormValue(ParentFormKeys.MOTHERS_OCCUPATION, value)
                            }
                        />
                    </div>

                    <div className={styles['input-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.phoneNo}
                        </Text>

                        <Input
                            name={ParentFormKeys.MOTHERS_NUMBER}
                            placeholder='+91 Enter here'
                            value={formValues.mothersNo?.toString() ?? ''}
                            onChange={handleInputChange(ParentFormKeys.MOTHERS_NUMBER)}
                            error={Boolean(errors[ParentFormKeys.MOTHERS_NUMBER])}
                            helperText={errors[ParentFormKeys.MOTHERS_NUMBER]}
                        />
                    </div>
                </div>

                <hr className={styles['horizontal-line']} />

                <div className={styles['language-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        {text.languageSpokenAtHome}
                    </Text>

                    <Dropdown
                        label={text.selectLanguage}
                        options={languageLoading ? [] : languages}
                        selectValue='name'
                        value={selectedLanguage}
                        isSearchable={false}
                        onChange={(value) => updateFormValue(ParentFormKeys.LANGUAGE, value)}
                    />
                </div>

                <div className={styles['family-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        {text.familyType}
                    </Text>
                    <Radio
                        name={ParentFormKeys.FAMILY_TYPE}
                        value='Joint Family'
                        label='Joint Family'
                        checked={formValues.familyType === 'Joint Family'}
                        onChange={handleFamilyTypeChange}
                    />

                    <Radio
                        name={ParentFormKeys.FAMILY_TYPE}
                        value='Nuclear Family'
                        label='Nuclear Family'
                        checked={formValues.familyType === 'Nuclear Family'}
                        onChange={handleFamilyTypeChange}
                        className={styles['radio-button']}
                    />
                </div>

                <div className={styles['siblings-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        {text.siblings}
                    </Text>

                    <ToggleButton
                        leftLabel={STATIC_SIBLING_TYPE[0]}
                        rightLabel={STATIC_SIBLING_TYPE[1]}
                        selected={hasSiblings}
                        handleToggle={handleSiblingToggle}
                    />
                </div>

                <hr className={styles['horizontal-line']} />

                <div className={styles['upload-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        {text.uploadsupportingfile}
                    </Text>

                    <input
                        ref={fileInputRef}
                        type='file'
                        multiple
                        accept='.pdf,application/pdf'
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />

                    <div
                        className={styles['file-container']}
                        onClick={handleFileClick}
                        aria-hidden='true'
                    >
                        <PaperClipIcon />

                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='primary-cta'
                        >
                            {text.choosefiles}
                        </Text>
                    </div>

                    <div className={styles.fileList}>
                        {files.map((file, index) => (
                            <div key={`${file.name}-${file.size}`} className={styles.fileChip}>
                                <span>{file.name}</span>

                                <button type='button' onClick={() => handleRemoveFile(index)}>
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentInformationData;
