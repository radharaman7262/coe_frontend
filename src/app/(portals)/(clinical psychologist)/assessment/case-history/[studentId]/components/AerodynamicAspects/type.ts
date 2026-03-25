export enum AerodynamicFormKeys {
    BREATH_SUPPORT = 'breathSupport',
    PHONATION_COORDINATION = 'phonationRespirationCoordination',
    MPT = 'maximumPhonationTime',
    SZ_RATIO = 'szRatio',
    TENSION = 'tensionDuringPhonation',
    BREATH_MISMATCH = 'restBreathingMismatch',
}

export type AerodynamicFormType = {
    [key in AerodynamicFormKeys]: string;
};
