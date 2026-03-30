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
    let completedSections = 0;
    const totalSections = 2;

    // --- THERAPIES SECTION ---
    const therapiesCompleted =
        (selected.speech && inputs.speech) ||
        selected.parentTraining ||
        (selected.pecs && inputs.pecs) ||
        selected.ot;

    if (therapiesCompleted) {
        completedSections += 1;
    }

    // --- REFERRALS SECTION ---
    const referralKeys = ['psychologist', 'devPediatrician', 'audiologist', 'homePlan'];

    const referralsCompleted = referralKeys.some((key) => selected[key]);

    if (referralsCompleted) {
        completedSections += 1;
    }

    const percentage = Math.round((completedSections / totalSections) * 100);

    return percentage;
};
