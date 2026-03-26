export enum MuscleStrengthFormKeys {
    MUSCLE_STRENGTH = 'muscleStrength',
}

export type MuscleToneFormType = {
    [key in MuscleStrengthFormKeys]: string;
};

export type GrossMotorErrorMessagesType = {
    [key in MuscleStrengthFormKeys]?: string;
};
