export enum GrossMotorFormKeys {
    GROSS_MOTOR_SKILLS = 'selectedOptions',
}

export type GrossMotorFormType = {
    [key in GrossMotorFormKeys]: string;
};

export type GrossMotorErrorMessagesType = {
    [key in GrossMotorFormKeys]?: string;
};
