'use client';

import { useState } from 'react';
import { Drawer } from '@mui/material';

import Child from './ChildInformation';
import Parent from './ParentInformation';
import Psychologist from './AssignPsychologist';

interface Props {
    openDrawer: boolean;
    setOpenDrawer: (val: boolean) => void;
}

enum DrawerStep {
    CHILD = 1,
    PARENT = 2,
    PSYCHOLOGIST = 3,
}

const StudentDrawerController = ({ openDrawer, setOpenDrawer }: Props) => {
    const [step, setStep] = useState<DrawerStep>(DrawerStep.CHILD);

    const handleClose = () => {
        setOpenDrawer(false);
        setStep(DrawerStep.CHILD);
    };

    return (
        <Drawer
            anchor='right'
            open={openDrawer}
            sx={{
                '& .MuiPaper-root': {
                    width: '600px',
                    display: 'flex',
                    flexDirection: 'column',
                },
            }}
        >
            {step === DrawerStep.CHILD && (
                <Child onContinue={() => setStep(DrawerStep.PARENT)} onclose={handleClose} />
            )}

            {step === DrawerStep.PARENT && (
                <Parent
                    onBack={() => setStep(DrawerStep.CHILD)}
                    onclose={handleClose}
                    onAddStudent={() => setStep(DrawerStep.PSYCHOLOGIST)}
                />
            )}

            {step === DrawerStep.PSYCHOLOGIST && (
                <Psychologist onContinue={handleClose} onclose={handleClose} />
            )}
        </Drawer>
    );
};

export default StudentDrawerController;
