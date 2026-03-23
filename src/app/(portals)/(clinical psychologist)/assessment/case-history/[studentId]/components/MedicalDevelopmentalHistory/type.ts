export enum MedicalDevelopmentalHistoryFormKeys {
    BIRTH_HISTORY = 'birthHistory',
    PERINATAL_HISTORY = 'perinatalHistory',
    COMORBIDITIES = 'comorbidities',
    MEDICATIONS = 'medications',
    MOTOR_MILE_STONES = 'motorMilestones',
    SENSORY_PROFILE = 'sensoryProfile',
}

export type MedicalDevelopmentalHistoryFormType = {
    [key in MedicalDevelopmentalHistoryFormKeys]: string;
};
