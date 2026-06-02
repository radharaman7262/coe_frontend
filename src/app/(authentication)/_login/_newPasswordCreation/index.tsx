import React, { useState } from 'react';

import { CreatePasswordFormType } from '@/types/changePasswordFormType';

import { AuthDrawerStep } from '@/constant/enumConstant';
import { UPDATE_PASSWORD_INITIAL_STATE } from './constant';

import CreatePasswordForm from './CreatepasswordForm';

interface NewPasswordCreationType {
    setStep: React.Dispatch<React.SetStateAction<AuthDrawerStep>>;
}

const NewPasswordCreation = (props: NewPasswordCreationType) => {
    const { setStep } = props;

    const [formValuesCreatePass, setFormValuesCreatePass] = useState<CreatePasswordFormType>(
        UPDATE_PASSWORD_INITIAL_STATE,
    );

    return (
        <CreatePasswordForm
            setStep={setStep}
            formValues={formValuesCreatePass}
            setFormValues={setFormValuesCreatePass}
        />
    );
};

export default NewPasswordCreation;
