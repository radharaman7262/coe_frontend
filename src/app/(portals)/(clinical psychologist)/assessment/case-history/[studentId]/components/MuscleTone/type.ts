export enum MuscleToneFormKeys {
    MUSCLE_TONE = 'muscleTone',
}

export type MuscleToneFormType = {
    [key in MuscleToneFormKeys]: string;
};

export type GrossMotorErrorMessagesType = {
    [key in MuscleToneFormKeys]?: string;
};
