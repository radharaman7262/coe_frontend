import React, { forwardRef, memo } from 'react';

import cx from 'classnames';

import { FontType } from '@/types/typographyCommon';

import { Text } from '@/components/index';

import ShimmerUiContainer from '../ShimmerUiContainer';

import styles from './styles.module.scss';

type InputProps = React.ComponentPropsWithoutRef<'input'> & {
    /**
     * value for showing state in input.
     */
    value?: string;
    /**
     * name for the input.
     */
    name?: string;
    /**
     * Label for the input
     */
    label?: string;
    /**
     * Start SVG icon
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    StartAdornment?: any;
    /**
     * End SVG icon
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    EndAdornment?: any;
    /**
     * Helper text to represent the error or any help for the input
     */
    helperText?: string | React.ReactElement;
    /**
     * Additional CSS class names.
     */
    className?: string;
    /**
     * Type of the input
     */
    type?: string;
    /**
     * OnChange event handler
     */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

    /**
     * OnChange event handler
     */
    onClickStart?: () => void;

    /**
     * OnChange event handler
     */

    onClickEnd?: () => void;

    /**
     * For placeholder by default it is set to be input
     */
    placeholder?: string;
    /**
     * Error boolean value for is their any error or not
     */
    error?: boolean;
    /**
     * disable is used for disable the input box
     * @default 'false'
     */
    disable?: boolean;
    /**
     * Shimmer loader is used for the showing shimmer at the the time of loading in the case of when user get some details from the api.
     */
    loading?: boolean;
    /**
     * className for the shimmer.
     */
    shimmerClassName?: string;

    inputBaseClass?: string;

    internalInputBaseClass?: string;

    inputMode?: string;
    /**
     * className for the endAdornment icon.
     */
    endAdornmentClassname?: string;
};

const InputBase = (props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    const {
        label,
        helperText,
        onChange,
        className,
        StartAdornment,
        EndAdornment,
        type,
        value,
        name,
        placeholder = 'Type here...',
        error = false,
        disable = false,
        loading = false,
        shimmerClassName,
        inputBaseClass,
        internalInputBaseClass,
        inputMode,
        onClickStart,
        onClickEnd,
        endAdornmentClassname,
        ...restProps
    } = props;

    return (
        <div className={cx(styles.wrapper, inputBaseClass)}>
            {loading ? (
                <ShimmerUiContainer className={shimmerClassName} />
            ) : (
                <div
                    className={cx(
                        styles['container-wrapper'],
                        disable && styles.disabled,
                        className,
                    )}
                    data-display={error}
                >
                    {StartAdornment && (
                        <div className={styles['left-container']}>
                            <StartAdornment
                                onClick={onClickStart}
                                className={styles['cursor-pointer']}
                            />
                        </div>
                    )}
                    <input
                        aria-label={label}
                        aria-describedby={helperText ? 'helper-text' : undefined}
                        onChange={onChange}
                        value={value}
                        name={name}
                        ref={ref}
                        className={cx(styles['input-container'], internalInputBaseClass)}
                        disabled={disable}
                        placeholder={placeholder}
                        type={type}
                        inputMode={inputMode || 'text'}
                        {...restProps}
                    />
                    {EndAdornment && (
                        <div className={styles['right-container']}>
                            <EndAdornment
                                onClick={onClickEnd}
                                className={cx(styles['cursor-pointer'], endAdornmentClassname)}
                            />
                        </div>
                    )}
                </div>
            )}

            {helperText && (
                <div className={styles['helper-text']}>
                    <Text
                        font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                        color={error ? 'red-500' : 'primary-cta'}
                    >
                        {helperText}
                    </Text>
                </div>
            )}
        </div>
    );
};

/**
 * This component provides a way to render input components with various styling options.
 *
 * @example
 *     <Input />
 */
export const Input = forwardRef(InputBase);

export default memo(Input);
