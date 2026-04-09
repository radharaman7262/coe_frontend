import { useEffect, useState } from 'react';

import { ImageContainer } from '@/components/index';

import { FormSchemaField } from '../types/form.types';
import { FieldValue } from './FormField';

import styles from './styles.module.scss';

type FileUploadFieldProps<T extends string> = {
    field: FormSchemaField<T>;
    value: FieldValue;
    onChange: (key: T, value: FieldValue) => void;
};

const FileUploadField = <T extends string>({ field, value, onChange }: FileUploadFieldProps<T>) => {
    const [preview, setPreview] = useState<string>('');

    useEffect(() => {
        if (typeof value === 'string') {
            setPreview(value);
        } else {
            setPreview('');
        }
    }, [value]);

    return (
        <div>
            <input
                id={field.name}
                type='file'
                accept='image/*'
                style={{ display: 'none' }}
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;

                    const maxSize = 2 * 1024 * 1024; // 2MB
                    if (file.size > maxSize) {
                        // eslint-disable-next-line no-alert
                        alert('File size should be less than 2MB');
                        return;
                    }

                    const reader = new FileReader();

                    reader.onloadend = () => {
                        onChange(field.name, reader.result as string);
                    };

                    reader.readAsDataURL(file);
                }}
            />

            <label htmlFor={field.name} className={styles.uploadBox}>
                {preview ? (
                    <ImageContainer
                        icon={preview}
                        alt='preview'
                        width={140}
                        height={140}
                        className={styles.previewImage}
                    />
                ) : (
                    <div className={styles.uploadContent}>
                        <p className={styles.uploadTitle}>Upload Genogram</p>
                        <p className={styles.uploadSubtitle}>Click to upload image</p>
                    </div>
                )}
            </label>
        </div>
    );
};

export default FileUploadField;
