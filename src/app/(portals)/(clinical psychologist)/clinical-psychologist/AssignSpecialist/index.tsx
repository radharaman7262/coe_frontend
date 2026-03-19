'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';

import { Button, Drawer, Text } from '@/components/index';

import { ButtonVariant, FontType } from '@/types/typographyCommon';

import RightIcon from '@/public/assets/svg/right-arrow-icon.svg';
import CrossIcon from '@/public/assets/svg/cross-icon.svg';

import AssignPsychologist from './AssignSpecialist';

import { BUTTON_TEXT, DRAWER_DATA as text } from './constant';

import { SelectedAssignment } from './type';

import { useMapStudentToSpecialist } from './mutation';

import styles from './styles.module.scss';

interface AssignSpecialistDrawerProps {
    handleClose: () => void;
    open: boolean;
}

const AssignSpecialistDrawer = (props: AssignSpecialistDrawerProps) => {
    const { handleClose, open } = props;

    const [selectedAssignments, setSelectedAssignments] = useState<SelectedAssignment[]>([]);

    const { mutate, isPending } = useMapStudentToSpecialist();

    const { studentId } = useParams();

    const handleAssign = () => {
        const payload = {
            studentId: studentId ? +studentId : 0,
            assignments: selectedAssignments,
        };

        mutate(payload);
    };

    return (
        <Drawer
            anchor='right'
            sx={{
                '& .MuiPaper-root': {
                    width: '40%',
                },
            }}
            drawerOpen={open}
            setDrawerOpen={handleClose}
        >
            <div>
                <div className={styles['drawer-header']}>
                    <div className={styles['drawer-header-left']}>
                        <Text
                            font={[FontType.text_xl_bold, FontType.text_xl_bold]}
                            color='gray-900'
                        >
                            {text.assignPsychologist}
                        </Text>
                    </div>
                    <CrossIcon className={styles['cross-icon']} onClick={onclose} />
                </div>

                <div className={styles['drawer-body']}>
                    <AssignPsychologist
                        selectedAssignments={selectedAssignments}
                        setSelectedAssignments={setSelectedAssignments}
                    />
                </div>

                <div className={styles['drawer-bottom']}>
                    <Button
                        label={BUTTON_TEXT.continue}
                        type='button'
                        variant={ButtonVariant.SOLID}
                        disabled={!selectedAssignments?.length || isPending}
                        loader={isPending}
                        color='white'
                        font={[FontType.text_md_semibold, FontType.text_md_semibold]}
                        className={styles['btn-class']}
                        EndIcon={<RightIcon />}
                        onClick={handleAssign}
                    />
                </div>
            </div>
        </Drawer>
    );
};

export default AssignSpecialistDrawer;
