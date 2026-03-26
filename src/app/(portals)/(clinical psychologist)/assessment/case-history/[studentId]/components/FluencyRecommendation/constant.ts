/* eslint-disable @typescript-eslint/no-explicit-any */
import { RecommendationFormKeys, RecommendationFormType } from './type';

export const INITIAL_STATE: RecommendationFormType = {
    [RecommendationFormKeys.THERAPY]: '',
    [RecommendationFormKeys.PARENT_ID]: '',
    [RecommendationFormKeys.THERAPY_FREQUENCY]: '',
};

export const mapCPApiToState = (data: any) => {
    const selectedState: Record<string, boolean> = {};
    const inputState: Record<string, string> = {};

    const therapies = data?.therapies;

    if (therapies) {
        selectedState.speechTherapy = !!therapies.speechLanguageTherapy;
        selectedState.oralMotor = !!therapies.oralMotorStrengthening;
        selectedState.aac = !!therapies.aacTrial;
        selectedState.parentTraining = !!therapies.parentTraining;
        selectedState.feeding = !!therapies.feedingTherapy;
        selectedState.otReferral = !!therapies.otReferral;
        selectedState.multidisciplinary = !!therapies.multidisciplinaryFollowUp;
    }

    // frequency
    if (data?.therapyFrequency?.value) {
        inputState.frequency = data.therapyFrequency.value;
    }

    return { selectedState, inputState };
};

// export const OPTIONS = [
//     {
//         label: 'Speech therapy for articulation / resonance',
//         value: 'Speech therapy for articulation / resonance',
//         key: 'speechTherapy',
//     },
//     {
//         label: 'Focus on oral airflow, pressure consonants',
//         value: 'Focus on oral airflow, pressure consonants',
//         key: 'languageTherapy',
//     },
//     {
//         label: 'Nasality monitoring exercises',
//         value: 'Nasality monitoring exercises',
//         key: 'nasilityMonitoring',
//     },
//     {
//         label: 'ENT / Audiology referral (if not done recently)',
//         value: 'ENT / Audiology referral (if not done recently)',
//         key: 'ent',
//     },
//     { label: 'Dental / orthodontic consult', value: 'Dental / orthodontic consult', key: 'dental' },
//     {
//         label: 'Parent training for home practice',
//         value: 'Parent training for home practice',
//         key: 'parentTraining',
//     },
//     {
//         label: 'Multidisciplinary cleft team follow-up',
//         value: 'Multidisciplinary cleft team follow-up',
//         key: 'multiDisciplinary',
//     },
// ];

export const calculateFluencyPercentage = (
    selected: Record<string, boolean>,
    inputs: Record<string, string>,
) => {
    let total = 0;
    let filled = 0;

    const therapyKeys = [
        'fluencyTherapy',
        'parentEducation',
        'classroomAwareness',
        'slowRate',
        'easyOnset',
        'otReferral',
        'counselingReferral',
        'peerGroup',
    ];

    // --- CHECKBOXES ---
    therapyKeys.forEach((key) => {
        total += 1;
        if (selected[key]) filled += 1;
    });

    // --- SPEECH FREQUENCY (conditional) ---
    if (selected.speechTherapy) {
        total += 1;
        if (inputs.frequency) filled += 1;
    }

    return Math.round((filled / total) * 100);
};
