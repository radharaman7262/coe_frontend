'use client';

import React, { useRef, useState } from 'react';

import { toast } from 'react-toastify';

import { Dropdown, Input, Text } from '@/components';
import ToggleButton from '@/components/ui/ToggleButton';

import { FontType } from '@/types/typographyCommon';

import PaperClipIcon from '@/public/assets/svg/paper-clip.svg';

import { SiblingType } from './type';

import { DUMMY_DATA, LANGUAGE_DATA, SIBLING_OPTIONS, DRAWER_DATA as text } from './constant';

import styles from './styles.module.scss';

const ParentInformationData = () => {
    const [hassiblings, setHasSiblings] = useState<SiblingType | null>(null);
    const [files, setFiles] = useState<File[]>([]);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleSiblingToggle = (value: SiblingType) => {
        setHasSiblings(value);
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

        setFiles((prev) => [...prev, ...validFiles]);
    };

    const handleRemoveFile = (index: number) => {
        setFiles((prev) => prev.filter((_, i) => i !== index));
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

                        <Input name='fathersName' placeholder='Enter Fathers Name' value='' />
                    </div>

                    <div className={styles['input-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.fathersAge}
                        </Text>

                        <Input name='fathersAge' placeholder='Enter age' value='' />
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
                            options={DUMMY_DATA}
                            selectValue='value'
                            value={null}
                            isSearchable={false}
                        />
                    </div>

                    <div className={styles['input-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.fathersNo}
                        </Text>

                        <Input name='fathersNo' placeholder='+91 Enter here' value='' />
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

                        <Input name='mothersName' placeholder="Enter Mother's Name" value='' />
                    </div>

                    <div className={styles['input-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.mothersAge}
                        </Text>

                        <Input name='mothersAge' placeholder='Enter age' value='' />
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
                            options={DUMMY_DATA}
                            selectValue='value'
                            value={null}
                            isSearchable={false}
                        />
                    </div>

                    <div className={styles['input-container']}>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                        >
                            {text.phoneNo}
                        </Text>

                        <Input name='mothersNo' placeholder='+91 Enter here' value='' />
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
                        options={LANGUAGE_DATA}
                        selectValue='value'
                        value={null}
                        isSearchable={false}
                    />
                </div>

                <div className={styles['family-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        {text.familyType}
                    </Text>

                    <div className={styles['radio-wrapper']}>
                        <input type='radio' name='family' />
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='gray-700'
                        >
                            {text.jointFamily}
                        </Text>
                        <input type='radio' name='family' />
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='gray-700'
                        >
                            {text.nuclearFamily}
                        </Text>
                    </div>
                </div>

                <div className={styles['siblings-container']}>
                    <Text
                        font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                        color='text-idle'
                    >
                        {text.siblings}
                    </Text>

                    <ToggleButton
                        leftLabel={SIBLING_OPTIONS[0]}
                        rightLabel={SIBLING_OPTIONS[1]}
                        selected={hassiblings}
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
                        {files.map((file) => (
                            <div key={`${file.name}-${file.size}`} className={styles.fileChip}>
                                <span>{file.name}</span>

                                <button
                                    type='button'
                                    onClick={() => handleRemoveFile(files.indexOf(file))}
                                >
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
