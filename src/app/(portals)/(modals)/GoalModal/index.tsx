import React, { ChangeEvent, useEffect, useState } from 'react';

import { Button, Dropdown, Input, Text } from '@/components/index';

import Modal from '@/components/shared/Modal';

import cx from 'classnames';

import CloseIcon from '@public/assets/svg/cross-icon.svg';
import SmallCloseIcon from '@public/assets/svg/small-cross.svg';

import { MODAL_STYLING, StatusNumber } from '@/constant/appConstants';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import {
    durationDataType,
    levelOfSupportType,
    ErrorMessagesType,
    GoalSetupFormKeys,
    subGoalType,
    bodyPayloadType,
} from './type';

import { INITIAL_STATE as initialState, MAX_LENGTHS } from './constant';

import { checkAllFieldValidOrNot, validateInput } from './utils';

import { useUserGoalAction } from './userStudentGoalAction';

import { goalSetFormStateType } from '../../specialist/(specialist)/intervention/_components/type';

import {
    useGetLevelOfSupportList,
    useGetTherpistDurationList,
} from '../../specialist/(specialist)/queries';

import styles from './styles.module.scss';

interface goalModaltype {
    open: boolean;
    setGoalModal: React.Dispatch<React.SetStateAction<boolean>>;
    studentId: number;
    setStudentId?: React.Dispatch<React.SetStateAction<number | null>>;
}

const GoalModal = (props: goalModaltype) => {
    const { open, setGoalModal, studentId, setStudentId } = props;

    const [subGoals, setSubGoals] = useState<subGoalType[]>([{ id: 1, subgoaltitle: '' }]);
    const [formValues, setFormValues] = useState<goalSetFormStateType>(initialState);

    const [selectedSubGoal, setSelectedSubGoal] = useState<number>(StatusNumber.ACTIVE);
    const [errorMessages, setErrorMessages] = useState<ErrorMessagesType>({});
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [isLoadingBtn, setIsLoadingBtn] = useState<boolean>(false);

    const { execute } = useUserGoalAction({
        setShow: setGoalModal,
        setLoader: setIsLoadingBtn,
    });

    const [subgoalErrors, setSubGoalErrors] = useState<{
        global?: string;
        fieldErrors?: Record<number, string>;
    }>({});

    const { isLoading: levelSupportLoader, data: levelOfSupportData } = useGetLevelOfSupportList();

    const { response: levelOfSupportResponse = [] }: { response: levelOfSupportType[] } =
        levelOfSupportData || {};

    const { isLoading: durationLoader, data: durationData } = useGetTherpistDurationList();

    const { response: durationDataResponse = [] }: { response: durationDataType[] } =
        durationData || {};

    const updateFormValue = <K extends GoalSetupFormKeys>(
        key: K,
        value: goalSetFormStateType[K],
    ) => {
        setFormValues((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        const fieldKey = name as GoalSetupFormKeys;

        const isNumericField = [GoalSetupFormKeys.ACCURACY].includes(fieldKey);

        const isNumeric = !Number.isNaN(Number(value)) || value === '';

        if (isNumericField && !isNumeric) return;

        const maxLength = MAX_LENGTHS[fieldKey];

        if (!value) {
            setErrorMessages((prev) => ({
                ...prev,
                [name]: '',
            }));
            updateFormValue(fieldKey as GoalSetupFormKeys, value);
            return;
        }

        if (!maxLength || value.length <= maxLength) {
            updateFormValue(fieldKey, value);
            validateInput(fieldKey, value, setErrorMessages);
        }
    };

    const handleChange = (value: string) => {
        setSubGoals((prev) =>
            prev.map((item) =>
                item.id === selectedSubGoal ? { ...item, subgoaltitle: value } : item,
            ),
        );

        setSubGoalErrors({});
    };

    const handleSelectedSubGoal = (id: number) => {
        setSelectedSubGoal(id);
    };

    const validateSubGoals = (subGoals: subGoalType[]) => {
        const invalidIndexes: number[] = [];
        const fieldErrors: Record<number, string> = {};

        subGoals.forEach((item, index) => {
            if (!item.subgoaltitle || item.subgoaltitle.trim() === '') {
                invalidIndexes.push(index + 1);
                fieldErrors[item.id] = `SubGoal ${index + 1} title is required`;
            }
        });

        return { invalidIndexes, fieldErrors };
    };

    const handleAddSubGoal = () => {
        const { invalidIndexes, fieldErrors } = validateSubGoals(subGoals);

        if (invalidIndexes.length > 0) {
            setSubGoalErrors({
                global: `SubGoal ${invalidIndexes.join(', ')} title is required`,
                fieldErrors,
            });
            return;
        }

        setSubGoalErrors({});

        setSubGoals((prev) => [
            ...prev,
            {
                id: prev.length > 0 ? Math.max(...prev.map((i) => i.id)) + 1 : 1,
                subgoaltitle: '',
            },
        ]);
    };

    const handleRemove = (id: number) => {
        if (subGoals.length === 1) return;

        setSubGoals((prev) => {
            const currentIndex = prev.findIndex((item) => item.id === selectedSubGoal);
            const deleteIndex = prev.findIndex((item) => item.id === id);

            const filtered = prev.filter((item) => item.id !== id);

            const updated = filtered.map((item, index) => ({
                ...item,
                id: index + 1,
            }));

            let newIndex = currentIndex;

            if (deleteIndex < currentIndex) {
                newIndex = currentIndex - 1;
            } else if (deleteIndex === currentIndex) {
                if (currentIndex >= updated.length) {
                    newIndex = updated.length - 1;
                }
            }

            setSelectedSubGoal(newIndex + 1);

            return updated;
        });

        setSubGoalErrors({});
    };

    const handleDurationSelect = (item: durationDataType | null) => {
        updateFormValue(GoalSetupFormKeys.DURATION, item);
    };

    const handleLevelOfSupportSelect = (item: levelOfSupportType | null) => {
        updateFormValue(GoalSetupFormKeys.LEVEL_OF_SUPPORT, item);
    };

    const selectedSubGoalTitle =
        subGoals.find((item) => item.id === selectedSubGoal)?.subgoaltitle || '';

    const handleSubmit = () => {
        const { invalidIndexes, fieldErrors } = validateSubGoals(subGoals);

        if (invalidIndexes.length > 0) {
            setSubGoalErrors({
                global: `SubGoal ${invalidIndexes.join(', ')} title is required`,
                fieldErrors,
            });
        } else {
            const subGoalPayload = subGoals
                .map((item) => item.subgoaltitle.trim())
                .filter((title) => title !== '')
                .map((title) => ({ title }));

            const body: bodyPayloadType = {
                studentId,
                behavior: formValues[GoalSetupFormKeys.BEHAVIOUR],
                accuracy: formValues[GoalSetupFormKeys.ACCURACY],
                title: formValues[GoalSetupFormKeys.GOAL_TITLE],
                levelId: Number(formValues[GoalSetupFormKeys.LEVEL_OF_SUPPORT]?.id),
                durationId: Number(formValues[GoalSetupFormKeys.DURATION]?.id),
                subGoals: subGoalPayload,
            };

            execute({
                type: 'create',
                body,
            });
        }
    };

    const handleClose = () => {
        setGoalModal(false);
        setFormValues(initialState);
        setSubGoals([{ id: 1, subgoaltitle: '' }]);
        setStudentId?.(null);
    };

    useEffect(() => {
        const isValid = checkAllFieldValidOrNot({ formValues, errorMessages });

        setIsFormValid(isValid);
    }, [errorMessages, formValues]);

    return (
        <Modal open={open} sx={MODAL_STYLING}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles['modal-title']}>
                        <Text
                            font={[FontType.text_xl_semibold, FontType.text_xl_semibold]}
                            color='black'
                        >
                            Set Long term Goals
                        </Text>
                        <CloseIcon onClick={handleClose} className={styles['cross-icon']} />
                    </div>
                    <Text
                        font={[FontType.text_sm_regular, FontType.text_sm_regular]}
                        color='text-idle'
                    >
                        Choose whether to close the case after upload or assign the student to an
                        educator for next steps.
                    </Text>
                </div>

                <div className={styles['content-structure']}>
                    <div>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                            required
                        >
                            Goal Title
                        </Text>
                        <Input
                            value={formValues[GoalSetupFormKeys.GOAL_TITLE]}
                            name='goalTitle'
                            placeholder='Goal Title Name'
                            onChange={handleInputChange}
                            error={!!errorMessages[GoalSetupFormKeys.GOAL_TITLE]}
                            helperText={errorMessages[GoalSetupFormKeys.GOAL_TITLE] || ''}
                        />
                    </div>

                    <div>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                            required
                        >
                            Behaviour/Objective
                        </Text>
                        <Input
                            value={formValues[GoalSetupFormKeys.BEHAVIOUR]}
                            name='behaviour'
                            placeholder='Enter here'
                            onChange={handleInputChange}
                            error={!!errorMessages[GoalSetupFormKeys.BEHAVIOUR]}
                            helperText={errorMessages[GoalSetupFormKeys.BEHAVIOUR] || ''}
                        />
                    </div>

                    <div className={styles['support-content']}>
                        <div className={styles['support-box']}>
                            <Text
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                color='gray-500'
                                required
                            >
                                Level Of Support
                            </Text>
                            <Dropdown<levelOfSupportType>
                                label='Select'
                                options={levelOfSupportResponse}
                                value={formValues[GoalSetupFormKeys.LEVEL_OF_SUPPORT]}
                                selectValue='level'
                                isSearchable={false}
                                loading={levelSupportLoader}
                                onChange={handleLevelOfSupportSelect}
                            />
                        </div>

                        <div className={styles['accuracy-duration-box']}>
                            <Text
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                color='text-idle'
                                required
                            >
                                Accuracy
                            </Text>
                            <Input
                                value={formValues[GoalSetupFormKeys.ACCURACY]}
                                name='accuracy'
                                placeholder='Eg 20%'
                                onChange={handleInputChange}
                                error={!!errorMessages[GoalSetupFormKeys.ACCURACY]}
                                helperText={errorMessages[GoalSetupFormKeys.ACCURACY] || ''}
                            />
                        </div>

                        <div className={styles['accuracy-duration-box']}>
                            <Text
                                font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                                color='gray-500'
                                required
                            >
                                Duration
                            </Text>
                            <Dropdown<durationDataType>
                                label='Select'
                                options={durationDataResponse}
                                value={formValues[GoalSetupFormKeys.DURATION]}
                                selectValue='name'
                                isSearchable={false}
                                loading={durationLoader}
                                onChange={handleDurationSelect}
                            />
                        </div>
                    </div>

                    <hr />

                    <div className={styles['add-more-scroll']}>
                        {subGoals &&
                            subGoals?.map((item) => (
                                <div
                                    className={cx(
                                        styles['subgoal-design'],
                                        selectedSubGoal === item?.id && styles['subgoal-hover'],
                                    )}
                                    aria-hidden='true'
                                    onClick={() => {
                                        handleSelectedSubGoal(item?.id);
                                    }}
                                >
                                    <Text
                                        font={[
                                            FontType.text_sm_semibold,
                                            FontType.text_sm_semibold,
                                        ]}
                                        color='black'
                                    >
                                        SubGoal {item?.id}
                                    </Text>
                                    <SmallCloseIcon
                                        className={styles['cross-icon']}
                                        onClick={() => handleRemove(item?.id)}
                                    />
                                </div>
                            ))}
                        <div
                            className={styles['cross-icon']}
                            onClick={handleAddSubGoal}
                            aria-hidden='true'
                        >
                            <Text
                                font={[FontType.text_sm_semibold, FontType.text_sm_semibold]}
                                color='primary-nav-link'
                            >
                                + Add More
                            </Text>
                        </div>
                    </div>

                    <div>
                        {subgoalErrors.global && (
                            <Text
                                color='red-400'
                                font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                            >
                                {subgoalErrors.global}
                            </Text>
                        )}
                    </div>

                    <div>
                        <Text
                            font={[FontType.text_sm_medium, FontType.text_sm_medium]}
                            color='text-idle'
                            required
                        >
                            Sub Goal Title
                        </Text>
                        <Input
                            value={selectedSubGoalTitle}
                            name='goalTitle'
                            placeholder='Enter here'
                            onChange={(e) => handleChange(e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles['btn-container']}>
                    <Button
                        color='white'
                        type='button'
                        label='Submit'
                        variant={ButtonVariant.SOLID}
                        disabled={!isFormValid}
                        onClick={handleSubmit}
                        loader={isLoadingBtn}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default GoalModal;
