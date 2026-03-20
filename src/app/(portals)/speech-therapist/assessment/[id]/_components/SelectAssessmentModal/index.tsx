'use client';

import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import Modal from '@/components/shared/Modal';
import { Button, Checkbox, Text } from '@/components';

import CrossIcon from '@/public/assets/svg/croxx -icons.svg';
import RightChevronIcon from '@/public/assets/svg/right-chevrons.svg';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import styles from './styles.module.scss';

import { AssessmentItem, SelectAssessmentPayload } from './type';
import { SELECT_ASSESSMENT_TEXT as text } from './constant';
import { usePostSelectAssessment } from './mutation';

interface Props {
    open: boolean;
    setOpen: (val: boolean) => void;
    data: AssessmentItem[];
    studentId: number;
    onContinue: (selected: AssessmentItem[]) => void;
    onClose?: () => void;
}

const SelectAssessmentModal = ({ open, setOpen, data, studentId, onContinue, onClose }: Props) => {
    const [assessmentList, setAssessmentList] = useState<AssessmentItem[]>([]);

    const { mutate, isPending } = usePostSelectAssessment();

    useEffect(() => {
        if (data?.length) {
            const updated = data?.map((item) => ({
                ...item,
                checked: item.isSelected === '1',
            }));
            setAssessmentList(updated);
        }
    }, [data]);

    const handleToggle = (id: string) => {
        setAssessmentList((prev) =>
            prev.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)),
        );
    };

    const handleContinue = () => {
        const selected = assessmentList.filter((item) => item.checked);

        if (selected.length === 0) {
            toast.error('Please select at least one assessment');
            return;
        }

        const payload: SelectAssessmentPayload = {
            studentId,
            formId: selected.map((item) => ({
                id: Number(item.id),
            })),
        };

        mutate(payload, {
            onSuccess: (result) => {
                if (result?.status) {
                    onContinue(selected);
                    onClose?.();
                }
            },
            onError: (error) => {
                console.error(error);
                toast.error('Something went wrong');
            },
        });
    };

    return (
        <Modal
            open={open}
            setOpen={(val) => {
                if (!val && onClose) onClose();
                else setOpen(val);
            }}
        >
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.text}>
                        <Text font={[FontType.text_lg_bold, FontType.text_lg_bold]} color='black'>
                            {text.selectOneAssessment}
                        </Text>

                        <Text
                            font={[FontType.text_xs_regular, FontType.text_xs_regular]}
                            color='text-idle'
                        >
                            {text.youCanChoose}
                        </Text>
                    </div>

                    <span
                        className={styles.close}
                        onClick={() => {
                            onClose?.();
                        }}
                        aria-hidden='true'
                    >
                        <CrossIcon />
                    </span>
                </div>

                <div className={styles.grid}>
                    {assessmentList?.map((item) => (
                        <div
                            key={item?.id}
                            className={styles.card}
                            onClick={() => handleToggle(item?.id)}
                            aria-hidden='true'
                        >
                            <div className={styles.left}>
                                <div className={styles.icon} />

                                <Text
                                    font={[FontType.text_md_medium, FontType.text_md_medium]}
                                    color='black'
                                >
                                    {item?.name}
                                </Text>
                            </div>

                            <Checkbox
                                isChecked={item?.checked}
                                onChange={() => handleToggle(item?.id)}
                                inputClassName={styles.customCheckbox}
                                checkIconClassName={styles.customCheckIcon}
                            />
                        </div>
                    ))}
                </div>

                <div className={styles.footer}>
                    <Button
                        label='Continue'
                        variant={ButtonVariant.SOLID}
                        color='white'
                        EndIcon={<RightChevronIcon />}
                        onClick={handleContinue}
                        loader={isPending}
                    />
                </div>
            </div>
        </Modal>
    );
};

export default SelectAssessmentModal;
