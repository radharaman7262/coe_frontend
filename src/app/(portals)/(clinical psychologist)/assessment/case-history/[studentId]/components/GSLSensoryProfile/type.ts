export enum GSLSensoryFormKeys {
    AUDITORY = 'auditory',
    VISUAL = 'visual',
    TACTILE = 'tactile',
    VESTIBULAR = 'vestibular',
    ORAL_SENSORY = 'oralSensory',
    OVERSTIMULATION = 'overstimulation',
}

export type GSLSensoryFormType = {
    [key in GSLSensoryFormKeys]: string;
};
