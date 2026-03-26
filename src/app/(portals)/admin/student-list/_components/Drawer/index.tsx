import { useEffect, useState } from 'react';
import { Drawer } from '@mui/material';

import Child from './ChildInformation';
import Parent from './ParentInformation';
import Psychologist from './AssignPsychologist';
import ScheduleSession from './ScheduleSession';

import { FormValues as ChildFormValues } from './ChildInformation/type';
import { FormValues as ParentFormValues } from './ParentInformation/type';

import { INITIAL_STATE as CHILD_INITIAL } from './ChildInformation/constant';
import { INITIAL_STATE as PARENT_INITIAL } from './ParentInformation/constant';
import { useAddStudentMutation } from './mutation';
import { AddStudentResponse, ApiError } from './type';
import { PsychologistType } from './AssignPsychologist/type';

interface Props {
    openDrawer: boolean;
    setOpenDrawer: (val: boolean) => void;
    initialStep?: number;
    studentIdFromTable?: string | null;
}

enum DrawerStep {
    CHILD = 1,
    PARENT = 2,
    PSYCHOLOGIST = 3,
    SCHEDULE_SESSION = 4,
}

const StudentDrawerController = ({
    openDrawer,
    setOpenDrawer,
    initialStep,
    studentIdFromTable,
}: Props) => {
    const [step, setStep] = useState<DrawerStep>(
        initialStep ? (initialStep as DrawerStep) : DrawerStep.CHILD,
    );
    const [childData, setChildData] = useState<ChildFormValues>(CHILD_INITIAL);
    const [parentData, setParentData] = useState<ParentFormValues>(PARENT_INITIAL);

    const [errorMessage, setErrorMessage] = useState<string>('');

    const [studentId, setStudentId] = useState<string | null>(studentIdFromTable || null);
    const [selectedPsychologist, setSelectedPsychologist] = useState<PsychologistType | null>(null);

    const { mutate: addStudent } = useAddStudentMutation();

    const handleAddStudent = () => {
        const formData = new FormData();

        formData.append('name', childData.fullName);
        formData.append('gender', childData.gender?.name ?? '');
        formData.append('dob', childData.dateoFBirth?.format('YYYY-MM-DD') ?? '');
        formData.append('gradeId', childData.grade?.id?.toString() ?? '');
        formData.append('schoolName', childData.schoolName ?? '');
        formData.append('difficulties', childData.difficultiesFaced);
        formData.append('fatherName', parentData.fathersName);
        formData.append('fatherAge', String(parentData.fathersAge ?? 0));
        formData.append('fatherOccupation', parentData.fathersOccupation?.name.toString() ?? '');
        formData.append('fatherPhone', parentData.fathersNo?.toString() ?? '');
        formData.append('motherName', parentData.mothersName);
        formData.append('motherAge', String(parentData.mothersAge ?? 0));
        formData.append('motherOccupation', parentData.mothersOccupation?.name.toString() ?? '');
        formData.append('motherPhone', parentData.mothersNo?.toString() ?? '');
        formData.append('siblings', parentData.siblingType?.name ?? '');
        formData.append('languageId', String(parentData.language?.id || 0));
        formData.append('familyType', parentData.familyType ?? '');
        formData.append('udiseCode', childData.udiseCode ?? '');

        if (parentData.files && parentData.files.length > 0) {
            parentData.files.forEach((file) => {
                formData.append('documents', file);
            });
        }

        addStudent(formData, {
            onSuccess: (result: AddStudentResponse) => {
                if (result?.status) {
                    setStudentId(result?.response?.studentId);
                    setStep(DrawerStep.PSYCHOLOGIST);
                    setErrorMessage('');
                } else {
                    setErrorMessage(result?.message || 'something went wrong');
                }
            },
            onError: (error: ApiError) => {
                const errorMessage =
                    error?.response?.data?.message || error?.message || 'Something went wrong';

                setErrorMessage(errorMessage);
            },
        });
    };

    const handleClose = (fromPsychologist?: boolean) => {
        setOpenDrawer(false);

        if (fromPsychologist && studentId) {
            return;
        }

        setStep(DrawerStep.CHILD);
        setStudentId(null);
        setSelectedPsychologist(null);
    };

    useEffect(() => {
        if (openDrawer) {
            if (initialStep) {
                setStep(initialStep as DrawerStep);
            }

            if (studentIdFromTable) {
                setStudentId(studentIdFromTable);
            }
        }
    }, [openDrawer, initialStep, studentIdFromTable]);

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
                <Child
                    formValues={childData}
                    setFormValues={setChildData}
                    onContinue={() => setStep(DrawerStep.PARENT)}
                    onclose={handleClose}
                />
            )}

            {step === DrawerStep.PARENT && (
                <Parent
                    formValues={parentData}
                    setFormValues={setParentData}
                    onBack={() => setStep(DrawerStep.CHILD)}
                    onclose={handleClose}
                    onAddStudent={handleAddStudent}
                    errorMessage={errorMessage}
                />
            )}

            {step === DrawerStep.PSYCHOLOGIST && (
                <Psychologist
                    selectedPsychologist={selectedPsychologist}
                    setSelectedPsychologist={setSelectedPsychologist}
                    onContinue={() => setStep(DrawerStep.SCHEDULE_SESSION)}
                    onclose={handleClose}
                />
            )}

            {step === DrawerStep.SCHEDULE_SESSION && (
                <ScheduleSession
                    setOpenDrawer={setOpenDrawer}
                    studentId={studentId || ''}
                    onclose={handleClose}
                    selectedPsychologist={selectedPsychologist}
                />
            )}
        </Drawer>
    );
};

export default StudentDrawerController;
