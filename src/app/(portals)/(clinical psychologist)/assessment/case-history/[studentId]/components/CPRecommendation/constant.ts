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

export const calculateCPPercentage = (
    selected: Record<string, boolean>,
    inputs: Record<string, string>,
) => {
    const totalSections = 1; // Only "Therapies" section
    let completedSections = 0;

    const therapyKeys = [
        'speechTherapy',
        'oralMotor',
        'aac',
        'parentTraining',
        'feeding',
        'otReferral',
        'multidisciplinary',
    ];

    const hasAnyTherapySelected = therapyKeys.some((key) => selected[key]);

    if (hasAnyTherapySelected) {
        // Special condition for speech therapy
        if (selected.speechTherapy) {
            if (inputs.frequency) {
                completedSections += 1;
            }
        } else {
            completedSections += 1;
        }
    }

    return Math.round((completedSections / totalSections) * 100);
};
