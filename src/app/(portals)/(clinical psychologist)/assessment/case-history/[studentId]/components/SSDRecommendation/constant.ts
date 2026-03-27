/* eslint-disable @typescript-eslint/no-explicit-any */
export const mapSSDApiToState = (data: any) => {
    const selectedState: Record<string, boolean> = {};
    const inputState: Record<string, string> = {};

    const therapies = data?.therapies;

    if (therapies) {
        // --- speech therapy ---
        selectedState.speechTherapy = !!therapies.speechTherapy?.selected;

        if (therapies.speechTherapy?.frequency) {
            inputState.frequency = therapies.speechTherapy.frequency;
        }

        // --- simple checkboxes ---
        selectedState.phonemeDrill = !!therapies.phonemeDrill;
        selectedState.auditoryTraining = !!therapies.auditoryTraining;
        selectedState.oralMotor = !!therapies.oralMotor;
        selectedState.homeProgram = !!therapies.homeProgram;
        selectedState.entReferral = !!therapies.entReferral;

        // --- reevaluation ---
        selectedState.reevaluation = !!therapies.reevaluation?.selected;

        if (therapies.reevaluation?.months) {
            inputState.months = therapies.reevaluation.months;
        }
    }

    return { selectedState, inputState };
};
