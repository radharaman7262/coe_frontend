'use client';

import React, { JSX, useEffect, useRef, useState } from 'react';
import cx from 'classnames';

import { Checkbox, CircularLoader, Text, ShimmerUiContainer } from '@components/index';

import ArrowDown from '@public/assets/svg/chevron-down.svg';

import useClickOutside from '@/hooks/useClickOutside';

import { KeyboardEvent } from '@/constant/enumConstant';

import { FontType } from '@/types/typographyCommon';

import { DROPDOWN_SEARCH_INPUT_PLACEHOLDER, getOptionLabel } from '@/constant/dropdownConstant';

import { DropdownProps } from './type';

import styles from './styles.module.scss';

const Dropdown = <T extends { selectValue: keyof T }>({
    label = 'Select',
    options,
    multipleSelection = false,
    noOptionText = <Text>Options are not available</Text>,
    selectValue,
    value,
    loading,
    onChange,
    searchFilter,
    handleSearch,
    additionalStyle,
    optionsClassName,
    isSearchable = true,
    disable = false,
    shimmerLoader,
    shimmerClassName = '',
    className,
    widthClassName,
    dropDownTitle,
    optionAreaHeight,
}: DropdownProps<T>) => {
    const [dropdownValue, setDropdownValue] = useState<string>('');
    const [isOpen, setIsOpen] = useState(false);
    const [openUpwards, setOpenUpwards] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null!);

    useClickOutside(dropdownRef, () => setIsOpen(false));

    const handleCheckbox = (item: T) => () => onChange?.(item);
    const handleSelectOption = (item: T) => () => {
        onChange?.(item);
        setIsOpen(false);
    };

    useEffect(() => {
        if (multipleSelection && value && Array.isArray(value) && value.length > 0) {
            const str = value
                .map((item) => {
                    const label = getOptionLabel(item, selectValue);

                    return label;
                })
                .join(',');

            setDropdownValue(str);
        } else if (value && !Array.isArray(value)) {
            setDropdownValue(getOptionLabel(value, selectValue));
        } else {
            setDropdownValue('');
        }
    }, [value, multipleSelection, selectValue]);

    useEffect(() => {
        if (isOpen) {
            const rect = dropdownRef.current?.getBoundingClientRect();
            if (rect) {
                const spaceBelow = window.innerHeight - rect.bottom;
                const spaceAbove = rect.top;
                setOpenUpwards(spaceBelow < 250 && spaceAbove > spaceBelow);
            }
        }
    }, [isOpen]);

    const renderOptions = (item: T) => {
        const label = getOptionLabel(item, selectValue);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const arrayofDropdownlabel: any = [];
        if (value && Array.isArray(value) && value?.length > 0) {
            const arrayOfLabel = value.map((item) => getOptionLabel(item, selectValue));
            arrayofDropdownlabel.push(...arrayOfLabel);
        }

        return (
            <div className={styles.checkbox}>
                <Checkbox
                    isChecked={arrayofDropdownlabel.includes(label)}
                    label={label}
                    onChange={handleCheckbox(item)}
                />
            </div>
        );
    };

    const renderSingleSelectOption = (item: T) => {
        const label = getOptionLabel(item, selectValue);
        return (
            <div
                key={label}
                tabIndex={0}
                role='button'
                className={cx(
                    styles['options-list-container'],
                    optionsClassName,
                    styles.item,
                    dropdownValue === label && styles.selected,
                )}
                onClick={handleSelectOption(item)}
                onKeyDown={(e) => e.key === KeyboardEvent.ENTER && handleSelectOption(item)()}
            >
                <Text
                    font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                    color='black'
                    className={styles['cursor-pointer']}
                >
                    {label}
                </Text>
            </div>
        );
    };

    return (
        <div className={cx(styles.wrapper, widthClassName)} ref={dropdownRef}>
            {shimmerLoader ? (
                <ShimmerUiContainer className={shimmerClassName} />
            ) : (
                <>
                    {dropDownTitle && (
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='gray-600'
                        >
                            {dropDownTitle}
                        </Text>
                    )}
                    <div
                        role='button'
                        tabIndex={0}
                        className={cx(
                            styles.dropdown,
                            { [styles.disable]: disable },
                            additionalStyle,
                            className,
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                        onKeyDown={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}
                    >
                        <Text
                            font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                            color={dropdownValue ? 'black' : 'gray-400'}
                            style={{
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: 'inline-block',
                                maxWidth: '100%',
                            }}
                        >
                            {dropdownValue || label}
                        </Text>
                        <ArrowDown className={cx({ [styles.rotate]: isOpen })} />
                    </div>
                    {isOpen && (
                        <div
                            className={cx(styles['dropdown-item-container'], optionAreaHeight, {
                                [styles.upwards]: openUpwards,
                            })}
                        >
                            {isSearchable && !loading && (
                                <div className={styles['search-input-container']}>
                                    <input
                                        type='search'
                                        placeholder={DROPDOWN_SEARCH_INPUT_PLACEHOLDER}
                                        value={searchFilter}
                                        className={styles['search-input']}
                                        onChange={handleSearch}
                                    />
                                </div>
                            )}

                            {loading ? (
                                <CircularLoader />
                            ) : options?.length === 0 ? (
                                noOptionText
                            ) : (
                                <ul
                                    className={cx(styles.option, {
                                        [styles['checkbox-gap']]: multipleSelection,
                                    })}
                                >
                                    {multipleSelection
                                        ? options.map((item) => renderOptions(item))
                                        : options.map(renderSingleSelectOption)}
                                </ul>
                            )}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default React.memo(Dropdown) as unknown as <T>(props: DropdownProps<T>) => JSX.Element;
