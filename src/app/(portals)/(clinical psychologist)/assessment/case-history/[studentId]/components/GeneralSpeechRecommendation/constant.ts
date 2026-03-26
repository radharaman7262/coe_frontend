/* eslint-disable @typescript-eslint/no-explicit-any */
export const mapApiToState = (data: any) => {
    const selectedState: Record<string, boolean> = {};
    const inputState: Record<string, string> = {};

    // --- THERAPIES ---
    const therapies = data?.therapies;

    if (therapies) {
        // speech
        selectedState.speech = !!therapies.speechTherapy?.selected;
        if (therapies.speechTherapy?.frequencyPerWeek != null) {
            inputState.speech = String(therapies.speechTherapy.frequencyPerWeek);
        }

        // parent training
        selectedState.parentTraining = !!therapies.parentTraining;

        // pecs
        selectedState.pecs = !!therapies.pecsAacTrial?.selected;
        if (therapies.pecsAacTrial?.stage) {
            inputState.pecs = therapies.pecsAacTrial.stage;
        }

        // ot
        selectedState.ot = !!therapies.otSensoryIntegration;
    }

    // --- REFERRALS ---
    const referral = data?.referralTo;

    if (referral) {
        selectedState.psychologist = !!referral.psychologist;
        selectedState.devPediatrician = !!referral.developmentalPediatrician;
        selectedState.audiologist = !!referral.audiologist;
        selectedState.homePlan = !!referral.homePlan;
    }

    return { selectedState, inputState };
};

export const calculatePercentage = (
    selected: Record<string, boolean>,
    inputs: Record<string, string>,
) => {
    let total = 0;
    let filled = 0;

    // --- THERAPIES ---

    // speech (checkbox + input)
    total += 1;
    if (selected.speech) {
        filled += 1;

        total += 1; // input counts only if selected
        if (inputs.speech) filled += 1;
    }

    // parent training
    total += 1;
    if (selected.parentTraining) filled += 1;

    // pecs (checkbox + input)
    total += 1;
    if (selected.pecs) {
        filled += 1;

        total += 1;
        if (inputs.pecs) filled += 1;
    }

    // ot
    total += 1;
    if (selected.ot) filled += 1;

    // --- REFERRALS ---
    const referralKeys = ['psychologist', 'devPediatrician', 'audiologist', 'homePlan'];

    referralKeys.forEach((key) => {
        total += 1;
        if (selected[key]) filled += 1;
    });

    const percentage = Math.round((filled / total) * 100);

    return percentage;
};
